import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export const Home = () => {
  // const [notesData, setNotesData] = useState([]);
  const [inputData, setInputData] = useState('');

  const [exampleData, setExampleData] = useState([]);

  const getData = () => {
    // App data
    // const localStorageData = JSON.parse(localStorage.getItem('AppStore'));
    // setNotesData(localStorageData);
    // console.log('Variable localStorageData - ', localStorageData);

    // Example data
    const exampleStorageData = JSON.parse(localStorage.getItem('example'));
    exampleStorageData && setExampleData(exampleStorageData);
    console.log('Variable exampleStorageData - ', exampleStorageData);
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    localStorage.setItem('example', JSON.stringify(exampleData));
  }, [exampleData])

  const addNote = () => {
    console.log('ADD NOTE');

    const sampleData = [{
      id: 4,
      note: inputData,
      completed: true
    }]

    setExampleData(exampleData.concat(sampleData));
    setInputData('');
  }

  const handleInput = (e) => {
    const { value } = e.target;
    setInputData(value);
  }

  return (
    <div>
      <header>
        <h2>ToDo App</h2>
      </header>

      <Input type='text' value={inputData} placeholder='Add a task' onChange={handleInput}/>
      <Button type='submit' txt='Add note' onClick={addNote}/>

      <div>
        {/* {console.log('Notes data', notesData)} */}
        
        {/* <h2>Notes</h2>
        {
          notesData.map((item, index) => (
            <div key={`Note item-${index}`}>
              <span>{item.note}</span>
            </div>
          ))
        } */}

        {
          exampleData.map((item, index) => (
            <div key={`Note item-${index}`}>
              <span>{item.note}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}