import React from "react";
import Counters from "./components/countersComp";
import NavBar from "./components/navbarComp";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (counter_id) => {
    const counters = this.state.counters.filter((c) => c.id !== counter_id);
    this.setState({ counters: counters });
  };

  handleClick = (counter) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = [...this.state.counters];
    counters.map((c) => (c.value = 0));
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <NavBar counters={this.state.counters}/>
        <main className="container">
          <Counters
            reset={this.handleReset}
            delete={this.handleDelete}
            increment={this.handleClick}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
