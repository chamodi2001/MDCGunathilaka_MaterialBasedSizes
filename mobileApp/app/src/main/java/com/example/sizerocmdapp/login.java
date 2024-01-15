package com.example.sizerocmdapp;

import androidx.appcompat.app.AppCompatActivity;
import android.widget.Button;
import androidx.core.content.ContextCompat;


import android.os.Bundle;

public class login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Button btnLogin = findViewById(R.id.btnlogin);
//        btnLogin.setBackgroundColor(getResources().getColor(R.color.black));
        btnLogin.setBackgroundColor(ContextCompat.getColor(this, R.color.black));


    }
}