import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Particles from "react-tsparticles";
import { particlesConfig } from './particlesConfig/particlesConfig';
import Clarifai, { GENERAL_MODEL } from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'deefff6bba814b298aa89ed556a5e593'
});

class App extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  // handle user input
  onInputChange = (event) => {
    console.log('input changed')
    this.setState({ input: event.target.value });
  }
  // handle button click
  onButtonClick = () => {
    console.log('click');

    this.setState({imageUrl: this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        function (response) {
          // handle resp
          console.log(response)
          response = response?.outputs[0].data.regions[0].region_info?.bounding_box
          console.log(response)
        },
        function (err) {
          // handle err
          console.log('something went wrong', err)
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Particles id="tsparticles" options={particlesConfig} />
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
