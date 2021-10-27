import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import BirthdayDetail from './BirthdayDetail';
import CustomizedDialogs from './Dialog';



const Birthday = ({person, deleteHanddler, updateHanddler}) => {

    const iconStyle ={
        fontSize: 35, cursor: "pointer", color:"rgb(151, 65, 140)"
    }
 

    return (
        <div className="birthday-container">           
            <List className="birthday" key={person.id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                    <DeleteIcon onClick={() => deleteHanddler(person.id, person.name)} sx={{ color: "red", fontSize: 35, cursor: "pointer"}}/>
                    <CustomizedDialogs person={person}>
                        <BirthdayDetail person={person} />
                    </CustomizedDialogs>
                    <EditTwoToneIcon onClick={() => updateHanddler(person.id)} style={iconStyle} />

                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
               
                
        </div>
    )
}

export default Birthday
