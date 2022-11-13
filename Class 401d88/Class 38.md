# Class 38

## Here is my Class 38 reading notes

[async actions](https://redux.js.org/advanced/asyncactions)

1. Why use Redux middleware?

Redux middleware can do anything when it sees a dispatched action: log something, modify the action, delay the action, make an async call, and more. Also, since middleware form a pipeline around the real store.dispatch function, this also means that we could actually pass something that isn't a plain action object to dispatch, as long as a middleware intercepts that value and doesn't let it reach the reducers.

2. Redux follows the unidirectional data flow. It means that your application data will follow in one-way binding data flow. As the application grows & becomes complex, it is hard to reproduce issues and add new features if you have no control over the state of your application.

3. Redux looked like a godsend when we started migrating old code to this new feature. It made the code look slicker, it was extremely intuitive to understand and reduced drastically the number of props floating around the application. But it was not perfect. The very nature of reducers poses a problem when you’re encompassing the fetching of information in them, and that’s something the Redux community has been tackling for a very long time.

"Quoting from reading materials"

[thunk middleware](https://github.com/reduxjs/redux-thunk)

1. Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.

2. Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

"Quoting from reading materials"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>