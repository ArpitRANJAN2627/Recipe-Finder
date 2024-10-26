import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({detail}) => {
    console.log(detail)
  return (
    <div className='meals'>
        {!detail? "":

         detail.map((currItem)=>{
            
            return (
                <div key={currItem.idMeal} className='mealImg'>
            <img src={currItem.strMealThumb}/>
            <p>{currItem.strMeal}</p>
            <Link  to ={`/${currItem.idMeal}`}>  <button>Recipe</button></Link>
           
        </div>
            )
         })
        }
    </div>
  )
}

export default MealCard