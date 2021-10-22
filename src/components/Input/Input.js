import React from "react";

export const Input = ({type, value, placeholder, onChange}) => {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange}/>
  )
}