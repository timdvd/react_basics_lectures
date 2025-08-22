# Fragments

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## What is a React Fragment?
 - A Fragment lets you group multiple elements without adding an extra DOM node.
 - Normally in React, a component must return one root element.
 - Instead of wrapping everything in a <div>, you can use a Fragment.

### Without Fragment ❌ (extra div in DOM)
```
function UserInfo() {
  return (
    <div>   {/* unnecessary wrapper */}
      <h2>Artem</h2>
      <p>Chef & Founder</p>
    </div>
  );
}
```
### With Fragment ✅ (no extra div)
```
function UserInfo() {
  return (
    <>
      <h2>Artem</h2>
      <p>Chef & Founder</p>
    </>
  );
}
```
👉 <>...</> is shorthand for <React.Fragment>...</React.Fragment>.

### When to Use Fragments
 - Avoiding unnecessary <div> wrappers (cleaner DOM).
 - Returning multiple children from a component.
 - Rendering lists where you don’t want extra nodes.

### More information is here: https://react.dev/reference/react/Fragment#fragment
