import react ,{useEffect, useState}from "react"
import axios from "axios"
import Productlist from "./components/Productlist.js"
import Productdetails from "./components/Productdetails.js"
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
useEffect(()=>{
  fetch()
},[trigger])
return(
  <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>{switchView ("productList")
           setTrigger(!trigger)}}>Outlet</span>
          { view ==="productList" &&<Search />}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          &#9660;
            CATEGORIES
            &#9660;
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
            🛒
            CART
          </span>
          <span className="items" onClick={()=>switchView ("contact")}>
          Contact Us
          </span>
          <span className="items" onClick={()=>switchView ("add")}>
          Add
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' >Sneakers</span>
            <span className='menu-item' >T-Shirts</span>
            <span className='menu-item' >Shirts</span>
            <span className='menu-item' >Accessories</span>
          </div>}
          {view ==="productList" && <Productlist data={data} setView={setView} setOne={setOne} delet={delet} update={update} />}  
          {view ==="productdetails" && <Productdetails  ones={one}/>}
          {view ==="contact" && <Contact/>}
          {view ==="add" && <Add setView={setView} setTrigger={setTrigger} trigger={trigger}/>}
    </div>

)
}







export default App;
