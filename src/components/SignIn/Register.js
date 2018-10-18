import React from 'react';
import brain from './logo.png';
import Tilt from 'react-tilt';
import './SignIn.css';
class Register extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      signInEmail: '',
      signInPassword: '' ,
      name:'' 
        }
  }

onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

 onSubmitSignIn = () => {
    fetch('https://afternoon-castle-23548.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
         name: this.state.name,
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
  <article className= "br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

    <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
       <div className= "mv3">
        <label className= "db fw6 lh-copy f6" forhtml="name">First Name</label>
        <input className= "b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-95" type="name" name="name" 
        onChange = {this.onNameChange} id="name"/>
       
      </div>
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
       value="Register"
       onClick = {this.onSubmitSignIn}/>
    </div>
   <Tilt className="Tilt br1 shadow-2 center " options={{ max : 25 }} style={{ height: 150, width: 250 }} >
<div className="Tilt-inner pa3"> <img style= {{ paddingBottom:'5px'}} alt = 'logo' src = {brain} /> </div>
</Tilt>
  </div>
</main>
</article>
);


  }


}

/*  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: '' ,
      name:''
        }
  }
onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

onSubmitSignIn = () => {
  fetch('http://localhost:3000/register',{
    method: 'post',
    headers: {'Content-Type' :'application/json'},
    body: JSON.stringify({
      email:this.state.email,
      password:this.state.password,
      name: this.state.name
    })
    
  })
 .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }



render(){
  const{onRouteChange } = this.props;


   return (

<article className= "br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
<main className= "pa4 black-80 center">
  <form className= "measure ">
    <fieldset id="sign_up" className= "ba b--transparent ph0 mh0">
       <legend className="f1 fw6 ph0 mh0">Register</legend>
       
       <div className= "mv3">
        <label className= "db fw6 lh-copy f6" forhtml="name">Name</label>
        <input className= "b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" type="name" name="name" 
        onChange = {this.onNameChange} id="name"/>
       
      </div>

      <div className= "mt3">
        <label className= "db fw6 lh-copy f6" forhtml="email-address">Email</label>
        <input className= "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
         type="email" name="email-address"  id="email-address"
         onChange = {this.onEmailChange}/>
        
      </div>
     
       <div className= "mv3">
        <label className= "db fw6 lh-copy f6" forhtml="password">Password</label>
        <input className= "b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  onChange = {this.onPasswordChange}  id="Name"/>
        
      </div>
   
    </fieldset>

    <div className= "">
      <input
              // onClick={() => onRouteChange('home')}
       className= "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
       type="button"  onClick={this.onSubmitSignIn} value="Register!"/>
    </div>

  </form>
  </main>
</article>

     
    );

  }
   
  
}

*/
export default Register;
