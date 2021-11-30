import React from "react";

import { Button } from "../../Button/Button";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Input } from "../../Input/Input";

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

      {/* NOTE!!! - Update button should change state and different function should save the content of the input... */}
      {/* <span className={className}>
        {item.note}
      </span> */}
      <Input
        type='text'
        name='note'
        value={item.note}
        placeholder='Edit a task'
      // onChange={handleInput}
      />

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