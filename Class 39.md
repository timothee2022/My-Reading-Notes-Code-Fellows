# Class 39

## Here is my Class 39 reading notes


[Redux Toolkit (RTK)](https://redux-toolkit.js.org/introduction/getting-started)

1. The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

* "Configuring a Redux store is too complicated"
* "I have to add a lot of packages to get Redux to do anything useful"
* "Redux requires too much boilerplate code"

We can't solve every use case, but in the spirit of create-react-app, we can try to provide some tools that abstract over the setup process and handle the most common use cases, as well as include some useful utilities that will let the user simplify their application code.

2. Redux Toolkit includes these APIs:

* configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

* createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

"Quoting from reading materials"

[Mobx](https://mobx.js.org/getting-started.html)

1. MobX is a simple, scalable and battle tested state management solution. This tutorial will teach you all the important concepts of MobX in ten minutes. MobX is a standalone library, but most people are using it with React and this tutorial focuses on that combination.

2. MobX makes state management simple again by addressing the root issue: it makes it impossible to produce an inconsistent state. The strategy to achieve that is simple: Make sure that everything that can be derived from the application state, will be derived.

3. Making React reactive

Ok, so far we made a silly report reactive. Time to build a reactive user interface around this very same store. React components are (despite their name) not reactive out of the box. The observer HoC wrapper from the mobx-react-lite package fixes that by basically wrapping the React component in autorun. This keeps the component in sync with the state. This is conceptually not different from what we did with the report before.

"Quoting from reading materials"

## Tutorial

[Tutorial](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)

## Bookmark and Review

[Redux Toolkit (RTK)](https://redux-toolkit.js.org/)

[HookState](https://hookstate.js.org/)


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>