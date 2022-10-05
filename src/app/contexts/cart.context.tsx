import { createContext, useEffect, useState } from 'react'
import orderServices from '../services/orderServices'
import { getMyActiveOrderQuery_getMyActiveOrder } from './../services/orderServices/queries/__generated__/getMyActiveOrderQuery'


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

    
    const [order, setOrder] = useState<CartContextInterface["order"] | null>(null)
    console.log('CONTEXTO DEL CARRITO ---', order)

    const getCart = () => {
        orderServices
            .getMyActiveOrder()
            .then((data) => {
                console.log(data)
                setOrder(data)
            })
            .catch(err => console.log(err))
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

    useEffect(() => getCart(), [])

    return (
    <>
        <CartContext.Provider value={{order, getCart, addMeal, removeMeal}}>
            {props.children}
        </CartContext.Provider>
    </>
    )
}

export { CartContext, CartProviderWrapper }