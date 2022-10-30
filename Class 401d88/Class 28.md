# Class 28

## Here is my Class 28 reading notes

[Effects Hook](https://reactjs.org/docs/hooks-effect.html)

1. Using the Effect Hook

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

The Effect Hook lets you perform side effects in function components:

![](./Class%2028.PNG)

"Quoting from the reading material"

2. 

* What does useEffect do? 

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

* Why is useEffect called inside a component? 

Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

* Does useEffect run after every render? 

Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

"Quoting from the reading material"

3.Effects Without Cleanup

Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side effects.

"Quoting from the reading material"


    For live access to my page, please visit the following link:
<https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git>