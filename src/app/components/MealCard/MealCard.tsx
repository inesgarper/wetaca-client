import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { getMenuQuery_getMenu } from '../../services/mealServices/queries/__generated__/getMenuQuery'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { AuthContext } from '../../contexts/auth.context'

interface Props {
    meal: getMenuQuery_getMenu | null
}


const MealCard = ({ meal }: Props) => {

    const { order, addMeal, removeMeal } = useContext(CartContext) || {}
    const { isLoggedIn } = useContext(AuthContext) || {}

    const mealIsInOrder = order?.meals?.find(thisMeal => thisMeal?.mealID?.name === meal?.name)    

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={meal?.name}
                    height="140"
                // image={meal?.images?.finals[0]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {meal?.name}
                    </Typography>
                </CardContent>

                {isLoggedIn && <>
                {!mealIsInOrder && <CardActions>
                   {meal && <Button size="small" onClick={() => addMeal(meal?.id)}>Añadir</Button>}
                </CardActions>}
                {mealIsInOrder && <CardActions>
                    {meal && <Button size="small" onClick={() => removeMeal(meal?.id)}>-</Button>}
                    {<h3>{mealIsInOrder?.quantity}</h3>}
                    {meal && <Button size="small" onClick={() => addMeal(meal?.id)}>+</Button>}
                </CardActions>}
                </>}

                
            </Card>
        </>
    );
}

export default MealCard