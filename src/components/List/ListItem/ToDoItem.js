import React from "react";

import { Button } from "../../Button/Button";
import { Checkbox } from "../../Checkbox/Checkbox";

import './ToDoItem.scss';

export const ToDoItem = ({
  item,
  handleEditNote,
  handleDeleteNote,
  handleCheckbox,
  className
}) => {
  return (
    <div>
      <Checkbox
        item={item}
        handleCheckbox={handleCheckbox}
      />

      <span className={className}>
        {item.note}
      </span>

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