import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={props.sayHello} className={props.color} style={{marginLeft:"10px"}}>{props.title}</button>
    </>
  )
}

export default Button