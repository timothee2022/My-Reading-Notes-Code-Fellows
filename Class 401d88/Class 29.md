# Class 29

## Here is my Class 29 reading notes

[useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

1. useReducer is an alternative to use useState hook.

"Quoting from the reading material"

2. useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

"Quoting from the reading material"

3. There are two main ways to initialize state for your application. The createStore method can accept an optional preloadedState value as its second argument. Reducers can also specify an initial value by looking for an incoming state argument that is undefined , and returning the value they'd like to use as a default.

"Quoting from the reading material"

[Ultimate Guide to useReducer](https://blog.logrocket.com/guide-to-react-usereducer-hook/)

1. The reducer function itself accepts two parameters and returns one value. The first parameter is the current state, and the second is the action. The state is the data we are manipulating. The reducer function receives an action, which is executed by a dispatch function:

function reducer (state, action) { }

dispatch ({ type: 'increment' })

2. useReducer returns an array that holds the current state value and a dispatchmethod that logically achieves the same goal as setState, updating the state.

"Quoting from the reading material"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>