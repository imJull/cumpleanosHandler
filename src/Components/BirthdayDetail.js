import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const BirthdayDetail = ({ person }) => {
     const {age, name, image} = person
    return (
        <Card sx={{ maxWidth: 545, maxHeight: 800 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="540"
            image={image}
            alt="Imagen No disponible"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                La edad actual de {name} es de: {age} años
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Compartir
          </Button>
        </CardActions>
      </Card>
    )
}

export default BirthdayDetail
