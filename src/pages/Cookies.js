import React from 'react'

const Cookies = (props) => {
    console.log(props)
    const cookieList=props.cookies.map((cookie)=>{
        return(
            <div className="cakes" >
                <h3>{cookie.recipe.label}</h3>
                <img src={cookie.recipe.image} alt=""></img>
                <div className="links">
                    <a href={cookie.recipe.url} target="_blank">Full Recipe</a>
                </div>
            
            </div>
        )
    })
    return (
        <div>
            {cookieList}
        </div>
    )
}

export default Cookies
