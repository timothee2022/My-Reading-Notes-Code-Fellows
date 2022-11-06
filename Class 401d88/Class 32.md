# Class 33

## Here is my Class 33 reading notes

[Hooks and Context example](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

1. Our context provider is now responsible for both displaying the local state of the snackbars (we call them alerts), and for exposing an API for globally managing them.

The other half of the puzzle is we now need a consumer for this provider. It turns out that our custom hook from before is nothing more than a small wrapper around the useContext internal React hook, which consumes our new context.

Our provider exposes the state mutator setAlerts directly, but we need something much higher level. We don’t want our components fumbling around with how to add an alert without destroying existing ones, and so on. Think of setAlerts as a private method, and we need to expose a public method that abstracts away the noise.

2. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

3. HIGHER-ORDER COMPONENTS: USE CASE

We will start with a problem where Higher-Order Components in React can be used as a solution. Let's have a list component as function component in React which is just there to render a list of items. The list component receives its data from the App component:

![](./Class%2032.PNG)

[Awesome React Context links](https://github.com/diegohaz/awesome-react-context)



"Quoting from the reading material"

    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>