import { Grid } from "@mui/material"
import { getAllMealsQuery_getAllMeals } from "../../services/mealServices/queries/__generated__/getAllMealsQuery"
import { getMenuQuery_getMenu } from "../../services/mealServices/queries/__generated__/getMenuQuery"
import MealCard from "../MealCard/MealCard"

interface Props {
    meals: getMenuQuery_getMenu | getAllMealsQuery_getAllMeals | null
}

const MealsList = ({ meals }: Props) => {

    return (
        <>

            <h2>Platos Únicos</h2>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {meals?.unique && meals?.unique.map(meal => {
                            return (
                                <Grid key={meal?.id} item>
                                    {meal && <MealCard meal={meal} />}
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>


            <h2>Platos Completos</h2>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            meals?.full && meals?.full.map(meal => {
                                return (
                                    <Grid key={meal?.id} item>
                                        {meal && <MealCard meal={meal} />}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

            <h2>Platos Ligeros</h2>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            meals?.light && meals?.light.map(meal => {
                                return (
                                    <Grid key={meal?.id} item>
                                        {meal && <MealCard meal={meal} />}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid >


            <h2>Veggie</h2>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            meals?.veggie && meals?.veggie.map(meal => {
                                return (
                                    <Grid key={meal?.id} item>
                                        {meal && <MealCard meal={meal} />}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid >

            <h2>Entrantes</h2>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            meals?.starter && meals?.starter.map(meal => {
                                return (
                                    <Grid key={meal?.id} item>
                                        {meal && <MealCard meal={meal} />}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid >

            <h2>Postres</h2>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {
                            meals?.dessert && meals?.dessert.map(meal => {
                                return (
                                    <Grid key={meal?.id} item>
                                        {meal && <MealCard meal={meal} />}
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default MealsList