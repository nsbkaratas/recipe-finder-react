import React from 'react'

const Breakfast = (props) => {
    console.log(props)
    const breakfastList=props.breakfast.map((breakfast)=>{
        return(
            <div className="cakes" >
            <h3>{breakfast.recipe.label}</h3>
             <img src={breakfast.recipe.image} alt=""></img>
           <div className="links">
                <a href={breakfast.recipe.url} target="_blank">Full Recipe</a>
            </div>
            
        </div>
        )
    })
    return (
        <div>
            {breakfastList}
        </div>
    )
}

export default Breakfast
