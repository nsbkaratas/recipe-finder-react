import React from 'react'
import Form from '../Components/Form'
import RecipeCard from '../Components/RecipeCard'

const Home = (props) => {
    const recipeList=props.recipesURL.map(recipes => <RecipeCard recipe={recipes}/>)
    return (
        
        <div>
            <Form onChange={props.onChange} onSubmit={props.onSubmit} value={props.value}/>
            {recipeList}
        </div>
    )
}

export default Home
