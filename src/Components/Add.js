import Box from '@mui/material/Box';
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
            setAge("")}
    }

    return (
        <div>
            <Box
                onSubmit={submitHanddler}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                
                    <TextField type="text" value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Nombre" variant="outlined" />
                    <TextField type="number" value={age} onChange={(e) => setAge(e.target.value)} id="outlined-basic" label="Años" variant="outlined" />
                    <TextField type="text" value={image} onChange={(e) => setImage(e.target.value)} id="outlined-basic" label="Imagen" variant="outlined" />
                
                <div>
                    <Button style={{position: "relative", left:"32rem"}} type="submit" variant="contained">AGREGAR</Button>                    
               </div>
                
            </Box>
        </div>
    );
}

export default Add
