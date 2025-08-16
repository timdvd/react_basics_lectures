import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: block;
  a {
    text-decoration: none;
    color: black;
    background-color: gold;
    margin: 15px 0 15px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    top: 10px;
  }
  `;
const Header = styled.h2`
  font-size: 24px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        <Header>My Name is {name}, surname - {surname}, 
          age - {years}, 
          position - {position}
        </Header>
        <a href={link}>My Profile</a>
        <form>
          <span>Введите должность:</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div
`
  width: 600px;
  height: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="John" surname="Smith" link="john@smith.com"/>
      <WhoAmI name="Alex" surname="Doe" link="alex@doe.com"/>
    </Wrapper>
  );
}

export default App;
