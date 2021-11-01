import React, { useEffect, useState } from "react";

import { HomeContent } from "./HomeContent";

import { v4 as uuidv4 } from "uuid";

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
      // id: appData.length + 1
      id: uuidv4()
    })
  }, [appData])

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleCheckbox = (id) => {
    setAppData(
      appData.map(item => {
        console.log(item)
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    )
  }

  return (
    <div>
      <HomeContent
        noteData={noteData}
        handleInput={handleInput}
        appData={appData}
        updateNote={updateNote}
        deleteNote={deleteNote}
        removeAllNotes={removeAllNotes}
        handleCheckbox={handleCheckbox}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}