
import React, { Fragment, useState } from 'react'
import MealCard from './MealCard';

const MainPage = () => {

    const [data,setData]=useState();
    const [search,setSearch]=useState("");
    const[msg,setMsg] =useState("");
  
      
    const handleInput=(event)=>{
        setSearch(event.target.value);
    }
    const myFun= async(e)=>{
        e.preventDefault()
        if(search==""){
            setMsg("Please Enter Something")
            return;
        }
        const get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
        const jsonData=await get.json();
        console.log(jsonData.meals)
         setData(jsonData.meals)
        if(jsonData.meals==null){
            setMsg("Data Not Found")
        }
        else
         setMsg("")
    }
  //  console.log(data)
  return (
    <Fragment>
    <h1 className='head'  style={{textAlign:'center'}} >RECIPE FINDER</h1>
    <div className='container'>
        <form  onSubmit={myFun} className='searchBar'>
            <input type="text" placeholder='Enter Dish Name' onChange={handleInput}/>
            <button >Search</button>
        </form>
        <h4 style={{textAlign:'center'}}>{msg}</h4>
        <div>
            <MealCard detail={data}/>
        </div>
      
    </div>
    </Fragment>
  )
}

export default MainPage