import Birthday from "./Birthday"


const Birthdays = ( {persons, deleteHanddler, updateHanddler} ) => {
    
    const people = persons.map((person) => {
        const {id} = person;
        return(
            <Birthday key={id} person={person} deleteHanddler={deleteHanddler} updateHanddler={updateHanddler} />
        )
    })

/*     const details = persons.map((detail) => {
        const {id, name, age, image} = detail;
        return(
            <BirthdayDetail key={id} detail={detail}/>
        )
    })   */  

    return (
        <div className="birthdays-container">
            {people}
        </div>
    )
}

export default Birthdays
