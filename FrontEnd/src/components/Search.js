// import React,{useState} from "react";

// const Search=({stal})=>{
//     const [term, setTerm] = useState('');
//     const handleChange = (e) => {
//         const newTerm = e.target.value;
//         setTerm(newTerm);
//         stal(newTerm);
//       }
//     return(
//         <div className='searchForm'>
//         <input type="text" placeholder="looking for ..." className='search' onChange={(e)=>handleChange(e)} />
//         <button className='searchButton'>&#x1F50E;</button>
//     </div>
//     )
// }
import React, { useState } from "react";

const Search = ({ stal }) => {
  const handleChange = (e) => {
    const newTerm = e.target.value;
    stal(newTerm);
  };

  return (
    <div className="searchForm">
      <input
        type="text"
        placeholder="looking for ..."
        className="search"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;

