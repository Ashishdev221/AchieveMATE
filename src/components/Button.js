import React from 'react'
import "./Button.css";

<<<<<<< HEAD
function Button({label,id,className }) {
  return (
    <div className={className?className:'button'} id={id?id:''}>
        <a href="">{label}</a>
=======
function Button(props) {
  return (
    <div className= {'button ' +props.className}>
        <a href="">{props.name}</a>
>>>>>>> e3728284e69f68b60f007ea85f844f1da8e7a291
    </div>
  )
}

export default Button