import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Input } from "../../components/Input/Input";
import { ToDoList } from "../../components/List/ToDoList";

export const Home = () => {
  const [appData, setAppData] = useState([]);
  const [noteData, setNoteData] = useState({
    id: null,
    note: '',
    completed: false
  });

  const getData = () => {
    const appStorageData = JSON.parse(localStorage.getItem('appData'));
    appStorageData && setAppData(appStorageData);
  }

  useEffect(() => {
    // Retrieve data from LocalStorage
    getData();
  }, [])

  useEffect(() => {
    // Set data in LocalStorage to keep it up to date
    localStorage.setItem('appData', JSON.stringify(appData));
    setNoteData({
      ...noteData,
      id: appData.length + 1
    })
  }, [appData])

  // Done!!!
  const addNote = () => {
    // Add note data to all notes array state
    setAppData(appData.concat(noteData));
    // Clear input data
    setNoteData({
      ...noteData,
      id: appData.length + 1,
      note: ''
    })
  }

  const updateNote = (id) => {
    // Hot to update specific note by ID ???
    console.log('Update note');
    setNoteData({
      ...noteData,
      note: noteData.note
    })
  }

  // Done!!!
  const deleteNote = (id) => {
    setAppData(appData.filter(note => note.id !== id))
  }

  const removeAllNotes = () => {
    // Set app data array empty
    setAppData([]);
    // Remove data from LocalStorage
    localStorage.removeItem('appData');
  }

  // Handler to take all data from input
  const handleInput = (e) => {
    const { value, name } = e.target;
    setNoteData({
      ...noteData,
      [name]: value
    });
  }

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