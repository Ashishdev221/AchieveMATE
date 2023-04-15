import React from 'react'
import "./Button.css";

function Button(props) {
  return (
    <div className= {'button ' +props.className}>
        <a href="">{props.name}</a>
    </div>
  )
}

export default Button