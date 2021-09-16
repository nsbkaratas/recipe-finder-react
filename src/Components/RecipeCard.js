import React from 'react'
import Ingredients from './Ingredients'

const RecipeCard = (props) => {
    return (
        <div className="card">
            <h3>{props.recipe.recipe.label}</h3>
            <img src={props.recipe.recipe.image} alt=""></img>
            <div className="links">
                <a href={props.recipe.recipe.url} target="_blank">Full Recipe</a>
                {/* <a href={props.recipe.ingredients} >Ingredients</a> */}
                <button >Ingredients</button>
                <Ingredients ingredients={props.recipe.recipe.ingredients}/>
            </div>
            
        </div>
    )
}

export default RecipeCard
