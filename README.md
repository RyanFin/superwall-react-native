# superwall-react-native

## Superwall Documentation
- Docs: https://superwall.com/docs/installation-via-package

npx expo install @superwall/react-native-superwall
npx expo install expo-build-properties (for Android)

Ensure that app.json contains:
```
"expo": {
    ...
"plugins": [
      "expo-build-properties"
    ]
}
```

## Running the App
Options to Run This Code:
1. Use a Custom Development Client
To test superwall-react-native in your Expo app, you need to build a custom development client that includes the native module. Here's how to do it:

Install expo-dev-client:
`npm install expo-dev-client`

Prebuild the Project: This generates the necessary native files for iOS and Android.
`expo prebuild`

Rebuild the App: Use Expo to build a custom development client:
```
expo run:android # For Android
expo run:ios     # For iOS (requires a Mac and Xcode)
```

Install the Custom Client on Your Device: Once the app is built, you can install and run it. This custom client includes the superwall-react-native module.


- Go to Window > Devices and Simulators within XCode.
- Plug your iPhone directly into your Mac and ensure that your physical iPhone shows up in the Devices panel. 