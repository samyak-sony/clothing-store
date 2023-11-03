import React,{useContext, useState} from "react";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { CardElement, useStripe,useElements, PaymentElement } from "@stripe/react-stripe-js";
import {BUTTON_TYPES_CLASSES}from "../button/button.component";
import { PaymentFormContainer,FormContainer,PaymentButton } from "./payment.form.styles";

const PaymentForm=()=>{
    const stripe=useStripe();
    const elements=useElements();
    const {cartTotal} = useContext(CartContext);
    const {currentUser}=useContext(UserContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false); 

    const paymentHandler = async(e)=>{
        e.preventDefault();
        if(!stripe||!elements){
            return;
        }
        setIsProcessingPayment(true);
        const response=await fetch('/.netlify/functions/create-payment-intent',{
            method: 'post',
            headers:{
                
                "Content-Type": "application/json",
            },
            body: JSON.stringify({amount: cartTotal*100}),
        }).then((res)=> {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json(); 
        });
        const {paymentIntent:{client_secret}} = response;  
        console.log(client_secret);

        const paymentResult= await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser?currentUser.displayName:'Guest'
                }
            }
        });
        setIsProcessingPayment(false);
        if(paymentResult.error){
            alert(paymentResult.error.message);
        }else{
            if(paymentResult.paymentIntent.status=== 'succeeded'){
                alert('Payment succesful!');
            }
        }
    }
    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:  </h2>
                <CardElement/>
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPES_CLASSES.inverted}> 
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}   
export default PaymentForm;