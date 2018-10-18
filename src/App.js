import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Face from './components/Face/Face'

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import SignIn from './components/SignIn/SignIn'
import Register from './components/SignIn/Register'
const app = new Clarifai.App({
 apiKey: '7551ceb8ae854fcab4ae5ecddcb62dac'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl:'',
      box: {},
      route:'signin',
      isSignedIn:false,
      showImage: false,
    user:{
        id:'124',
        name:'',
        email:'',
        entries:0,
        joined : ''

      }
  }
}

  loadUser = (data) => {
    this.setState({user: {
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined : data.joined

    }})
    }

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const Name =data.outputs[0].data.regions[0].data.face.identity.concepts[0].name;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(Name);
         return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
      Name:Name
     
    }
  }
  displayFaceBox=(box) => {
   
    this.setState({box:box});
    
  }

onRouteChange=(route) => {
  if(route=== 'signout')
  {
    this.setState({isSignedIn:false})
    this.setState({showImage:false})
    this.setState({box:''});
  }
  else if(route ==='home'){
      this.setState({isSignedIn:true})
      this.setState({box:''});
  }
  this.setState({route: route});
 
}


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  /*
  onSubmit = () => {
    console.log(this.state.input);
    this.setState({imageUrl:this.state.input});
    app.models.predict('e466caa0619f444ab97497640cefc4dc', this.state.input)

    .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))   
  }
*/


onSubmit = () => {
    
    this.setState({imageUrl: this.state.input})
    app.models.predict('e466caa0619f444ab97497640cefc4dc', this.state.input).then(response=> 
    {
     if(response){
      fetch('https://afternoon-castle-23548.herokuapp.com/image',{
      method: 'put',
      headers: {'Content-Type' :'application/json'},
      body: JSON.stringify({
      id:this.state.user.id,
     
    })
    })
      .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

    }
    this.displayFaceBox(this.calculateFaceLocation(response))
  }
  )}



  


  render() {
    return (
      <div className="App">
      <Particles className = 'particles'
        params={{
            particles: {
            number: {
                value: 30,
                density: {
            enable: true,
             value_area: 800
      }
    }
                }
              }}
          
            />
            <Navigation onRouteChange= {this.onRouteChange} isSignedIn = {this.state.isSignedIn} />
            {this.state.route === 'home' 
            ?  <div>
              <Logo />
                <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm  onInputChange = { this.onInputChange} onSubmit = {this.onSubmit} />
              <Face imageUrl = {this.state.imageUrl} box={this.state.box} showImage = {this.state.showImage}  />
              </div>
              :(this.state.route ==='signin'
           ? <SignIn  loadUser = {this.loadUser} onRouteChange= {this.onRouteChange} />
              :   <Register loadUser = {this.loadUser} onRouteChange= {this.onRouteChange} />
  )}
    
      </div>
    );
  }
}

export default App;
