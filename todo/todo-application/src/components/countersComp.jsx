import Counter from "./counterComp";
import React from "react";

class Counters extends React.Component {
  render =  () => {
    return (
      <div>
        <button className="btn btn-info btn-sm m-4" onClick={this.props.reset}> Reset </button>
        {this.props.counters.map((item) => (
          <Counter onDelete={this.props.delete} handleIncrement={this.props.increment} key={item.id} counter={item}/>
        ))}
      </div>
    );
  }
}

export default Counters;
