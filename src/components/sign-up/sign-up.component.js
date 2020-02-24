import React, { Component } from 'react'; 
import { auth, CreateUserProfileDocument} from '../../firebase/firebase.utils' 
import CustomButton from '../custom-button/custom-buttom.component' 
import FormInput from '../form-input/form-input.component' 
import './sign-up.styles.scss'

class SignUp extends Component {
    constructor(props){
        super(props); 

        this.state = {
            password: '', 
            confirmPassword: '',
            email: '',
            displayName: ''
        }
    } 
    handleSubmit = async e => {
        e.preventDefault(); 
        const { password, confirmPassword, email, displayName} = this.state;
        
        if(password !== confirmPassword) {
            alert('passwords dont match'); 
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
              await CreateUserProfileDocument(user, {displayName});
                this.setState({
                    password: '', 
                    confirmPassword: '',
                    email: '',
                    displayName: ''
                })
            } catch(error){
              console.error(error);
        };
    }
    handleChange = e => {
        const {name,  value} = e.target; 
        this.setState({ [name]: value})
    }
    render() { 
        //  const { password, confirmPassword, email, displayName} = this.state;
        return (
            <div className="sign-up">
                
                <h2 className="title"> I do not have an account </h2> 
                <span> Sign Up with your email and your password </span> 

                <form className="sign-up-form" onSubmit={this.handleSubmit}> 
                    <FormInput className="form-input" 
                        type='text'
                        name="displayName"
                        value={this.state.displayName}
                        label='displayName' 
                        onChange={this.handleChange}
                    /> 

                    <FormInput className="form-input" 
                        type='email'
                        name="email"
                        value={this.state.email}
                        label='email' 
                        onChange={this.handleChange}
                    /> 

                    <FormInput className="form-input" 
                        type='password'
                        name="password"
                        value={this.state.password}
                        label='password' 
                        onChange={this.handleChange}
                    /> 

                    <FormInput className="form-input" 
                        type='password'
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        label='confirm Password' 
                        onChange={this.handleChange}
                    /> 

                    <CustomButton type="submit"> Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;