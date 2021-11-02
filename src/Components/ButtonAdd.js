import Button from '@mui/material/Button';

const ButtonAdd = ( { toggleModal } ) => {
    

    const btnToggle = () =>{
          
        toggleModal();
        
    }

    return (
        <>
            <Button  style={{backgroundColor:"color"}} onClick={btnToggle} variant="contained">Añadir</Button>
        </>
    )
}

export default ButtonAdd
