# CSS in React

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

## 1. Plain CSS (Global Styles)
 - You can use regular CSS files just like in plain HTML.

👉 Example:
```
/* App.css */
.container {
  padding: 20px;
  background: #f4f4f4;
}

import './App.css';

function App() {
  return <div className="container">Hello React</div>;
}
```

### ✅ Simple, but all styles are global (can cause conflicts).

## 2. Inline Styles

 - You can pass a style object directly to an element.

Keys use camelCase instead of -.
```
function Button() {
  return (
    <button style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
      Click Me
    </button>
  );
}
```

✅ Good for dynamic styles, but can get messy.

## 3. CSS Modules (Scoped CSS)

### A safer way: styles are scoped to a single component, avoiding conflicts.
 - File name must be ComponentName.module.css.

👉 Example:
```
/* Button.module.css */
.btn {
  background: purple;
  color: white;
  padding: 10px;
  border-radius: 8px;
}
```
```
import styles from './Button.module.css';

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

### ✅ Each CSS class is unique (no global collisions).

## 4. CSS-in-JS (Styled Components / Emotion)

### With libraries like styled-components, you can write CSS directly in JavaScript.

👉 Example (using styled-components):
```
npm install styled-components
```
```
import styled from "styled-components";

const Button = styled.button`
  background: tomato;
  color: white;
  padding: 12px;
  border-radius: 8px;

  &:hover {
    background: darkred;
  }
`;

function App() {
  return <Button>Click Me</Button>;
}
```

### ✅ Styles are component-scoped, dynamic, and support theming.

## 5. Frameworks & Preprocessors
 - Sass/SCSS → write advanced CSS (variables, nesting, mixins).
 - Tailwind CSS → utility-first CSS framework.
 - Bootstrap / React-Bootstrap → prebuilt styled components.

## Summary
 - Plain CSS → simplest, global.
 - Inline styles → good for dynamic changes.
 - CSS Modules → scoped per component (recommended).
 - CSS-in-JS → powerful, modern, dynamic.
 - UI frameworks → fast prototyping (Bootstrap, Tailwind).
