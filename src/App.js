import React, {useState, useEffect} from 'react'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import "./App.css"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Account from "./pages/Account"
import {Route, Switch} from "react-router-dom"
import axios from 'axios'


const App=()=> {  

 //state for data
 const [recipesURL, setRecipeURL] = useState([])

 //state for input field
 const [search, setSearch] = useState("")

 //API information
 const API_ID="3b319b91"
 const API_KEY="49c4670d46b4b30b4efafbaaca0ba09c"
 //https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

 //api call
 const getRecipe = async()=>{
   const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`)
   setRecipeURL(response.data.hits)
   console.log(response)
   
 }


 //submit event
 const handleSubmit=(e)=>{
   e.preventDefault()
   getRecipe()
   setSearch("")
 }


  return (
    <div id="app">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home recipesURL={recipesURL} onChange={e=>setSearch(e.target.value)} onSubmit={handleSubmit} value={search} />
        </Route>

        <Route exact path="/Favorites">
          <Favorites/>
        </Route>         

        <Route exact path="/Account">
          <Account/>
        </Route>        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
