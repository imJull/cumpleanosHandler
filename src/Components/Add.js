import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Add = ({addHanddler}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [image, setImage] = useState("")


    const submitHanddler = (e) => {

        
        e.preventDefault();

        if (age === "" || name === ""){
            alert("El nombre y edad son obligatorios")
            
        }else{        
            addHanddler({name, age, image})
            setName("")
            setImage("")
            setAge("")
  
        }
    }

    const fieldStyle={
        margin: "5rem 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        button:{
            width:"15rem",
            height:"2.5rem"
        }
    }

    const modalStyle={
      position: "absolute"  ,
      width:"80vw",
      height:"60vh",
      background:"linear-gradient(rgb(151, 65, 140, 0.8),rgb(247, 134, 6, 0.8))",
      backdropFilter: "blur(1px)",
      border: "1px solid gray",
      borderRadius:"4px",
      boxShadow: "rgba(223, 216, 216, 0.445)",
      padding: "2px 4px 3px",
      top:'50%',
      left:'50%',
      transform: "translate(-50%, -50%)",
    }



    return (
        <Grid align="center" style={modalStyle}>
            <h1>Agregar Nuevo Usuario</h1>
            <Box
                onSubmit={submitHanddler}
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '80%' },
                }}
                noValidate
                autoComplete="off"
                >
                <Grid style={fieldStyle}>
                    <TextField type="text" value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Nombre" variant="outlined" />
                    <TextField type="number" value={age} onChange={(e) => setAge(e.target.value)} id="outlined-basic" label="Años" variant="outlined" />
                    <TextField type="text" value={image} onChange={(e) => setImage(e.target.value)} id="outlined-basic" label="Imagen" variant="outlined" />
                </Grid>
                
                    <Button style={fieldStyle.button} type="submit" variant="contained">AGREGAR</Button>                  
                
                 
            </Box>
        </Grid>
    );
}
export default Add
