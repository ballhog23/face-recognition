import React, { Component } from "react";
import Register from "./components/register/Register";
import SignIn from "./components/signIn/Signin";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Particles from "react-tsparticles";
import { particlesConfig } from "./particlesConfig/particlesConfig";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "deefff6bba814b298aa89ed556a5e593",
});

class App extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      input: ``,
      imageUrl: ``,
      box: [],
      route: `signin`,
      isSignedIn: false,
    };
  }

  // handle user input
  onInputChange = (event) => {
    console.log("input changed");
    this.setState({ input: event.target.value });
  };

  // get the face location bounding box
  calculateFaceLocation = (data) => {
    // const clarifaiFace =
    //   data?.outputs[0].data.regions[0];
    // console.log(clarifaiFace);
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    // return {
    //   leftCol: clarifaiFace.left_col * width,
    //   topRow: clarifaiFace.top_row * height,
    //   rightCol: width - clarifaiFace.right_col * width,
    //   bottomRow: height - clarifaiFace.bottom_row * height,
    // };
    const clarifaiFace = data?.outputs[0].data.regions;
    console.log(clarifaiFace);
    let boxInfo = clarifaiFace.map((element) => element);
    console.log(boxInfo);
    let boxBoundary = boxInfo.map((i) => {
      return {
        leftCol: i.region_info.bounding_box.left_col * width,
        topRow: i.region_info.bounding_box.top_row * height,
        rightCol: width - i.region_info.bounding_box.right_col * width,
        bottomRow: height - i.region_info.bounding_box.bottom_row * height,
      };
    });
    console.log(boxBoundary)
    this.setState({box: boxBoundary})
    console.log('box state: ', this.state.box)
  };

  // display the face bounding box
  // displayFaceBox = (box) => {
  //   this.setState({ box: box });
  //   console.log('box state: ', this.state.box)
  // };

  // handle button click
  onButtonClick = () => {
    console.log("click");
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      // handle response
      .then((response) => {
        console.log(response);
        this.calculateFaceLocation(response);
      })
      // handle error
      .catch((err) => console.log("something went wrong", err));
  };

  // handle route change from signin form, and register form
  // to app main content
  onRouteChange = (route) => {
    // handle sign in
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    // handle dynamic route
    this.setState({ route: route });
    console.log("route: ", route);
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles id="tsparticles" options={particlesConfig} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonClick={this.onButtonClick}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" || route === "signout" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;