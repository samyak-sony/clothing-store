require('dotenv').config();
const stripe = require("stripe")('sk_test_51O8EfYSEzLKXEZNPNQG31FyipPp7WUKY26RBaGfhY9W6oxJE4jlb9Gt4Bq6fUqGzok7v8lVnRvW8eS2fihvo4x7Z00U3hVhNb0');

exports.handler = async(event)=>{
    try{
        const {amount}=JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency:"usd",
            payment_method_types:["card"],
        });
        return{
            statusCode:200,
            body:JSON.stringify({paymentIntent})
        }

    }catch(error){
        console.log({error});
        return{
            statusCode:400,
            body:JSON.stringify({error})
        }
    }
}