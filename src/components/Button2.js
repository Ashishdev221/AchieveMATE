import React from 'react'
import "./Button2.css";

function Button2({label,id,className }) {
  return (
    <div className={className?className:'button-style'} id={id?id:''}>
        <p>{label}</p>
    </div>
  )
}

export default Button2