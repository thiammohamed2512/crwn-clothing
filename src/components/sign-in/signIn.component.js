import React, { Component } from 'react'
import './sign-in.component.scss'
import CustomButton from '../custom-button/custom-buttom.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

 class SignIn extends Component { 
     constructor(props){
         super(props); 
         this.state = {
             password:'',
             email:''
         }
     }
     handleSubmit = (e) => {
        e.preventDefault(); 
        this.setState({password: '', email: ''})  
     }
     handleChange = (e) => {
         this.setState( { [e.target.name] : e.target.value } )
     }
    render() {
        return (
            <div className='sign-in'> 
               <h2> I already have an account</h2> 
               <span> sign in with email and password </span> 

               <form onSubmit={this.handleSubmit}> 
                 <FormInput 
                   type='email' 
                   name='email' 
                   value={this.state.email} 
                   handleChange={this.handleChange}
                   label='email'
                   required/> 
               
                 <FormInput 
                   type='password' 
                   name='password' 
                   value={this.state.password} 
                   handleChange={this.handleChange}
                   label='password' 
                   required/> 
                  <div className="buttons"> 
                    <CustomButton type='submit' value='signin'> SignIn </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '} 
                        Sign In with google {' '}
                    </CustomButton>
                  </div>
                
               </form>
            </div>
        )
    }
}
export default SignIn;
