import React from "react";

export const Input = ({type, name, value, placeholder, onChange}) => {
  return (
    <input 
      type={type} 
      name={name} 
      value={value} 
      placeholder={placeholder} 
      onChange={onChange}
    />
  )
}