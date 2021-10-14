import Button from '@mui/material/Button';
import { useState } from 'react';

const ButtonAdd = ( {showAddHanddler} ) => {
    const [btn, setBtn] = useState(false)

    const btnToggle = () =>{
        showAddHanddler();
        setBtn(!btn);
    }

    const txtColor = {
        add: "Añadir",
        back: "Volver",
        cladd: "primary",
        clback: "secondary"
    }

    return (
        <>
           <Button color={!btn ? "primary" : "secondary" } style={{backgroundColor:"color"}} onClick={btnToggle} style={{background:"color"}} variant="contained">{!btn ? txtColor.add : txtColor.back }</Button>
        </>
    )
}

export default ButtonAdd
