import React, {useContext} from 'react'
import {Context} from "./context"

const Category = () => {
    const {all, breakfast, lunch, shakes} = useContext(Context)
    
    return (
        <div className="category">
            <button onClick={all}>All</button>
            <button onClick={breakfast}>Breakfast</button>
            <button onClick={lunch}>Lunch</button>
            <button onClick={shakes}>Shakes</button>
        </div>
    )
}

export default Category
