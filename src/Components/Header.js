import Add from "./Add"
import ButtonAdd from "./ButtonAdd"
import { Modal } from '@mui/material';
import { useState } from "react"

const Header = ( {persons, addHanddler} ) => {
    const [showAdd, setShowAdd] = useState(false);
    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    }



    return (
        <div>
            <h1>Estos </h1>
            <p>{persons.length} pendientes</p>
            <ButtonAdd toggleModal={toggleModal} />
             
                <Modal open={modal} onClose={toggleModal}>
                   <Add addHanddler={addHanddler} /> 
                </Modal>
                
        </div>
    )
}

export default Header
