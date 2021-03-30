import React from 'react'

const Item = ({dish}) => {
    return (
        <div className="item">
           <div style={{border:"5px #c59d5f solid", borderRadius:"5px", flexBasis:"45%"}}><img src={dish.img} alt=""/></div>
           <div style={{paddingRight:"5px", paddingLeft:"10px", flexBasis:"55%"}}>
               <div className="info">
                   <h3 style={{textTransform:"capitalize"}}>{dish.title}</h3>
                   <h3 style={{color:"#c59d5f"}}>{dish.price} RUB</h3>
               </div>
               <p style={{color:"rgb(44, 82, 107)", letterSpacing:"0.05rem"}}>{dish.desc}</p>
            </div> 
        </div>
    )
}

export default Item
