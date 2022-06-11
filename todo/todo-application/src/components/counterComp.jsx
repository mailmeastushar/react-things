import React from "react";

class Counter extends React.Component {
  handleClasses () {
    let classes = "badge m-2 bg-"
    classes += this.props.counter.value !== 0 ? "primary" : "warning"
    return classes
  }

  handleZero () {
    return this.props.counter.value === 0 ? 'zero' : this.props.counter.value  
  }
  render() {
    return (
        <div>
            <span className={this.handleClasses()}>{this.handleZero()}</span>
            <button onClick={() => this.props.handleIncrement(this.props.counter)} className="btn m-4 btn-primary">+</button>
            <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-danger"> - </button>
        </div>
    );
  }
}

export default Counter;
