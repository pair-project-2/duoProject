import React from "react";
import Productdetails from "./Productdetails";

const Productlist =({data})=>{
<div>
    <ul className ="clothes"> 
    {data.map((e,i)=>{
        return (
            <li className = "clothes-list-item">
   < Productdetails e={e} key={i}/>
            </li>
        )
        
    })
    }
    </ul >
</div>
}










export default Productlist