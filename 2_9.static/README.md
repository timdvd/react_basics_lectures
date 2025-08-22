# static

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

## Static Methods in React Classes (Older React)

### In class components, you can define static methods or properties.
### The most common is static defaultProps or static propTypes.

👉 Example (class component):
```
import React from "react";

class Welcome extends React.Component {
  static defaultProps = {
    name: "Guest"
  };

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## ✅ defaultProps is static because it belongs to the class itself, not to an instance.

### More information is here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
