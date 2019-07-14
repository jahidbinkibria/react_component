import React, { Component } from 'react';
import Nav from './components/Nav';
import Counters from './components/Counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 2},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  }

  constructor(){
    super();
    console.log("App - Constructor");
  }
  componentDidMount(){
    //Ajax call
    console.log("app mounted")
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({
      counters,
    })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index)
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})
  }

  handleDelete = ( counterId) =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters,
    })
  }

  handleonDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index)
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters})
  }




  render() {
    console.log('rendred ')
    return (
      <React.Fragment>
        <Nav totalCount={this.state.counters.filter(c => c.value>0).length} />
        <main className="container">
          <Counters 
          onReset={this.handleReset} 
          onDelete={this.handleDelete} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleonDecrement}
          counters = {this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;