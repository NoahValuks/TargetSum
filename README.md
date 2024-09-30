# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android

#OR
react-native run-android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios

#OR
react-native run-ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is how the game should look when first loaded: 

<img width="334" alt="image" src="https://github.com/user-attachments/assets/94933c66-fc3b-4ba8-87c0-e718af783743">

You have 10 seconds to press the numbers that add up to the targe sum at the top.

If you win, you'll see: 

<img width="334" alt="image" src="https://github.com/user-attachments/assets/26d1ef7b-0154-4b65-af1c-da89ab91cf8b">

And if you lose, you'll see: 

<img width="334" alt="image" src="https://github.com/user-attachments/assets/34ca6a3b-36f6-4581-9895-106fdbdea450">

The play again button will restart the game with a new target number

Example of play:

https://github.com/user-attachments/assets/745ce4fa-c5a9-41f7-9865-0db11c2c20aa



