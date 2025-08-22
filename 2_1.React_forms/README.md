# Forms

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Forms in React

### In plain HTML, forms manage their own state.
### In React, you usually make forms controlled — meaning React state stores the input values.

## Controlled Components

 - A controlled component is one where the form element’s value is controlled by React state.

👉 Example: Text input
```
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
    alert(`Submitted name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}                 // value comes from state
        onChange={(e) => setName(e.target.value)} // update state
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
### ✅ Key Idea:
 - Forms in React = inputs tied to state → React always knows the current values.

## ✅ Here:
 - The input field’s value = name (state).
 - On every keystroke, onChange updates state.
 - On submit, we use the state value.

### More information is here: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
