# Props and Components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Components in React
### A component is a reusable, independent piece of UI in React.
 - They can be functional components (using functions) or class components (older style, less common now).
 - Components return JSX (UI markup).
 - Components can accept props to become dynamic.

### 👉 Example of a functional component:
```
function Header() {
  return <h1>Welcome to my app!</h1>;
}
```
## Props in React
### Props (properties) let you pass data from parent to child components.
 - They work like arguments to a function.
 - They are read-only (cannot be modified by the child).

### 👉 Example:
```
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Artem" />
      <Greeting name="Malala" />
    </div>
  );
}
```
### Here:
 - Greeting is a component.
 - name is a prop.
 - App passes different props to Greeting.

## Combining Components + Props
### Components become powerful when you use them together.
```
function UserCard({ name, role }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Artem" role="Chef" />
      <UserCard name="Malala" role="Inspiration" />
    </div>
  );
}
```
### ✅ Here:
 - UserCard is a reusable component.
 - We pass name and role props to customize each card.

### More information is here: https://react.dev/learn/passing-props-to-a-component
