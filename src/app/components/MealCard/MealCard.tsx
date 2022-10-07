import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { getMenuQuery_getMenu_dessert, getMenuQuery_getMenu_full, getMenuQuery_getMenu_light, getMenuQuery_getMenu_starter, getMenuQuery_getMenu_unique, getMenuQuery_getMenu_veggie } from '../../services/mealServices/queries/__generated__/getMenuQuery'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { AuthContext } from '../../contexts/auth.context'
import { getAllMealsQuery_getAllMeals_dessert, getAllMealsQuery_getAllMeals_full, getAllMealsQuery_getAllMeals_light, getAllMealsQuery_getAllMeals_starter, getAllMealsQuery_getAllMeals_unique, getAllMealsQuery_getAllMeals_veggie } from '../../services/mealServices/queries/__generated__/getAllMealsQuery'
import mealServices from '../../services/mealServices'

interface Props {
    meal: getMenuQuery_getMenu_dessert | getMenuQuery_getMenu_starter | getMenuQuery_getMenu_veggie | getMenuQuery_getMenu_full | getMenuQuery_getMenu_light | getMenuQuery_getMenu_unique |
    getAllMealsQuery_getAllMeals_dessert | getAllMealsQuery_getAllMeals_starter | getAllMealsQuery_getAllMeals_veggie | getAllMealsQuery_getAllMeals_full | getAllMealsQuery_getAllMeals_light | getAllMealsQuery_getAllMeals_unique
}

const styles = {
    notCurrentCard: {
        opacity: '1',
        filter: '',
    },
    currentCard: {
        opacity: '0.3',
        filter: '',
    },
    nextWeekCard: {
        opacity: '1',
        filter: 'brightness(0) saturate(100%) invert(71%) sepia(90%) saturate(380%) hue-rotate(2deg) brightness(95%) contrast(91%)',
    },
    media: {
        height: '100%',
        width: '100%',
        marginTop: '30'
    }
}


const MealCard = ({ meal }: Props) => {

    const { order, getCart, addMeal, removeMeal } = useContext(CartContext) || {}
    const { user, isLoggedIn } = useContext(AuthContext) || {}

    const [mealState, setMealState] = useState(styles.notCurrentCard)

    const isAdmin = user?.role === 'ADMIN'

    useEffect(() => {
        getCart()

        if (meal?.currentlyInMenu) {
            isAdmin && setMealState(styles.currentCard)
        } else if (meal?.nextWeekInMenu) {
            setMealState(styles.nextWeekCard)
        }
    }, [])

    const mealIsInOrder = order?.meals?.find(thisMeal => thisMeal?.mealID?.name === meal?.name)

    const handleAddToMenu = (id: string) => {
        mealServices
            .addMealToMenu(id)
            .then((data) => {
                setMealState(styles.nextWeekCard)
            })
            .catch(err => console.log(err))
    }

    const handleRemoveFromMenu = (id: string) => {
        mealServices
            .removeMealFromMenu(id)
            .then((data) => {
                setMealState(styles.notCurrentCard)
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            <Card sx={{ maxWidth: 345 }} style={mealState}>
                {
                    meal?.images?.finals[0] &&
                    <CardMedia
                        component="img"
                        alt={meal?.name}
                        height="140"
                        src={meal?.images?.finals[0]}
                        style={styles.media}
                    />
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {meal?.name}
                    </Typography>
                    <p>{meal?.price}€</p>
                </CardContent>

                {isLoggedIn && <>

                    {/* ADMIN */}
                    {isAdmin && !meal?.currentlyInMenu &&
                        <>
                            {mealState === styles.notCurrentCard && <Button size="small" onClick={() => handleAddToMenu(meal?.id)}>Añadir al menú</Button>}
                            {mealState === styles.nextWeekCard && <Button size="small" onClick={() => handleRemoveFromMenu(meal?.id)}>Eliminar del menú</Button>}
                        </>
                    }

                    {/* USER */}
                    {!isAdmin &&
                        <>
                            {!mealIsInOrder && <CardActions>
                                {meal && <Button size="small" onClick={() => addMeal(meal?.id)}>Añadir</Button>}
                            </CardActions>}
                            {mealIsInOrder && <CardActions>
                                {meal && <Button size="small" onClick={() => removeMeal(meal?.id)}>-</Button>}
                                {<h3>{mealIsInOrder?.quantity}</h3>}
                                {meal && <Button size="small" onClick={() => addMeal(meal?.id)}>+</Button>}
                            </CardActions>}
                        </>
                    }

                </>}
            </Card>
        </>
    );
}

export default MealCard