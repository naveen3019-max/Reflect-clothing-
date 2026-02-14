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
        
        // Grace period: Ignore WiFi disconnects for 3 minutes after screen off
        // Covers manual lock, auto-timeout, and delayed WiFi disconnections
        // Android 10+ can take up to 2 minutes to disconnect WiFi after screen off
        private const val SCREEN_LOCK_GRACE_PERIOD_MS = 180_000L // 180 seconds (3 minutes)
        
        fun getIsScreenLocked(): Boolean = !isScreenOn
        
        /**
         * Check if WiFi breach should be ignored due to screen off
         * Returns true if:
         * - Screen is currently OFF (manual lock OR auto-timeout), OR
         * - Screen was OFF within last 3 minutes (grace period)
         * 
         * This covers:
         * - Manual screen lock (power button)
         * - Auto screen timeout (inactivity)
         * - Delayed WiFi disconnection (Android 10+ can take 1-2 minutes)
         */
        fun shouldIgnoreWiFiBreach(): Boolean {
            if (!isScreenOn) {
                Log.d("ScreenState", "✅ Screen is OFF RIGHT NOW - ignoring WiFi breach")
                return true // Screen is OFF RIGHT NOW
            }
            
            // Check if we're within grace period after screen turned back on
            if (screenLockedTime > 0) {
                val timeSinceScreenOff = System.currentTimeMillis() - screenLockedTime
                if (timeSinceScreenOff < SCREEN_LOCK_GRACE_PERIOD_MS) {
                    val secondsRemaining = (SCREEN_LOCK_GRACE_PERIOD_MS - timeSinceScreenOff) / 1000
                    Log.d("ScreenState", "⏳ Grace period active: $secondsRemaining seconds remaining (screen was off ${timeSinceScreenOff/1000}s ago)")
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
                Log.i("ScreenState", "")
                Log.i("ScreenState", "═══════════════════════════════════════")
                Log.i("ScreenState", "🌙 SCREEN OFF DETECTED")
                Log.i("ScreenState", "   Cause: Manual lock OR Auto-timeout")
                Log.i("ScreenState", "   Action: WiFi breaches IGNORED for 3 minutes")
                Log.i("ScreenState", "   This is NORMAL power management")
                Log.i("ScreenState", "═══════════════════════════════════════")
            }
            Intent.ACTION_SCREEN_ON -> {
                isScreenOn = true
                // Don't reset screenLockedTime - keep grace period active
                val elapsed = if (screenLockedTime > 0) (System.currentTimeMillis() - screenLockedTime) / 1000 else 0
                Log.i("ScreenState", "☀️ Screen turned ON (was off for ${elapsed}s) - Grace period STILL ACTIVE for 3 minutes")
            }
            Intent.ACTION_USER_PRESENT -> {
                // User unlocked the device (passed lock screen)
                isScreenOn = true
                // Reset grace period after user actually unlocks (not just screen on)
                val elapsed = if (screenLockedTime > 0) (System.currentTimeMillis() - screenLockedTime) / 1000 else 0
                screenLockedTime = 0 // Reset grace period
                Log.i("ScreenState", "")
                Log.i("ScreenState", "═══════════════════════════════════════")
                Log.i("ScreenState", "🔓 USER UNLOCKED DEVICE")
                Log.i("ScreenState", "   Screen was off for: ${elapsed}s")
                Log.i("ScreenState", "   WiFi monitoring: ACTIVE")
                Log.i("ScreenState", "   Grace period: RESET")
                Log.i("ScreenState", "═══════════════════════════════════════")
            }
        }
    }
}
