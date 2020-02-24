import React from 'react' 
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/signIn.component'
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => (
    <div className="sign-in-and-sign-up"> 
      <SignIn /> 
      <SignUp />
    </div>
)
export default SignInSignUp;

