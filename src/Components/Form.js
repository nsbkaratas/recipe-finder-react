import React from 'react'

const Form = (props) => {
    return (
        <div className="search">
             <form className="form" onSubmit={props.onSubmit} onChange={props.onChange}>
                <input placeholder="search" type="text" className="input" name="item" value={props.value}></input>
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    )
}

export default Form
