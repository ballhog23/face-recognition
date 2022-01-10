import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from "react-tsparticles";
import { particlesConfig } from './particlesConfig/particlesConfig';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles id="tsparticles" options={particlesConfig} />
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {
          // <FaceRecognition />
        }
      </div>
    );
  }
}

export default App;
