import React from 'react' 
import StripeCheckout from 'react-stripe-checkout' 

const stripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = "pk_test_WUJLvG1aLjHVXY5z3bjxzdU9002jJGm8iX"; 
    const onToken = token => {
        console.log('payement succesful');
    }
    return(
        <StripeCheckout 
            label =' pay now'
            name = ' CRWN clothing Ltd.'
            billingAddress
            shippingAddress 
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`your total is $${price}`} 
            amount = {priceForStripe}
            panelLabel = 'pay now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}
export default stripeCheckoutButton;