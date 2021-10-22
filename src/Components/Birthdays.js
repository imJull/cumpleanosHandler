import Birthday from "./Birthday"
import BirthdayDetail from "./BirthdayDetail";


const Birthdays = ( {persons, deleteHanddler} ) => {
    
    const people = persons.map((person) => {
        const {id} = person;
        return(
            <Birthday key={id} person={person} deleteHanddler={deleteHanddler} />
        )
    })

    const details = persons.map((detail) => {
        const {id, name, age, image} = detail;
        return(
            <BirthdayDetail key={id} detail={detail}/>
        )
    })    

    return (
        <div>
            {people}
            {details}
        </div>
    )
}

export default Birthdays
