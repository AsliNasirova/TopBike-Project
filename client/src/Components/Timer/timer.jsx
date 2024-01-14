import React, { Component } from 'react';
import './timer.scss'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: props.initialTime,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      timeRemaining: prevState.timeRemaining - 1,
    }));

    if (this.state.timeRemaining === 0) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { timeRemaining } = this.state;
    const days = Math.floor(timeRemaining / (24 * 60 * 60)); 
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60)); 
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60); 
    const seconds = timeRemaining % 60;

    return (

      <div className='ReklamTimer'>
        <div className="crcle">
          <h1>{`${days}`}</h1>
          <p style={{ fontSize: "18px" }}><strong>Days</strong></p>
        </div>
        <div className="crcle">
          <h1>{`${hours}`}</h1>
          <p style={{ fontSize: "18px" }}><strong>Hours</strong></p>
        </div>
        <div className="crcle">
          <h1>{`${minutes}`}</h1>
          <p style={{ fontSize: "18px" }}><strong>Minutes</strong></p>
        </div>
        <div className="crcle">
          <h1>{`${seconds}`}</h1>
          <p style={{ fontSize: "18px" }}><strong>Seconds</strong></p>
        </div>
      </div>
    );
  }
}


function Timer() {
  
  const threeDaysInSeconds = 3 * 24 * 60 * 60;
  return <CountdownTimer initialTime={threeDaysInSeconds} />;
}

export default Timer;