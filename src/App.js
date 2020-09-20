<<<<<<< HEAD
import React, { Component } from "react";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Navigation from "./Components/Navigation/Navigation.js";
import SignIn from "./Components/SignIn/SignIn.js";
import Register from "./Components/Register/Register.js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition.js";
import Logo from "./Components/Logo/Logo.js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./Components/Rank/Rank.js";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "9731b0bbf41042108538c4f78e5a8f1e",
=======
import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';


const app = new Clarifai.App({
  apiKey: '9731b0bbf41042108538c4f78e5a8f1e'
>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124
});
const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
<<<<<<< HEAD
        value_area: 800,
      },
    },
  },
};
=======
        value_area: 800
      }
    }
  }
}

>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124

class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      input: "",
      imageUrl: "",
      box: {},
      route: "signIn",
      isSignedIn: false,
    };
=======
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false
    }
>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124
  }
  

  calculateFaceLocation = (data) => {
<<<<<<< HEAD
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
=======
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      topRow: clarifaiFace.top_row * height,
<<<<<<< HEAD
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
      leftCol: clarifaiFace.left_col * width,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box }); //with ES 6 you can use this.setState({box})
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };
=======
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
      leftCol: clarifaiFace.left_col * width,
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box }); //with ES 6 you can use this.setState({box}) 
  }


  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

<<<<<<< HEAD
=======

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }


>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124
  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
<<<<<<< HEAD
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signIn" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
=======
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
          this.state.route === 'home'
            ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
            : (
              route === 'signIn'
                ? <SignIn onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )

        }
>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124
      </div>
    );
  }
}
<<<<<<< HEAD
=======



>>>>>>> 4bd60adf9597565e7f5e5fb0e5e7caf9225ef124

export default App;
