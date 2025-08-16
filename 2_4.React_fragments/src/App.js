import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WhoAmI extends Component{
  constructor (props){
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: ''
    }
    // this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => {
    this.setState(state => ({
      years: this.state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render (){
    const {name, surname, link} = this.props;
    const {position, years} = this.state;



    return (
      <>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My Name is {name}, surname - {surname}, 
          age - {years}, 
          position - {position}
        </h1>
        <a href={link}>My Profile</a>
        <form>
          <span>Введите должность:</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </>
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
