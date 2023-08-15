import React,{useState} from "react";

const Search=()=>{
    const [query,setQuery] = useState('')
    return(
        <div className='searchForm'>
        <input type="text" placeholder="looking for ..." className='search' onChange={(e)=>setQuery(e.target.value)} />
        <button className='searchButton'>&#x1F50E;</button>
    </div>
    )
}
export default Search