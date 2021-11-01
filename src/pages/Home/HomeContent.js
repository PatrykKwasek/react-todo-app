import React from "react";

import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Form } from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { ToDoList } from "../../components/List/ToDoList";

export const HomeContent = ({
  noteData,
  handleInput,
  appData,
  updateNote,
  deleteNote,
  // removeAllNotes,
  handleCheckbox,
  handleSubmit
}) => {
  return (
    <div>
      <header>
        <h2>ToDo App</h2>
      </header>

      <Form onSubmit={handleSubmit}>
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
        />
      </Form>

      <div>
        <ToDoList
          notesData={appData}
          handleEditNote={updateNote}
          handleDeleteNote={deleteNote}
          handleCheckbox={handleCheckbox}
        />
      </div>

      {/* <div>
        <Button
          type='button'
          txt='Remove all items'
          onClick={removeAllNotes}
        />
      </div> */}

      <Footer />
    </div>
  )
}