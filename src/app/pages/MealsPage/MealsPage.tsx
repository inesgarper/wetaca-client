import { useEffect, useState } from "react"
import MealsList from "../../components/MealsList/MealsList"
import mealServices from "../../services/mealServices"
import { getAllMealsQuery_getAllMeals } from "../../services/mealServices/queries/__generated__/getAllMealsQuery"
import Box from '@mui/material/Box'
import { IconButton, Modal, Typography } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle'
import NewMealForm from "../../components/NewMealForm/NewMealForm"
import MenuDrawer from "../../components/MenuDrawer/MenuDrawer"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
}

const MealsPage = () => {

    const [meals, setMeals] = useState<getAllMealsQuery_getAllMeals | null>(null)

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        mealServices
            .getAllMeals()
            .then(data => setMeals(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Meals page</h1>

            <IconButton color="primary" aria-label="add new meal" component="label" onClick={handleOpen}>
                <AddCircleIcon sx={{ fontSize: 60 }} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    <NewMealForm />
                </Box>
            </Modal>

            <MenuDrawer />

            <MealsList meals={meals} />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </>
    )
}

export default MealsPage