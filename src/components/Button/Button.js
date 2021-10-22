import React from "react";

export const Button = ({type, txt, onClick}) => {
  return (
    <button type={type} onClick={onClick}>
      {txt}
    </button>
  )
}