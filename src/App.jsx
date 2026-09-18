import React, { Component } from 'react';
import { InferenceClient } from '@huggingface/inference';

import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

import './App.css';

const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);


class App extends Component {
  constructor() {
    super();

    this.state = { 
      input: '', 
      imageUrl: '', 
      box: {}, 
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
  });
  }

  onButtonSubmit = async () => { 
    console.log('click');

    this.setState({ 
      imageUrl: this.state.input, 
    });

    try { 
      const image = await fetch(this.state.input); 
      const imageBlob = await image.blob(); 
      
      const response = await client.objectDetection({ 
        model: 'facebook/detr-resnet-50', 
        data: imageBlob, 
      }); 
      
      console.log(response); 
    } catch (err) { 
      console.log(err); 
    }
  }

  render () {
    return (
      <div className="App">
        <ParticlesBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition
          imageUrl={this.state.imageUrl} 
        />
      </div>
    )
  }
}

export default App;