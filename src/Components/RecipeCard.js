import React from 'react'

const RecipeCard = (props) => {
    return (
        <div className="card">
            <h3>{props.recipe.recipe.label}</h3>
            <img src={props.recipe.recipe.image} alt=""></img>
            <div >
                <a href={props.recipe.recipe.url} target="_blank">Full Recipe</a>
            </div>
            
        </div>
    )
}

export default RecipeCard
