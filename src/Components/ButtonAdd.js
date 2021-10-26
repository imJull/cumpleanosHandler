import Button from '@mui/material/Button';
import { useState } from 'react';

const ButtonAdd = ( {showAddHanddler, toggleModal} ) => {
    

    const btnToggle = () =>{
          
        toggleModal();
        
    }


    const txtColor = {
        add: "Añadir",
        back: "Volver",
        cladd: "primary",
        clback: "secondary"
    }

    return (
        <>
            <Button  style={{backgroundColor:"color"}} onClick={btnToggle} variant="contained">Añadir</Button>
        </>
    )
}

export default ButtonAdd
