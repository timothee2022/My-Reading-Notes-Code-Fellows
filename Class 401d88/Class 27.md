# Class 27

## Here is my Class 27 reading notes

[Introducing Hooks](https://reactjs.org/docs/hooks-intro.html#motivation)

1. Motivation for introducing Hooks:
Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.

"Quoting from the reading material"

2. The major difference between Hooks and class-based state is that hooks are used inside of the functional component. One thing to keep in mind is that never call hooks inside of a any logic, it should always be on the top level! useState() is a hook that allows you to play with state in functional components in react.

"Quoting from the reading material"

3.With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

"Quoting from the reading material"

[Hooks API](https://reactjs.org/docs/hooks-overview.html)

1. Two rules imposed by React Hook usage:

* Don't call Hooks inside loops, conditions, or nested functions.
* Don't call Hooks from regular JavaScript functions.

2. Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.

Earlier on this page, we introduced a FriendStatus component that calls the useState and useEffect Hooks to subscribe to a friend’s online status. Let’s say we also want to reuse this subscription logic in another component.

"Quoting from the reading material"

[The state Hook](https://reactjs.org/docs/hooks-state.html)

1. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

2. The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.

3. useState enables you to add state to function components. Calling React. useState inside a function component generates a single piece of state associated with that component. Whereas the state in a class is always an object, with Hooks, the state can be any type.

4. The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn't have to be an object. We can keep a number or a string if that's all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable.

5. useState accepts an initial state and returns two values: The current state. A function that updates the state.


"Quoting from the reading material"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>