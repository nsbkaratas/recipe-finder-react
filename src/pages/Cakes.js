import React from 'react'
import RecipeCard from '../Components/RecipeCard'

const Cakes = (props) => {
    console.log(props)
    const cakeList=props.cakes.map((cake)=>{
        return(
            <div className="cakes" >
            <h3>{cake.recipe.label}</h3>
             <img src={cake.recipe.image} alt=""></img>
           <div className="links">
                <a href={cake.recipe.url} target="_blank">Full Recipe</a>
            </div>
            
        </div>
        )
    })
    return (
        <div>
           {cakeList}
        </div>
    )
}

export default Cakes
