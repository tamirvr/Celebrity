import React from 'react';
import brain from './logo.png';
import Tilt from 'react-tilt';
import './SignIn.css';
class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      signInEmail: '',
      signInPassword: ''  
        }
  }



  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

 onSubmitSignIn = () => {
    fetch('https://afternoon-castle-23548.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }
  /*
  fetch('http://localhost:3000/signin',{
    method: 'post',
    headers: {'Content-Type' :'application/json'},
    body: JSON.stringify({
      email:this.state.signInEmail,
      password:this.state.signInPassword
    })
    
  })
 .then(response => response.json())
      .then(data => {
        if (data === 'success') {
          this.props.onRouteChange('home');
        }
      })
  
*/


  render() {
    const{ onRouteChange} = this.props;
    return(
  <div>
      
      
  <article className= "br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

    <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign in</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" forhtml="email-address">Email</label>
        <input onChange = {this.onEmailChange}
         className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" forhtml="password">Password</label>
        <input onChange = {this.onPasswordChange} 
         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
       type="submit" 
       value="Sign in"
       onClick = {this.onSubmitSignIn}/>
    </div>
     <div className=""> 
              <p  onClick={() => onRouteChange('register')} className=" b ph2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</p>
            </div>
  <Tilt className="Tilt br1 shadow-2 center " options={{ max : 25 }} style={{ height: 150, width: 250 }} >
<d1 className="Tilt-inner pa3"> <img style= {{ paddingBottom:'5px'}} alt = 'logo' src = {brain} /> </d1>
</Tilt>
  </div>
</main>

</article>
</div>
);


  }


}

export default SignIn;
