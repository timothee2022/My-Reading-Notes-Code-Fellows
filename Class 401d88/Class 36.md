# Class 34

## Here is my Class 34 reading notes

[Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux)

1. What is the first principle of Redux?

As per the first principle, Redux is a singular store for data sharing. Hence, we will start with creating a singleton for storage.

2. As per the first principle, Redux is a singular store for data sharing. Hence, we will start with creating a singleton for storage. In addition to this, we will connect view layer to state layer with React-Redux. The previous state will change when an action is triggered by the user, which means that upon will return to the new state.

3. Name three Redux store methods given to us by createStore and describe their use.

* reducer (Function): 

A reducing function that returns the next state tree, given the current state tree and an action to handle.

* [preloadedState] (any): 

The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.

* [enhancer] (Function): 

The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

4. combineReducers() helps you organize your reducers to manage their own slices of state

"Quoting from the reading material"

### Bookmark and Review

[worlds easiest guide to redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)

[testing reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)

[Redux Docs](https://redux.js.org/)

"Quoting from the reading material"

    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>