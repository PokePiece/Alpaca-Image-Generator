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
      eyeColor: 'black',
      furColor: "grey"
    };
    this.handleEyeColorChange = this.handleEyeColorChange.bind(this);
  }

  handleEyeColorChange = (color) => {
    this.setState({ eyeColor: color });
  };

  handlefurColorChange = (color) => {
    this.setState({furColor: color});
  };

  render() {

    
    return (
      
      <div id="alpaca-program">
            <div id="alpaca-image" className="alpaca-entity">
              <div id="alpaca-head" className="alpaca-entity">
                <div id="left-eye" className={`eye-${this.state.eyeColor}`}></div>
                <div id="right-eye" className={`eye-${this.state.eyeColor}`}></div>
              </div>
              <div id="alpaca-body" className={`alpaca-entity fur-${this.state.furColor}`}></div>
              <div id="alpaca-legs" className="alpaca-entity">
                <div id="front-left-leg"></div>
                <div id="front-right-leg"></div>
                <div id="rear-left-leg"></div>
                <div id="rear-right-leg"></div>
              </div>
              <div id="alpaca-feet" className="alpaca-entity"></div>
            </div>
            <div id="interface">
              <h2>Alpaca Adjustor Controls</h2>
              <div id="adjust-alpaca">
                <div id="eye-adjustors">
                <h3>Adjust Eyes</h3>
              <button class="eye-btn" onClick={() => this.handleEyeColorChange('brown')}>Turn its eyes brown!</button>
              <button class="eye-btn" onClick={() => this.handleEyeColorChange('black')}>Turn its eyes black!</button>
              <button class="eye-btn" onClick={() => this.handleEyeColorChange('blue')}>Turn its eyes blue!</button>
              </div>
              <div id="fur-adjustors">
                <h3>Adjust Fur</h3>
                <button class="fur-btn" onClick={() => this.handlefurColorChange("blue")}>Give blue fur</button>
                <button class="fur-btn" onClick={() => this.handlefurColorChange("grey")}>Give grey fur</button>
                <button class="fur-btn" onClick={() => this.handlefurColorChange("peanut")}>Give peanut fur</button>
              </div>
              </div>
            </div>
            </div>
            
    ); 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);