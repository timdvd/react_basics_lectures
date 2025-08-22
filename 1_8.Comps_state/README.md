# State: A Component's Memory

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## What is State?
### - State is data that a component remembers between renders.
### - Unlike props (which are passed in from parents), state is owned and managed by the component itself.
### - When state changes, React re-renders the component to update the UI.

👉 Think of state as a notebook your component carries with it — it writes values there, and React uses that notebook to redraw the UI correctly every time.
```
🔹 Example: State as Memory
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state: count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### ✅ Here:
 - count is the component’s memory.
 - Even if the component re-renders, count remains stored until changed.
 - Without state, the counter would always go back to 0 after each render.

## State vs. Props
### - Props = external input, like arguments to a function.
### - State = internal memory, like local variables that survive re-renders.

## State Across Renders

### Every render of a component is like running the function again from scratch.
 - Normally, local variables reset each time.
 - But state persists — React keeps it between renders.

Example without state ❌:
```
function BadCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count); // works in console
  }
  return <button onClick={increment}>Clicked {count} times</button>;
}
```
 - UI will not update because React doesn’t “remember” count.

Example with state ✅:
```
function GoodCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}
```
## Mental Model
 - State is memory that React keeps attached to a component.
 - Each component instance has its own state.
 - If a component unmounts → its memory (state) is erased.

### More information is here: https://react.dev/learn/state-a-components-memory
