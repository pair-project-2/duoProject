import react ,{useEffect, useState}from "react"
import axios from "axios"
import Productlist from "./components/Productlist.js"
import Productdetails from "./components/Productdetails.js"
import Search from "./components/Search.js"

import "./app.css"
import Add from "./components/Add.js"
import Update from "./components/update.js"





const App=()=>{
  const [menuView,setMenuView]=useState(false);
  const [view,setView] = useState("productList");
  const [data,setData] = useState([]);
  const [one,setOne]=useState([]);
  const [trigger,setTrigger] = useState(false)
  const [tshirts, setTishirt] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [accessories,setAccessories]= useState([])
  const [updated,setUpdated]=useState({})

const switchView=(view)=>{
  setView(view)
}
const toggleMenu = ()=> {
  setMenuView(!menuView)
}

console.log(data,"this is it")
console.log(tshirts,"tshirts");
console.log(sneakers,"sneakers");
console.log(jeans,"jeans");
console.log(accessories,"access");
console.log(tshirts,"tshirts");
useEffect(()=>{
  axios.get("http://localhost:4000/api/products")
  .then((res)=>{
    setSneakers(res.data.filter((e)=>e.category ==="sneakers"))
    setJeans(res.data.filter((e)=>e.category ==="jeans"))
    setTishirt(res.data.filter((e)=>e.category === "Tshirt"))
    setAccessories(res.data.filter((e)=> e.category ==="accessories"))
    setData(res.data)
  })
  .catch(err=>console.log(err))
 
},[trigger])


const upd=(obj)=>{
  setView("update")
  setUpdated(obj)
}


const delet=(id)=>{
axios.delete(`http://localhost:4000/api/products/${id}`)
.then(res=>{setTrigger(!trigger)})
.catch(err=>console.log(err))
};
const update=(id)=>{
  axios.put(`http://localhost:4000/api/products/${id}`)
  .then(res=>{setTrigger(!trigger)})
  .catch(err=>console.log(err))
  };
  const stalSearch = (terms) => {
    if (!terms) {
      setTrigger(!trigger);
    } else {
      setData(
        data.filter((e) =>
          e.name.toLowerCase().includes(terms.toLowerCase())
        )
      );
    }
  };
return(
  <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>{switchView ("productList")
           setTrigger(!trigger)}}>Outlet</span>
          { view ==="productList" &&<Search stal={stalSearch} />}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          
            CATEGORIES
            
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
          
            CART
          </span>
          
         
          <span className="items" onClick={()=>switchView ("add")}>
          UPDATE
          </span>
         
          
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick={()=>setData(sneakers)} >Sneakers</span>
            <span className='menu-item' onClick={()=>setData(tshirts)} >T-Shirts</span>
            <span className='menu-item' onClick={()=>setData(jeans)} >jeans</span>
            <span className='menu-item' onClick={()=>setData(accessories)} >Accessories</span>
          </div>}
          {view ==="productList" && <Productlist upd={upd} data={data} setView={setView} setOne={setOne} delet={delet} update={update} />}  
          {view ==="productdetails" && <Productdetails  ones={one}/>}
          {view ==="solde" && <Solde/>}
          
          {view ==="add" && <Add setView={setView} setTrigger={setTrigger} trigger={trigger}/>}
          {view ==="update" && <Update updated={updated} setView={setView} setTrigger={setTrigger} trigger={trigger}/>}
          
    </div>

)
}







export default App;
