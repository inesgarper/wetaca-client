import { Box, Button, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import userServices from "../../services/userServices"

interface Props {
    setSubscriptionStage: React.Dispatch<React.SetStateAction<number>>
}

const NewPaymentMethodForm = ({ setSubscriptionStage }: Props) => {

    const [newPaymentMethodData, setNewPaymentMethodData] = useState({
        cardNumber: '',
        cardName: '',
        securityCode: 0,
        expiration: undefined
    })

    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let data = { ...newPaymentMethodData }
        const { name, value } = e.target

        if (name === 'securityCode') {
            data = {
                ...data,
                [name]: Number(value)
            }
        } else {
            data = {
                ...data,
                [name]: value
            }
        }

        setNewPaymentMethodData(data)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        userServices
            .addPaymentMethod(newPaymentMethodData)
            .then(() => navigate('/'))
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
                        <InputLabel htmlFor="cardName">Nombre</InputLabel>
                        <OutlinedInput
                            id="cardName"
                            type="text"
                            name="cardName"
                            value={newPaymentMethodData.cardName}
                            onChange={handleInputChange}
                            label="cardName"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                        <InputLabel htmlFor="cardNumber">Nº de la tarjeta</InputLabel>
                        <OutlinedInput
                            id="cardNumber"
                            type="text"
                            name="cardNumber"
                            value={newPaymentMethodData.cardNumber}
                            onChange={handleInputChange}
                            label="cardNumber"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                        <InputLabel htmlFor="securityCode">CVC</InputLabel>
                        <OutlinedInput
                            id="securityCode"
                            type="number"
                            name="securityCode"
                            value={newPaymentMethodData.securityCode}
                            onChange={handleInputChange}
                            label="securityCode"
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
                        <InputLabel shrink htmlFor="expiration">Fecha de expiración</InputLabel>
                        <OutlinedInput
                            id="expiration"
                            type="date"
                            name="expiration"
                            value={newPaymentMethodData.expiration}
                            onChange={handleInputChange}
                            label="expiration"
                        />
                    </FormControl>
                </div>

                <Button type="submit" variant="contained">Finalizar</Button>

            </Box>
        </>
    )
}

export default NewPaymentMethodForm