import React, { Component } from 'react'
import Counter from "./Counter";

export class counters extends Component {

  
  render() {

    const {onReset,onDelete,onIncrement,counters, onDecrement} = this.props;

    return (
      <div>
        <button 
          onClick={onReset}
          className="btn btn-primary btn-sm m2">Reset</button>

        {counters.map(counter => 
        <Counter key={counter.id} 
          counter={counter} 
          onDelete={onDelete} 
          onIncrement={onIncrement}
          onDecrement = {onDecrement}
        />
        )}
      </div>
    )
  }
}

export default counters
