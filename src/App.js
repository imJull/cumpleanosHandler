import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Birthdays from './Components/Birthdays';
import Header from './Components/Header';
import { Container } from '@mui/material';



function App() {
    const [persons, setPersons] =useState([
    ]);


    useEffect(() =>{
      const getPerson = async () =>{
        const personServer = await fetchPerson()
        setPersons(personServer)
      }
      getPerson();
    }, [])

    const fetchPerson = async () => {
        try{
          const res = await fetch(`http://localhost:5000/persons`);
          const data = await res.json();
          return data
        }catch(error){
          console.log(error)

        }
    }

    const deleteHanddler = async (id) =>{
      await fetch(`http://localhost:5000/persons/${id}`, {method: 'DELETE',})
      setPersons(persons.filter((person) => person.id !== id))
      console.log(id, "Borrado")
    }

    const addHanddler = async(birthday) => {
      const res = await fetch(`http://localhost:5000/persons`, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(birthday),})

        const data = await res.json()
        setPersons([...persons, data]);
        console.log("Persona ", birthday.id, " añadido" )
     
    }

  return (
    <div className="App general-container">
      <Header  persons={persons} addHanddler={addHanddler} />
      <Container>
        <Birthdays persons={persons} deleteHanddler={deleteHanddler} />
      </Container>
    </div>
  );
}

export default App;
