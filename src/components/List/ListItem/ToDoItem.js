import React from "react";

import { Button } from "../../Button/Button";
import { Checkbox } from "../../Checkbox/Checkbox";

export const ToDoItem = ({ item, handleEditNote, handleDeleteNote }) => {
  return (
    <div>
      <Checkbox />

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