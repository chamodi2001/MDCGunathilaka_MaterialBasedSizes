Download the 'newreactmobile' and 'springbootbackend' zip folders to your machine. Unzip them.
*On Android Studio,
 Install the Android SDK- Android 14 (UpsideDownCake) 
 Download Android SDK Platform 34 with, Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
(for further more details, visit "https://reactnative.dev/docs/0.73/environment-setup?guide=native&os=windows&platform=android")

1)Backend Setup: 
(Spring Boot with MySQL)
* Navigate to the 'springbootbackend' folder and run the application using your java IDE (IntelliJ is preffered)
* Start the MySQL server using Xampp(or any preffered s/w).
* Configure the application.properties file with your MySQL database credentials in the application.
* Run the application using Intelij IDEA or with mvn spring-boot:run.
-------------------------------
For Database connection,
* Import the 'newsqldb' sql file to your MySQL database using MySQL workbench or localhost phpMyAdmin.
--------------------------------------------------------------------------------------------------------------------------------------------------------

 
2)Frontend Setup:
(React Native)
* Run the application on an Android  using npx react-native run-android.
* Connect your machine with mobile phone(android) using a USB cable.
  Do the follow changes in your mobile settings, 
           1. Turn on the developer setting.   
           2. Allow install via USB
           3. Revoke USB debugging authorizations.
           4. Turn on USB debugging.

* Navigate to the 'newreactmobile' frontend folder.
* Install dependencies using 'npm install' command.
(Check the authorized devices by using 'adb devices' command.)
* Your phone and machine should be in the same network. Get the IPv4 by running 'ipconfig /all' command.
* Put and change that IP address in the /all/config.js file.

* Start the React Native Metro server with 'npx react-native run-android' command.
-------------------------------------------------------------------------
* Register as a new user or,
* Else Login using these credentials,
   1. username: User1
      password: User1@2#

  or,
  2. username: Chamo
     password: Chamo1@2#

* For PayPal login credentials use,
  Email:    sb-tpyrq24868012@business.example.com
  Password: HM4(g+g8
-----------------------------------------------------------------------------------------------------------------------------------------------------------
  
