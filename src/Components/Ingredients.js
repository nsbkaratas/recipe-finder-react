import React from 'react'

const Ingredients = (props) => {
    return (
        <div>
            <ul>
                {props.ingredients.ingredients}
            </ul>
            {}
        </div>
    )
}

export default Ingredients
