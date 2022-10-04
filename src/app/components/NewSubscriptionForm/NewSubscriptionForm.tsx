import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { DayOfTheWeek } from "../../../../__generated__/globalTypes"
import subscriptionServices from "../../services/subscriptionServices"
import { weekDaysSelect } from "./assets"

interface Props {
    setSubscriptionStage: React.Dispatch<React.SetStateAction<number>>
}

const NewSubscriptionForm = ({ setSubscriptionStage }: Props) => {


    const [addressForm, setAddressForm] = useState({
        street: '',
        number: '',
        city: '',
        province: '',
        postCode: ''
    })

    const [newSubscriptionData, setNewSubscriptionData] = useState({
        address: addressForm,
        deliveryWeekDay: undefined
    })

    // const [deliveryWeekDay, setDeliveryWeekDay] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAddressForm({
            ...addressForm,
            [name]: value
        })
    }

    useEffect(() => {
        setNewSubscriptionData({
            ...newSubscriptionData,
            address: addressForm
        })
    }, [addressForm])

    const handleWeekDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setNewSubscriptionData({
            ...newSubscriptionData,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        subscriptionServices
            .createSubscription(newSubscriptionData)
            .then(() => setSubscriptionStage((currentStage) => currentStage + 1))
            .catch(err => console.log(err))

    }

    return (
        <>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

                <div>

                    <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                        <InputLabel htmlFor="street">Calle</InputLabel>
                        <OutlinedInput
                            id="street"
                            type="text"
                            name="street"
                            value={addressForm.street}
                            onChange={handleInputChange}
                            label="street"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                        <InputLabel htmlFor="number">Nº</InputLabel>
                        <OutlinedInput
                            id="number"
                            type="number"
                            name="number"
                            value={addressForm.number}
                            onChange={handleInputChange}
                            label="number"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '100ch' }} variant="outlined">
                        <InputLabel htmlFor="city">Ciudad</InputLabel>
                        <OutlinedInput
                            id="city"
                            type="text"
                            name="city"
                            value={addressForm.city}
                            onChange={handleInputChange}
                            label="city"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                        <InputLabel htmlFor="province">Provincia</InputLabel>
                        <OutlinedInput
                            id="province"
                            type="text"
                            name="province"
                            value={addressForm.province}
                            onChange={handleInputChange}
                            label="province"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '20ch' }} variant="outlined">
                        <InputLabel htmlFor="postCode">Código Postal</InputLabel>
                        <OutlinedInput
                            id="postCode"
                            type="text"
                            name="postCode"
                            value={addressForm.postCode}
                            onChange={handleInputChange}
                            label="postCode"
                        />
                    </FormControl>

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Día de la semana"
                        name="deliveryWeekDay"
                        // value={newSubscriptionData.deliveryWeekDay}
                        onChange={handleWeekDayChange}
                        helperText="Please select a meal category"
                    >
                        {weekDaysSelect.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>


                </div>

                <Button type="submit" variant="contained">Siguiente</Button>

            </Box>
        </>
    )
}

export default NewSubscriptionForm