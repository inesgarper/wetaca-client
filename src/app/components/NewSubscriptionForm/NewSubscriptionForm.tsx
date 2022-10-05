import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react"
import orderServices from "../../services/orderServices"
import subscriptionServices from "../../services/subscriptionServices"
import { weekDaysSelect } from "./assets"

interface Props {
    setSubscriptionStage: React.Dispatch<React.SetStateAction<number>>
}

const NewSubscriptionForm = ({ setSubscriptionStage }: Props) => {


    const [newSubscriptionData, setNewSubscriptionData] = useState({
        address: {
            street: '',
            number: '',
            city: '',
            province: '',
            postCode: ''
        },
        deliveryWeekDay: undefined
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let data = { ...newSubscriptionData }
        const { name, value } = e.target

        if (name === 'street' || name === 'number' || name === 'city' || name === 'province' || name === 'postCode') {
            data = {
                ...data,
                address: {
                    ...data.address,
                    [name]: value
                }
            }
        } else {
            data = {
                ...data,
                [name]: value
            }
        }

        setNewSubscriptionData(data)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        subscriptionServices
            .createSubscription(newSubscriptionData)
            .catch(err => console.log('No se ha podido crear la suscripción'))
            .then(() => orderServices.createOrder())
            .catch(err => console.log('No se ha podido crear la order'))
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
                            value={newSubscriptionData.address.street}
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
                            value={newSubscriptionData.address.number}
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
                            value={newSubscriptionData.address.city}
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
                            value={newSubscriptionData.address.province}
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
                            value={newSubscriptionData.address.postCode}
                            onChange={handleInputChange}
                            label="postCode"
                        />
                    </FormControl>

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Día de la semana"
                        name="deliveryWeekDay"
                        value={newSubscriptionData.deliveryWeekDay}
                        onChange={handleInputChange}
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