
import { CartContext } from "../../context/cartContext";
import {useContext} from 'react'
export const Cart =()=>{
    const {handelchange}=useContext(CartContext)
    return <div style={{
        width:"300px",
        height :"300px",
        padding:"10px",
        background:"#C1FFD7",
        border:"3px solid green",
        margin:"auto",
        paddingTop:"5%"
    }}>
        <button onClick={()=>{
            handelchange(1)
        }}>Add To card</button>
    </div>
}