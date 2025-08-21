# Getting Started with Create React App

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## What Are Props?
### - Props (short for properties) are a way to send data from a parent component to a child component.
### - They make components dynamic and reusable.
### - Think of them like function parameters.

### Example 1: Passing a Single Prop
```
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Artem" />;
}
```

## ✅ Here:
### - App passes a prop name="Artem" to Greeting.
### - Inside Greeting, we use props.name.

### Example 2: Passing Multiple Props
```
function Profile(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

function App() {
  return <Profile username="Malala" age={27} />;
}
```
### More information is here: https://react.dev/learn/passing-props-to-a-component

## ✅ Here:
### - username and age are both passed as props.
