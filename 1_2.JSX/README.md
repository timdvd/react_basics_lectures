# JSX

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## JSX (JavaScript XML) is a syntax extension for JavaScript that is most commonly used with React.

### It allows you to write HTML-like code inside JavaScript, making it easier to describe what the user interface (UI) should look like.

### For example, instead of writing a lot of React.createElement() calls, you can write this:
```
function Hello() {
  return <h1>Hello, world!</h1>;
}
```
### Under the hood, JSX is not HTML—it gets compiled (transformed) into standard JavaScript objects that React can understand. The above code is turned into something like:
```
function Hello() {
  return React.createElement("h1", null, "Hello, world!");
}
```

## Key Points about JSX:
### - Looks like HTML, but is JavaScript.
### - Can include JavaScript expressions inside { }.
### - Must return a single parent element.
### - Uses className instead of class, and other small differences from HTML.
### - Makes React code easier to read and write.

### More information is here: https://react.dev/learn/writing-markup-with-jsx
