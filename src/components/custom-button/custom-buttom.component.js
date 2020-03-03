import React  from 'react'; 
import './custom-button.styles.scss'

const CustomButton = ({children,isGoogleSignIn,onClick,inverted, ...otherProps}) => ( 

    <button onClick={onClick} className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}> 
        {children}  
    </button>
)
export default CustomButton;