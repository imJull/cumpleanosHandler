import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import BirthdayDetail from './BirthdayDetail';
import { useState } from 'react';


const Birthday = ({person, deleteHanddler}) => {

     const [showPerson, setShowPerson] = useState(false)

      const showPersonHandler = () => {
            setShowPerson(!showPerson)
            console.log(person.id)

      }


    return (
        <div>           
            <List key={person.id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} onClick={showPersonHandler}>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={person.name} src={person.image} />
                </ListItemAvatar>
                <ListItemText
                    primary={person.name}
                    secondary={
                    
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        {person.age} - Años de Edad
                        </Typography>
                    }
                />
                <DeleteIcon onClick={() => deleteHanddler(person.id)} sx={{ color: "red", fontSize: 35, cursor: "pointer"}}/>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
                {showPerson && <BirthdayDetail person={person}/>}
        </div>
    )
}

export default Birthday
