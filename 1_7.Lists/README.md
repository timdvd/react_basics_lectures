# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Preserving State

### React preserves state as long as the same component is rendered in the same place in the tree.
```
👉 Example:

function App() {
  return (
    <div>
      <Counter />   {/* State preserved */}
      <Counter />   {/* Each has its own state */}
    </div>
  );
}
```

### - ✅ Each Counter has independent state that React remembers.

## Resetting State

### React resets state when:
 - A component is removed from the tree.
 - A component is replaced by another (even if it looks the same).
```
👉 Example:

function App({ show }) {
  return (
    <div>
      {show ? <Counter /> : <p>Hidden</p>}
    </div>
  );
}
```

### If show changes from true → false → true, the Counter unmounts and remounts, so its state resets to 0.

## Preserving vs Resetting with key

### React uses a component’s position in the tree to decide if it should preserve state.
### If you give components different key values, React treats them as different components → state resets.
```
👉 Example:

function App({ user }) {
  return (
    <div>
      <Profile key={user.id} user={user} />
    </div>
  );
}
```

### - When user.id changes, the Profile component resets its state.

If you keep the same key, the state is preserved.

## Summary
### - State is preserved if the component stays in the tree at the same position.
### - State is reset if the component unmounts, or if its key changes.
### - Use keys deliberately to control whether state should be kept or reset.
