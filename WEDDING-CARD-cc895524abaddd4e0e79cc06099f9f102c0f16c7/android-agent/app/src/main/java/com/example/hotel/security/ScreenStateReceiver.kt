package com.example.hotel.security

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.PowerManager
import android.util.Log

/**
 * Detects screen lock/unlock events
 * 
 * IMPORTANT: When screen is locked, WiFi may disconnect due to power-saving.
 * This is NORMAL behavior, NOT a security breach!
 * 
 * Android 10+ Compatible: Uses PowerManager.isInteractive (API 20+)
 */
class ScreenStateReceiver : BroadcastReceiver() {
    
    companion object {
        @Volatile
        var isScreenOn: Boolean = true
            private set
        
        @Volatile
        private var screenLockedTime: Long = 0
        
        // Grace period: Ignore WiFi disconnects for 90 seconds after screen lock
        // WiFi doesn't disconnect immediately when screen locks - takes 30-60 seconds
        private const val SCREEN_LOCK_GRACE_PERIOD_MS = 90_000L // 90 seconds
        
        fun getIsScreenLocked(): Boolean = !isScreenOn
        
        /**
         * Check if WiFi breach should be ignored due to screen lock
         * Returns true if:
         * - Screen is currently locked, OR
         * - Screen was locked within last 90 seconds (grace period)
         */
        fun shouldIgnoreWiFiBreach(): Boolean {
            if (!isScreenOn) {
                return true // Screen is locked RIGHT NOW
            }
            
            // Check if we're within grace period after screen unlock
            if (screenLockedTime > 0) {
                val timeSinceScreenLock = System.currentTimeMillis() - screenLockedTime
                if (timeSinceScreenLock < SCREEN_LOCK_GRACE_PERIOD_MS) {
                    val secondsRemaining = (SCREEN_LOCK_GRACE_PERIOD_MS - timeSinceScreenLock) / 1000
                    Log.d("ScreenState", "⏳ Within grace period after screen lock ($secondsRemaining seconds remaining)")
                    return true
                }
            }
            
            return false
        }
        
        /**
         * Initialize screen state from PowerManager (Android 10+ compatible)
         * Call this when service starts to detect current screen state
         */
        fun initializeScreenState(context: Context) {
            val powerManager = context.getSystemService(Context.POWER_SERVICE) as PowerManager
            isScreenOn = powerManager.isInteractive
            if (!isScreenOn) {
                screenLockedTime = System.currentTimeMillis()
            }
            val state = if (isScreenOn) "UNLOCKED/ON" else "LOCKED/OFF"
            Log.i("ScreenState", "🔍 Initialized screen state: $state")
        }
    }
    
    override fun onReceive(context: Context?, intent: Intent?) {
        when (intent?.action) {
            Intent.ACTION_SCREEN_OFF -> {
                isScreenOn = false
                screenLockedTime = System.currentTimeMillis()
                Log.i("ScreenState", "🌙 Screen LOCKED/OFF - WiFi disconnects will be ignored for 90 seconds")
            }
            Intent.ACTION_SCREEN_ON -> {
                isScreenOn = true
                // Don't reset screenLockedTime - keep grace period active
                Log.i("ScreenState", "☀️ Screen UNLOCKED/ON - Grace period active for 90 seconds")
            }
            Intent.ACTION_USER_PRESENT -> {
                // User unlocked the device (passed lock screen)
                isScreenOn = true
                // Reset grace period after user actually unlocks (not just screen on)
                val elapsed = if (screenLockedTime > 0) (System.currentTimeMillis() - screenLockedTime) / 1000 else 0
                screenLockedTime = 0 // Reset grace period
                Log.i("ScreenState", "🔓 User unlocked device - WiFi monitoring ACTIVE (was locked for ${elapsed}s)")
            }
        }
    }
}
