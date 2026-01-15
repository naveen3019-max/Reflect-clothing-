package com.example.hotel.ui

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.hotel.admin.AdminActivity

class LockActivity : AppCompatActivity() {

    private var clickCount = 0
    private var lastClickTime = 0L
    
    private val recoveryReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            if (intent?.action == "com.example.hotel.WIFI_RECOVERED") {
                android.util.Log.i("LockActivity", "🎉 WiFi recovered broadcast received - closing breach screen")
                finish()
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Full-screen, immersive lock
        window.decorView.systemUiVisibility =
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
            View.SYSTEM_UI_FLAG_FULLSCREEN or
            View.SYSTEM_UI_FLAG_HIDE_NAVIGATION

        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            setBackgroundColor(android.graphics.Color.parseColor("#FF5722"))
        }

        val warningText = TextView(this).apply {
            text = "⚠️ DEVICE MOVED OUT OF ROOM\n\nStaff has been notified.\n\nPlease return device to room."
            textSize = 22f
            gravity = Gravity.CENTER
            setTextColor(android.graphics.Color.WHITE)
            setPadding(32, 32, 32, 32)
        }
        layout.addView(warningText)

        // Hidden admin access button (tap 5 times quickly)
        val hiddenButton = Button(this).apply {
            text = "."
            alpha = 0.01f // Nearly invisible
            setOnClickListener {
                val currentTime = System.currentTimeMillis()
                if (currentTime - lastClickTime < 500) {
                    clickCount++
                } else {
                    clickCount = 1
                }
                lastClickTime = currentTime

                if (clickCount >= 5) {
                    // Open admin activity
                    val intent = Intent(this@LockActivity, AdminActivity::class.java)
                    startActivity(intent)
                    clickCount = 0
                }
            }
        }
        layout.addView(hiddenButton)

        setContentView(layout)
    }

    override fun onResume() {
        super.onResume()
        // Register receiver to listen for WiFi recovery
        val filter = IntentFilter("com.example.hotel.WIFI_RECOVERED")
        registerReceiver(recoveryReceiver, filter)
    }

    override fun onPause() {
        super.onPause()
        // Unregister receiver
        try {
            unregisterReceiver(recoveryReceiver)
        } catch (e: Exception) {
            // Already unregistered
        }
    }

    override fun onBackPressed() {
        // Allow back button to work
        super.onBackPressed()
    }
}
