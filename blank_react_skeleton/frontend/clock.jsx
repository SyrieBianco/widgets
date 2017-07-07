import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
    //add super, move bind(this)
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {
    return (
      <h1>Clock Widget</h1>
      //display time
    );
  }
}



export default Clock;
