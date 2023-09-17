import { Component } from "react";

class LifeCycle extends Component {
  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return <p>counter {this.props.counter}</p>;
  }
}

class LifeCycleDemo extends Component {
  state = {
    counter: 0,
    show: false,
  };

  handleCounterChange = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleShowChange = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        {this.state.show && <LifeCycle counter={this.state.counter} />}
        <button onClick={this.handleCounterChange}>increment counter</button>
        <button onClick={this.handleShowChange}>show/hide component</button>
      </>
    );
  }
}

export default LifeCycleDemo;
