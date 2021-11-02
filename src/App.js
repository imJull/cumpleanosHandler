import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Birthdays from './Components/Birthdays';
import Header from './Components/Header';
import Spinner from './Components/Spinner/Spinner';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import { Container } from '@mui/material';



function App() {
    const [loading, setLoading] = useState(false)
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
          setLoading(true)
          const res = await fetch(`http://localhost:5000/persons`);
          const data = await res.json();
          setLoading(false)
          return data
          
        }catch(error){
          console.log(error)
          setTimeout(() =>{
            console.log("El servidor no está activo")
          },2000)
          
        }
        
    }

    const alertDelete = (

            <Alert severity="error">
              <AlertTitle>Eliminado</AlertTitle>
               ha sido Eliminado de la base de datos — <strong>Puede continuar!</strong>
            </Alert>
            )
      

    const deleteHanddler = async (id, name) =>{
      const conf = window.confirm("Desea eliminar a " + name + " del registro?")

      if (conf){
        await fetch(`http://localhost:5000/persons/${id}`, {method: 'DELETE',})
        setPersons(persons.filter((person) => person.id !== id ))
        console.log(id, "Borrado")
      }
      
    }

    const addHanddler = async (birthday) => {
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

    const updateHanddler =  (id) =>{
      console.log(id)
    }

  return (
    <div className="App general-container">
      <Header loading={loading} persons={persons} addHanddler={addHanddler} alertDelete={alertDelete} />
      { loading ? <Spinner /> :
      <Container>
        <Birthdays persons={persons} deleteHanddler={deleteHanddler} updateHanddler={updateHanddler} />
      </Container> }
    </div>
  );
}

export default App;
