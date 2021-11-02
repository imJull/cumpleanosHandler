import Add from "./Add"
import ButtonAdd from "./ButtonAdd"
import SpinnerButton from "./Spinner/SpinnerButton";
import { Modal } from '@mui/material';
import { useState } from "react"

const Header = ( { persons, addHanddler, loading} ) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    }



    return (
        <div className="header">
            <div>
              <h1>Estos </h1>
                {!loading ? <p>{persons.length} usuarios en la base de datos</p> : <div><h4>Cargando Usuarios...</h4></div> }
            </div>
            
            {!loading ? <ButtonAdd toggleModal={toggleModal}/> : <SpinnerButton /> }
             
                <Modal open={modal} onClose={toggleModal}>
                    <Add addHanddler={addHanddler}/>
                </Modal>
                
        </div>
    )
}

export default Header
