import {createContext , useState} from 'react'
//1. create context like a box
 export const CartContext=createContext();
// 2. initilize 
//take app and put as child inside box
//context gives value to al
//context provider 
//react component
//context storee only 1 value --if u wnat more use array obj etc...
//whatever inside the tag is children of that tag
export const CartContextProvider=({children})=>{
    const [cart,setCart] = useState(0);
    const handelchange=(inc)=>{
        setCart(cart+inc);
    }
    return <CartContext.Provider value={{cart , handelchange}}>{children}
       {/* App  is a consumer */}
       {/* <App></App> */}
    </CartContext.Provider>
}