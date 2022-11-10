# Class 37

## Here is my Class 37 reading notes

[Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)

1. Multiple slice reducers can respond to the same action, independently update their own slice as needed, and the updated slices are combined into the new state object. Because this pattern is so common, Redux provides the combineReducers utility to implement that behavior.

2. Redux provides the combineReducers() method to combine multiple reducers.

3. An immutable value or object cannot be changed, so every update creates new value, leaving the old one untouched. For example, if your application state is immutable, you can save all the state objects in a single store to easily implement functionality to undo and redo

"Quoting from the reading material"

[Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)

1. First and foremost, combineReducers is simply a utility function to simplify the most common use case when writing Redux reducers. You are not required to use it in your own application, and it does not handle every possible scenario. It is entirely possible to write reducer logic without using it, and it is quite common to need to write custom reducer logic for cases that combineReducer does not handle

2. In order to assemble the new state tree, combineReducers will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using combineReducers does "call all reducers", or at least all of the slice reducers it is wrapping.

"Quoting from the reading material"

[Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)

1.Why will you want to split your reducing functions as your app becomes more complex?

As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

2. The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

3. A popular convention is to name reducers after the state slices they manage, so you can use ES6 property shorthand notation: combineReducers({ counter, todos }). This is equivalent to writing combineReducers({ counter: counter, todos: todos }).

"Quoting from the reading material"

    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>