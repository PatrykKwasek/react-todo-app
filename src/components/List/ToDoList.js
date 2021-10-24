import React from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const ToDoList = ({notesData, handleEditNote, handleDeleteNote}) => {
  return (
    <div>
      {
        notesData.map((item, index) => (
          <div key={`Note item-${index}`}>
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
        ))
        }
    </div>
  )
}