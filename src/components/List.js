import React from 'react'
import Item from "./Item"

const List = ({dishes}) => {
    return (
        <div className="list">
            {dishes.map(dish => <Item key={dish.id} dish={dish}/>)}
        </div>
    )
}

export default List
