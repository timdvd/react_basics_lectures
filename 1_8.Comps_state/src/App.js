import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WhoAmI extends Component{
  constructor (props){
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: this.state.years + 1
    }))
  }

  render (){
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My Name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My Profile</a>
      </div>
    )
  }
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
