import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';


const app = new Clarifai.App({
  apiKey: '9731b0bbf41042108538c4f78e5a8f1e'
 });
const particlesOptions = {
  particles: {
    number:{
     value: 100,
     density: {
       enable: true,
       value_area: 800
     }
    }
  }  
}


class App extends Component  {
  constructor() {
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data)=> {
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById ('inputimage');
   const width = Number (image.width);
   const height = Number (image.height);
   
   return{
     topRow: clarifaiFace.top_row * height,
     rightCol: width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row * height),
     leftCol: clarifaiFace.left_col * width,
   }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState ({box:box}); //with ES 6 you can use this.setState({box}) 
  }

  onInputChange =(event) =>{ 
    this.setState({input: event.target.value});

  }


 onButtonSubmit = () => {
      this.setState({ imageUrl:this.state.input });
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then (response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch (err => console.log(err));
  }
    
                                            
        
  
  render() {
  return (
    <div className ="App">
      <Particles className = 'particles'
              params= {particlesOptions} />
              
      <Navigation />
      <Logo  />
      <Rank /> 
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit= {this.onButtonSubmit}/>
      <FaceRecognition box = { this.state.box} imageUrl = {this.state.imageUrl} /> 
    </div>
);
}}

      

export default App;
