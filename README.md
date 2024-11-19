# Bombadil

Simply store quotes.

## Motivation

Quotes apps on iphone fall into two categories:
* They are great but cost money
* They are free and aren't great

I don't want to pay for a quotes app, hence I might as well make my own that does exactly what I want
and learn something in the process.

## Tech choices

I'm using expo for fast cross-platform development.

My plan is to use local storage to begin with (exact choice tbc),
maybe store in a server somewhere if I can do that for free and easily (exact choice tbc).

## Requirements

* node v20+
* expo

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
