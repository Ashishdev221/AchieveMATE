import React from 'react'
import "./Button.css";

function Button({label,id,className }) {
  return (
    <div className={className?className:'button'} id={id?id:''}>
        <a href="">{label}</a>
    </div>
  )
}

export default Button