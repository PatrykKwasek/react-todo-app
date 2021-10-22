import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

// const notes = [
//   {
//     id: 0,
//     note: 'Make a dentist appointment',
//     completed: false
//   },
//   {
//     id: 1,
//     note: 'Book tickets to London',
//     completed: true
//   },
//   {
//     id: 2,
//     note: 'Find hotel recommendations in London',
//     completed: false
//   }
// ];

export const Home = () => {
  const [inputNoteData, setInputNoteData] = useState('');
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState([]);

  const getData = () => {
    // Retrieve data from localStorage
    // setDataFromLocalStorage(JSON.parse(localStorage.getItem('AppStore')) || [])
    const localStorageData = JSON.parse(localStorage.getItem('AppStore'))
    console.log('localStorageData', localStorageData);
    setDataFromLocalStorage(localStorageData);
  }

  useEffect(() => {
    getData();
  }, [])

  const addNote = () => {
    // Add note
    let data = {
      id: 3,
      note: inputNoteData,
      completed: false
    }

    // Add data to the existing state with whole LocalStorage and then save it in Local Storage
    const newNotesArray = dataFromLocalStorage.concat(data)
    setDataFromLocalStorage(newNotesArray);
    console.log('addNote', dataFromLocalStorage.length);
    localStorage.setItem('AppStore', JSON.stringify(dataFromLocalStorage));
  }

  // const updateNote = (id) => {
  //   // Update note
  // }

  // const removeNote = (id) => {
  //   // Remove note
  // }

  const handleInput = (e) => {
    const { value } = e.target;
    setInputNoteData(value);
  }

  return (
    <div>
      <header>
        <h2>ToDo App</h2>
      </header>

      <div>
        <Input type='text' placeholder='Add a task' onChange={handleInput}/>
        <Button type='text' txt='Submit' onClick={addNote} />
      </div>

      <div>
        <h4>Tasks - </h4>
        {dataFromLocalStorage.map((item, index) => (
          <div key={`List item-${index}`}>
            <Input type='checkbox' />

            <span key={`Note item-${index}`}>{item.note}</span>
            
            {/* <Button type='text' txt='Edit' onClick={updateNote} /> */}
            {/* <Button type='text' txt='Remove' onClick={removeNote} /> */}
          </div>
        ))}
      </div>

      <div>
        <h4>Completed - </h4>
      </div>
    </div>
  )
}