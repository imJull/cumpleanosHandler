import Birthday from "./Birthday"


const Birthdays = ( {persons, deleteHanddler} ) => {
    const people = persons.map((person) => {
        const {id} = person;
        return(
            <Birthday key={id} person={person} deleteHanddler={deleteHanddler} />
        )
    })

    return (
        <div>
            {people}
        </div>
    )
}

export default Birthdays
