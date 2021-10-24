import React from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const ToDo = ({key, item, handleEditNote, handleDeleteNote}) => {
  return (
    <div key={key}>
      <Input type='checkbox' />
      
      <span>{item.note}</span>

      <Button 
        type='text' 
        txt='Edit' 
        onClick={handleEditNote} 
      />

      <Button 
        type='text' 
        txt='Remove' 
        onClick={handleDeleteNote} 
      />
    </div>
  )
}