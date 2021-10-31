import React, { useEffect, useState } from "react";

import { HomeContent } from "./HomeContent";

export const Home = () => {
  const [appData, setAppData] = useState([]);
  const [noteData, setNoteData] = useState({
    id: 0,
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

  const addNote = () => {
    // Add note data to all notes array state
    setAppData(appData.concat(noteData));
    // Clear input data
    setNoteData({
      ...noteData,
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

  const deleteNote = (id) => {
    setAppData(appData.filter(note => note.id !== id));
    console.log('ID', id);
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
      <HomeContent
        noteData={noteData}
        handleInput={handleInput}
        addNote={addNote}
        appData={appData}
        updateNote={updateNote}
        deleteNote={deleteNote}
        removeAllNotes={removeAllNotes}
      />
    </div>
  )
}