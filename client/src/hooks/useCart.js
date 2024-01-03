import { createContext, useContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartContextProvider =({props}) => {

    const [cartTotalQth, setCartTotalQty] = useState(0);

    const value = {cartTotalQth}
    return (
      <CartContext.Provider {...props} value={value}>
      </CartContext.Provider>
    )
  }

  export const useCart = () => {
    const context = useContext(CartContext);
    if(context === null){
       throw new Error("useCart must be used with a cartcontextprovider");

    }
    return context;
  }