import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { getMenuQuery_getMenu } from '../../services/mealServices/queries/__generated__/getMenuQuery'


interface Props {
    meal: getMenuQuery_getMenu | null
}


const MealCard = ({ meal }: Props) => {

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={meal?.name}
                    height="140"
                    image={meal?.images?.finals[0]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {meal?.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Añadir</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default MealCard