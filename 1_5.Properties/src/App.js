import logo from './logo.svg';
import './App.css';

function WhoAmI(props){
  return (
    <div>
      <h1>My Name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My Profile</a>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="john@smith.com"/>
      <WhoAmI name="Alex" surname="Doe" link="alex@doe.com"/>
    </div>
  );
}

export default App;
