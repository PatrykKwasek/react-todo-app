import React from "react";

import { ToDoItem } from "./ListItem/ToDoItem";

export const ToDoList = ({ notesData, handleEditNote, handleDeleteNote }) => {
  return (
    <div>
      {
        notesData.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            handleEditNote={handleEditNote}
            handleDeleteNote={() => handleDeleteNote(item.id)}
          />
        ))
      }
    </div>
  )
}