import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayText: ''
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress);
}

componentWillUnmount() {
  document.removeEventListener('keydown', this.handleKeyPress);
}

playSound (value, sound) {
  const audioEl = document.getElementById(sound);
  audioEl.play();
  this.setState({
    displayText: value
  });
}

handleKeyPress(e) {
  const someChar = String.fromCharCode(e.keyCode);
  const pudToActivate = drumKeys.filter(item => item.name === someChar);
  if(pudToActivate.length !== 0) {
    this.playSound(pudToActivate[0].describe, pudToActivate[0].name);
  }
}

  render () {
    return (
      <div className="App" id='drum-machine'>
      <h1>Hi darling! Let's rock this world together!</h1>
      <Display text={this.state.displayText} />
      <MusicBoard playSound={this.playSound} />
      </div>
    )
  }
}

const Display = (props) => {
  return(
    <div id='display'>
      <span>{props.text}</span>
    </div>
  );
}

const MusicBoard = (props) => {
  const drumPads = drumKeys.map(
  item => <button className='drum-pad' id={item.describe} onClick={() => {props.playSound(item.describe, item.name)}}>
    {item.name}
    <audio className='clip' src={item.source} id={item.name} />
  </button>
  );
  return(
    <div className='music-board'>
      {drumPads}
    </div>
  );
}

const drumKeys = [
  {
    name: 'Q',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    describe: 'heater 1'
  },
  {
    name: 'W',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    describe: 'heater 2'
  },
  {
    name: 'E',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    describe: 'heater 3'
  },
  {
    name: 'A',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    describe: 'heater 4'
  },
  {
    name: 'S',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    describe: 'heater 6'
  },
  {
    name: 'D',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    describe: 'dsc oh'
  },
  {
    name: 'Z',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    describe: 'kick and hat'
  },
  {
    name: 'X',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    describe: 'rp4 kick 1'
  },
  {
    name: 'C',
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    describe: 'cev h2'
  }
];


export default App;
