# Responding to Events

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## What Are Events in React?
### - Events are user interactions like clicks, typing, submitting a form, etc.
### - In React, events work very similarly to HTML DOM events, but with some differences.

## Differences from HTML Events
1) React uses camelCase instead of lowercase:
```
<button onClick={handleClick}>Click Me</button>
```
 - (not onclick like in plain HTML).

2) You pass a function reference, not a string:
```
<button onClick={() => alert("Clicked!")}>Click</button>
```
 - (not onClick="alert('Clicked!')").

### Example: Handling a Click
```
function Button() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Example: Using State + Events
```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}
```

### ✅ When the button is clicked:
 - handleClick runs → updates state.
 - React re-renders → UI updates.

### Example: Passing Arguments to Event Handlers
```
function GreetingButton({ name }) {
  function sayHello() {
    alert(`Hello, ${name}!`);
  }

  return <button onClick={sayHello}>Greet {name}</button>;
}

function App() {
  return (
    <>
      <GreetingButton name="Artem" />
      <GreetingButton name="Malala" />
    </>
  );
}
```
### Common React Events
 - onClick
 - onChange (for input fields)
 - onSubmit (for forms)
 - onMouseEnter / onMouseLeave
 - onKeyDown / onKeyUp

### More information is here: https://react.dev/learn/responding-to-events
