# SASS and SCSS

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

## What is Sass / SCSS?
 - Sass = Syntactically Awesome Style Sheets → a CSS preprocessor.
 - It adds variables, nesting, mixins, functions, and more to regular CSS.
 - SCSS is just a newer syntax of Sass that looks more like standard CSS.
```
👉 Example:

// SCSS (recommended syntax)
$primary-color: #3498db;

.button {
  background: $primary-color;
  color: white;

  &:hover {
    background: darken($primary-color, 10%);
  }
}
```
### This compiles down to normal CSS:
```
.button {
  background: #3498db;
  color: white;
}
.button:hover {
  background: #2980b9;
}
```
## Using Sass/SCSS in React

1) Install Sass
```
npm install sass
```

2) Create SCSS file
```
/* styles/Button.scss */
$primary: #ff5733;

.my-button {
  background: $primary;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
}
```

3) Import into Component
```
import './styles/Button.scss';

function Button({ text }) {
  return <button className="my-button">{text}</button>;
}
```

### ✅ React will compile SCSS → CSS automatically (via the sass package).

## Benefits of Sass/SCSS in React
 - Variables → Reuse values ($primary-color).
 - Nesting → Cleaner styles for components.
 - Mixins → Reusable style snippets.
 - Partials & Imports → Split SCSS into smaller files.
 - Functions → Like darken(), lighten(), etc.
