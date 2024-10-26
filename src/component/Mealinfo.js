import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Mealinfo = () => {
    const {mealid}=useParams();
    const[info,setInfo]=useState()
    console.log(mealid)
    const navigate = useNavigate();


    const getInfo=async()=>{
        const  get =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData= await get.json();
        setInfo(jsonData.meals[0])
    }

   if(info!="" ){
    getInfo()
   }
  return (
    <div>
        {!info?"Loading..." :
  
    <div className='mealInfo'>
        <img src={info.strMealThumb} />
        <div className='info'>
            <h1  >Recipe Detail</h1>
            <h2 style={{fontFamily:'fantasy'}}>{info.strMeal}</h2>
            <h3 >Instruction's</h3>
            <p style={{letterSpacing:'0.5px'}}>{info.strInstructions}</p>
          
        <button  onClick={()=>navigate('/')} >Go Back</button>
        
        </div>
      
    </div>
        }
    </div>
   

  )
}

export default Mealinfo