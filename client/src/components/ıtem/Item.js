



import React from 'react'

const Item = (props) => {
  return (
    <div>
      <img src={props.img}/>
      <p>{props.name} </p>
      <div>
        <div>
            {props.new_price}
        </div>
        <div>
            {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
