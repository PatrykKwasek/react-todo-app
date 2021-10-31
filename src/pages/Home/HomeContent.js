import React from "react";

import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Input } from "../../components/Input/Input";
import { ToDoList } from "../../components/List/ToDoList";

export const HomeContent = ({
  noteData,
  handleInput,
  addNote,
  appData,
  updateNote,
  deleteNote,
  removeAllNotes
}) => {
  return (
    <div>
      <header>
        <h2>ToDo App</h2>
      </header>

      {/* I think you should create form - it will be looking way more cleaner */}
      <Input
        type='text'
        name='note'
        value={noteData.note}
        placeholder='Add a task'
        onChange={handleInput}
      />

      <Button
        type='submit'
        txt='Add note'
        onClick={addNote}
      />

      <div>
        <ToDoList
          notesData={appData}
          handleEditNote={updateNote}
          handleDeleteNote={deleteNote}
        />
      </div>

      <div>
        <Button
          type='button'
          txt='Remove all items'
          onClick={removeAllNotes}
        />
      </div>

      <Footer />
    </div>
  )
}