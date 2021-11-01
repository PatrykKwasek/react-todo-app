import React from "react";

import { ToDoItem } from "./ListItem/ToDoItem";

export const ToDoList = ({
  notesData,
  handleEditNote,
  handleDeleteNote,
  handleCheckbox
}) => {
  const trueTasks = notesData.filter(task => task.completed === true);
  const falseTasks = notesData.filter(task => task.completed === false);

  return (
    <div>
      {
        falseTasks.length > 0 && (
          <div>
            <h2>{`Tasks - ${falseTasks.length}`}</h2>

            {
              falseTasks.map((item) => (
                <ToDoItem
                  key={item.id}
                  item={item}
                  handleEditNote={handleEditNote}
                  handleDeleteNote={() => handleDeleteNote(item.id)}
                  handleCheckbox={() => handleCheckbox(item.id)}
                />
              ))
            }
          </div>
        )
      }

      {
        trueTasks.length > 0 && (
          <div>
            <h2>{`Completed - ${trueTasks.length}`}</h2>

            {
              trueTasks.map((item) => (
                <ToDoItem
                  key={item.id}
                  item={item}
                  handleEditNote={handleEditNote}
                  handleDeleteNote={() => handleDeleteNote(item.id)}
                  handleCheckbox={() => handleCheckbox(item.id)}
                  className='completed-task'
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}