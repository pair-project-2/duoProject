import react ,{useEffect, useState}from "react"
import axios from "axios"
import Productlist from "./components/Productlist.js"
import Productdetails from "./components/Productdetails.js"
import CartList from "./components/Cartlist.js"
import Search from "./components/Search.js"
import Contact from "./components/Contact.js"
import "./app.css"
import Add from "./components/Add.js"



const App=()=>{
  const [menuView,setMenuView]=useState("");
  const [view,setView] = useState("productList");
  const [data,setData] = useState([]);
  const [one,setOne]=useState([]);
  const [trigger,setTrigger] = useState(false)
  const [tshirts, setTishirt] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [accessories,setAccessories]= useState([])
  const [cart,setCart] = useState([])

const switchView=(view)=>{
  setView(view)
}
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const fetch=()=>{
  axios.get("http://localhost:4000/api/products")
  .then(res=>setData(res.data))
  .catch(err=>console.log(err))
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
useEffect(()=>{
  fetch()

  setSneakers(data.filter((e)=>e.category === "sneakers"))
  setShirts(data.filter((e)=>e.category === "shirt"))
  setTishirt(data.filter((e)=>e.category === "Tshirt"))
  setAccessories(data.filter((e)=>e.category === "accessories"))

},[trigger])
const cartStal = (obj) => {
  setCart([...cart,obj])
  }
  
  const removeStal =(index)=>{
    var newState = [...cart]
    newState.splice(index,1)
    setCart(newState)
    }
  
  const emptyCart = () => {
    setCart([])
  }
return(
  <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>{switchView ("productList")
           setTrigger(!trigger)}} >Outlet</span>
         
          { view ==="productList" &&<Search stal={stalSearch} />}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          
            CATEGORIES
            
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
          
            CART
          </span>
          <span className="items" onClick={()=>switchView ("contact")}>
          CONTACT
          </span>
          <span className="items" onClick={()=>switchView ("add")}>
          UPDATE
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick={()=>setData(sneakers)} >Sneakers</span>
            <span className='menu-item' onClick={()=>setData(tshirts)} >T-Shirts</span>
            <span className='menu-item'onClick={()=>setData(shirts)} >Shirts</span>
            <span className='menu-item'onClick={()=>setData(accessories)} >Accessories</span>
          </div>}
          {view ==="productList" && <Productlist data={data} setView={setView} setOne={setOne} delet={delet} update={update} cartStal={cartStal} />}  
          {view ==="productdetails" && <Productdetails  ones={one}/>}
          {view ==="contact" && <Contact/>}
          {view ==="add" && <Add setView={setView} setTrigger={setTrigger} trigger={trigger}/>}
          {view === "cart" && <CartList remove={removeStal} cartData = {cart} empty={emptyCart}/>}
    </div>

)
}







export default App;
