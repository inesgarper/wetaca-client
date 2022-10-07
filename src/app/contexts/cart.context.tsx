import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import orderServices from '../services/orderServices'
import { getMyActiveOrderQuery_getMyActiveOrder } from './../services/orderServices/queries/__generated__/getMyActiveOrderQuery'
import { AuthContext } from './auth.context'


interface CartContextInterface {
    order: getMyActiveOrderQuery_getMyActiveOrder | null
    getCart: () => void
    addMeal: (mealID: string) => void
    removeMeal: (mealID: string) => void
}

interface Props {
    children: JSX.Element
}

const CartContext = createContext<CartContextInterface>({
    order: null,
    getCart: () => { },
    addMeal: (mealID) => { },
    removeMeal: (mealID) => { }
})


const CartProviderWrapper = (props: Props) => {

    const {user} = useContext(AuthContext)
    
    const [order, setOrder] = useState<CartContextInterface["order"] | null>(null)

    const getCart = () => {

        console.log('entro en getCart')

        if (!user) {
            console.log('pero no hay usuario en el contexto')
            setOrder(null)
        } else {

            orderServices
                .getMyActiveOrder(user._id)
                .then((data) => {
                    console.log('he ejecutado getMyActiveOrder y esta es la order', data)
                    console.log('y este el user actual', user)
                    setOrder(data)
                })
                .catch(err => console.log(err))
        }
    }

    const addMeal = (mealID: string) => {
        orderServices
            .addMealToOrder(mealID)
            .then((data) => {
                setOrder(data)
            })
            .catch(err => console.log(err))
    }

    const removeMeal = (mealID: string) => {
        orderServices
            .removeMealFromOrder(mealID)
            .then((data) => {
                setOrder(data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => getCart(), [user])

    return (
    <>
        <CartContext.Provider value={{order, getCart, addMeal, removeMeal}}>
            {props.children}
        </CartContext.Provider>
    </>
    )
}

export { CartContext, CartProviderWrapper }