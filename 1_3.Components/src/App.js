import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  const styledField = {
    width: '300px',
    color: 'red',
    height: '25px'
  }
  return <input placeholder='Type here' type='text' style={styledField}/>
}

class InputField extends Component {
  render(){
      const styledField = {
        width: '300px',
        color: 'red',
        height: '25px'
      }
      return <input placeholder='Type here' type='text' style={styledField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Field />
      <Btn />
    </div>
  );
}

export {Header};
export default App;
