package com.example.sizerocmdapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import androidx.core.content.ContextCompat;
public class signup extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        Button btnSignup = findViewById(R.id.btnsignup);
        btnSignup.setBackgroundColor(ContextCompat.getColor(this, R.color.black));
    }
}