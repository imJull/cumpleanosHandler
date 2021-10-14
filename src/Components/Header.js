import Add from "./Add"
import ButtonAdd from "./ButtonAdd"
import { useState } from "react"

const Header = ( {persons, addHanddler} ) => {
    const [showAdd, setShowAdd] = useState(false);

    const showAddHanddler = () => {
        setShowAdd(!showAdd);
        console.log("clickeado")
    }

    return (
        <div>
            <h1>Estos son los cumpleaños</h1>
            <p>{persons.length} son los cumpleaños pendientes</p>
            <ButtonAdd showAddHanddler={showAddHanddler} />
            {showAdd && <Add addHanddler={addHanddler} />}
        </div>
    )
}

export default Header
