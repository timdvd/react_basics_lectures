# Immutability

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

## What is Immutability?
 - Immutable means “unchangeable.”
 - In React, you don’t modify state directly — instead, you create a new copy of the state with the updated value.

### 👉 Why?
 - React relies on detecting changes to re-render components.
 - If you mutate state directly, React may not notice and won’t update the UI.

### ❌ Mutating State (Wrong Way)
```
const [numbers, setNumbers] = useState([1, 2, 3]);

function addNumber() {
  numbers.push(4); // ❌ directly modifying state
  setNumbers(numbers); // React may not re-render
}
```
### ✅ Updating State Immutably (Correct Way)
```
function addNumber() {
  setNumbers([...numbers, 4]); // create a new array
}
```

### Here:
 - ...numbers copies old values.
 - [...numbers, 4] creates a new array.
 - React sees it’s a new object → re-renders.

### Immutability with Objects
```
const [user, setUser] = useState({ name: "Artem", age: 30 });
```
### ❌ Wrong: user.age = 31;
```
setUser({ ...user, age: 31 }); // ✅ Correct
```
## Why Immutability Matters
1) Re-rendering → React can detect changes properly.
2) Predictability → Old state is not lost (useful for debugging, undo/redo features).
3) Pure functions → State updates are easier to test.

### Common Patterns
1) Arrays
 - Add: setItems([...items, newItem])
 - Remove: setItems(items.filter(item => item.id !== id))
 - Update: setItems(items.map(item => item.id === id ? {...item, name: "Updated"} : item))

2) Objects
 - Update field: setUser({...user, age: user.age + 1})

### ✅ Key Idea:
 - In React, never mutate state directly. Always create a new copy when updating arrays or objects.

### More information is here: https://react.dev/learn/updating-objects-in-state
