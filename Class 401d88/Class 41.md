# Class 41

## Here is my Class 41 reading notes

[getting started with react native](https://facebook.github.io/react-native/docs/getting-started)

1. Core Components

React Native has many Core Components for everything from controls to activity indicators. You can find them all documented in the API section. You will mostly work with the following Core Components:

![React Core Components](./core%20components.PNG)

2. React Native is an open source framework for building Android and iOS applications using React and the app platform’s native capabilities. With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. You can learn more about React in the next section. But first, let’s cover how components work in React Native.

3.React and React Native are developed by Facebook and have gained a huge fan base in a short time. React is known as ReactJs, which is a JavaScript library to build single-page web applications.

Besides, React Native is a React JS-based framework to design mobile apps. Moreover, with reusable components, you can develop native mobile applications.

* React is a JavaScript library of reusable components designed to create skeletons of the apps, whereas React Native is designed to build native mobile apps with reusable components.
* React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript.
* Both React and React Native are ruling the industry and are widely used for mobile and web applications. However, the difference between web apps vs websites will not affect your user.

"Quoting from reading materials"

[expo](https://expo.io/)

1. Expo is a bundle of tools created around React Native to help you start an app very fast. It provides you with a list of tools that simplify the creation and testing of React Native app. It equips you with the components of the user interface and services. 

2. Expo tries to manage as much of the complexity of building apps for you as we can, which is why we call it the managed workflow

"Quoting from reading materials"


[ejecting](https://docs.expo.io/versions/latest/expokit/eject)

1. What is this for?

If you created an Expo project and you want a way to add custom native modules, this guide will explain how to use ExpoKit for that purpose.
Normally, Expo apps are written in pure JS and never "drop down" to the native iOS or Android layer. This is core to the Expo philosophy and it's part of what makes Expo fast and powerful to use.
However, there are some cases where advanced developers need native capabilities outside of what Expo offers out-of-the-box. The most common situation is when a project requires a specific Native Module which is not supported by React Native Core or the Expo SDK.
In this case, Expo allows you to eject your pure-JS project from the Expo iOS/Android clients, providing you with native projects that can be opened and built with Xcode and Android Studio. Those projects will have dependencies on ExpoKit, so everything you already built will keep working as it did before.
We call this "ejecting" because you still depend on the Expo SDK, but your project no longer lives inside Expo Go. You control the native projects, including configuring and building them yourself.

2. You should not eject if:

All you need is to distribute your app in the iTunes Store or Google Play. Expo can build binaries for you in that case. If you eject, we can't automatically build for you any more.
You are uncomfortable writing native code. Ejected apps will require you to manage Xcode and Android Studio projects.
You enjoy the painless React Native upgrades that come with Expo. After your app is ejected, breaking changes in React Native will affect your project differently, and you may need to figure them out for your particular situation.
You require Expo's push notification services. After ejecting, since Expo no longer manages your push credentials, you'll need to manage your own push notification pipeline.
You rely on asking for help in the Expo community. In your native Xcode and Android Studio projects, you may encounter questions which are no longer within the realm of Expo.

3. You might want to eject if:

Your Expo project needs a native module that Expo doesn't currently support. We're always expanding the Expo SDK, so we hope this is never the case. But it happens, especially if your app has very specific and uncommon native demands.

"Quoting from reading materials"

    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>