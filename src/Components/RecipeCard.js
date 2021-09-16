import React from 'react'

const RecipeCard = (props) => {
    return (
        <div className="card">
            <h3>{props.recipe.recipe.label}</h3>
            <img src={props.recipe.recipe.image} alt=""></img>
            <div className="links">
                <a href={props.recipe.recipe.url} target="_blank">Full Recipe</a>
                <a href={props.recipe.ingredients} >Ingredients</a>
            </div>
            
        </div>
    )
}

export default RecipeCard
