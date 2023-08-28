import { createContext,useState,useEffect } from "react";

const addCartItem=(cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === productToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map((cartItem)=> 
            cartItem.id === productToAdd.id 
            ? {...cartItem,quantity: cartItem.quantity+1} 
            : cartItem)
    }

    return [...cartItems,{...productToAdd, quantity:1 }];
    
}


const removeCartItem=(cartItems,cartItemToRemove)=>{
    //find the cartItem to remove which already exists inside our array
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === cartItemToRemove.id
    );

    //check if quantity == to 1 , if ture then remove that item from cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id);
    }
    //return back cartItems with matching cartItems with reduced quantity

    return cartItems.map((cartItem)=>
        cartItem.id === cartItemToRemove.id ? {...cartItem,quantity: cartItem.quantity-1} : cartItem
    )
}

const clearCartItem =(cartItems,cartItemToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id !== cartItemToClear.id);
}



export const CartContext = createContext({
    isCartOpen:false,
    cartItems:[],
    setIsCartOpen:()=>{},
    addItemToCart:()=> {},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    cartTotal: 0

});


export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>cartItem.quantity+total,0);
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=>cartItem.quantity*cartItem.price+total,0);
        setCartTotal(newCartTotal);
    },[cartItems]);


    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    
    const removeItemFromCart=(cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }
    
    const clearItemFromCart=(cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems,cartItemToClear));
    }

    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}