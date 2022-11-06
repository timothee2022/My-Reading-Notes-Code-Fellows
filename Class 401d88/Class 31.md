# Class 31

## Here is my Class 31 reading notes

1. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

"Quoting from the reading material"

2. Context is primarily used when some data needs to be accessible by many components at different nesting levels. 

"Quoting from the reading material"

3. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context

"Quoting from the reading material"

[Awesome React Context links](https://github.com/diegohaz/awesome-react-context)

* [Dynamic Context](https://reactjs.org/docs/context.html#dynamic-context)

* [Updating Context from a Nested Component](https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)

* [Consuming Multiple Contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts)



"Quoting from the reading material"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>