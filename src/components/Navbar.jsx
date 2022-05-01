import {CartContext} from '../context/cartContext'
import {useContext} from 'react'
export const Navbar=()=>{

    const{cart}=useContext(CartContext) //consumer
    return (
        <nav style={{
            display:"flex",
            justifyContent:"center",
            margin:"auto",
            padding:"25px",
            border:"3px solid purple",
             height:"100px",
             width:"23.10%",
             backgroundColor:"#BFA2DB",
             color:"white"
        }}
        
        
        >
            Cart:{cart}
        </nav>
    )
}

