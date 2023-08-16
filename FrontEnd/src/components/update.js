import React,{useEffect, useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Update({updated}) {
console.log(updated,"hey")   
const [name,setName]=useState("")
const [description,setDescription]=useState("")
const [imageUrl,setImageUrl]=useState("")
const [price,setPrice]=useState(null)
const [category,setCategory]=useState("")





const handleClick = (e)=>{
    e.preventDefault()
axios.put(`http://localhost:4000/api/products/${updated}`,{
    name:name,
    description:description,
    price:price,
    imageUrl:imageUrl,
    category:category
})
.then((result)=>{console.log(result)
})
.catch(err=>console.log(err))

}
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
   
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        
          required
          id="outlined-required"
          label="name"
          name='name'
        //   defaultValue={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
        
        required
        id="outlined-required"
        label="description"
        name='description'
        // defaultValue={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <TextField
        
          required
          id="outlined-required"
          label="category"
          name='category'
        //   defaultValue={category}
          onChange={(e)=>setCategory(e.target.value)}
        />
      <TextField
        
        required
        id="outlined-required"
        label="price"
        name='price'
        type='number'
        // defaultValue={price}
        onChange={(e)=>setPrice(e.target.value)}
      />
      <TextField
        
        required
        id="outlined-required"
        label="imageUrl"
        name='imageUrl'
        // defaultValue={imageUrl}
        onChange={(e)=>setImageUrl(e.target.value)}
      />
      </div>
      <button
      onClick={
        
        handleClick
      
      
      }
      >Update Product</button>
    </Box>
  );
    }