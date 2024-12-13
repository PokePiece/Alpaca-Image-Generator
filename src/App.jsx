import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Alpaca Image Generator</h1>
      <p>This is an Alpaca Image Generator. You will be able to customize
      a picture of an Alpaca using various features in real time. 
      View it below. </p>
      <Alpaca />
    </div>
  );
}

class Alpaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeColor: 'black'
    };
    this.handleEyeColorChange = this.handleEyeColorChange.bind(this);
  }

  handleEyeColorChange = (color) => {
    this.setState({ eyeColor: color });
  };

  render() {
    return (
      <div id="alpaca-program">
            <div id="alpaca-image" className="alpaca-entity">
              <div id="alpaca-head" className="alpaca-entity">
                <div id="left-eye" className={`eye-${this.state.eyeColor}`}></div>
                <div id="right-eye" className={`eye-${this.state.eyeColor}`}></div>
              </div>
              <div id="alpaca-body" className="alpaca-entity"></div>
              <div id="alpaca-legs" className="alpaca-entity"></div>
              <div id="alpaca-feet" className="alpaca-entity"></div>
            </div>
            <div id="interface">
              <p>Can you read me? This is where the user will interact with
                the interface to alter and adjust the Alpaca image.
              </p>
              <button class="eye-btn" onClick={() => this.handleEyeColorChange('brown')}>Turn its eyes brown!</button>
              <button class="eye-btn" onClick={() => this.handleEyeColorChange('black')}>Turn its eyes black!</button>
              <button class="eye-btn" onClick={() => this.handleEyeColorChange('blue')}>Turn its eyes blue!</button>
            </div>
            </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);