import { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  loadUser = (data) => {
    console.log('LOAD USER DATA:', data);
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const hfPerson = data.find(item => item.label === 'person').box;
    const image = document.getElementById('inputimage'); 
    const width = Number(image.width); 
    const height = Number(image.height); 
    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;

    console.log('Displayed:', image.width, image.height);
    console.log('Natural:', image.naturalWidth, image.naturalHeight);
    console.log('HF box:', hfPerson);

    const scaleX = width / naturalWidth;
    const scaleY = height / naturalHeight;
    return {  
      leftCol: hfPerson.xmin * scaleX,
      topRow: hfPerson.ymin * scaleY,
      rightCol: width - (hfPerson.xmax * scaleX),
      bottomRow: height - (hfPerson.ymax * scaleY),
    };
  };

  displayFaceBox = (box) => {
  console.log(box);
  this.setState({
      box: box,
    });
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
  });
  }

  onButtonSubmit = async () => {
  console.log('1. click');
  this.setState({
    imageUrl: this.state.input,
  });
  try {
    console.log('2. sending image URL to backend');
    const response = await fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.user.id,
        imageUrl: this.state.input,
      }),
    });
    const data = await response.json();
    console.log('3. Backend response:', data);
    const box = this.calculateFaceLocation(data.detections);
    console.log('4. calculated box:', box);
    this.displayFaceBox(box);
    console.log('5. displayFaceBox done');
    this.setState({
      user: {
        ...this.state.user,
        entries: data.entries,
      },
    });
    console.log('6. entries updated');
  } catch (err) {
    console.log('ERROR:', err);
  }
};
 

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState)
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render () {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBackground />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? <div> 
              <Logo />
              <Rank 
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition
                imageUrl={imageUrl} 
                box={box}
              />
            </div>
          : ( route === 'signin'
            ? <SignIn 
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              /> 
            : <Register 
                onRouteChange={this.onRouteChange} 
                loadUser={this.loadUser} 
              /> 
          )
        }
      </div>     
    )
  }
}

export default App;