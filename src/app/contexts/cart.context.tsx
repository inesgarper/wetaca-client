import { createContext, useEffect, useState } from 'react'
import orderServices from '../services/orderServices'
import { getMyActiveOrderQuery_getMyActiveOrder } from './../services/orderServices/queries/__generated__/getMyActiveOrderQuery'


interface CartContextInterface {
    order: getMyActiveOrderQuery_getMyActiveOrder | null
    getCart: () => void
    addMeal: (mealID: string) => void
    removeMeal: (mealID: string) => void
    setOrder: React.Dispatch<React.SetStateAction<getMyActiveOrderQuery_getMyActiveOrder | null>>
}

interface Props {
    children: JSX.Element
}

const CartContext = createContext<CartContextInterface>({
    order: null,
    getCart: () => { },
    addMeal: (mealID) => { },
    removeMeal: (mealID) => { },
    setOrder: () => { }
})

const CartProviderWrapper = (props: Props) => {

    const [order, setOrder] = useState<CartContextInterface["order"] | null>(null)

    const getCart = () => {
        orderServices
            .getMyActiveOrder()
            .then((data) => {
                console.log('ACTIVE ORDER --->', data)
                setOrder(data)
            })
            .catch(err => console.log(err))
    }

    const addMeal = (mealID: string) => {
        orderServices
            .addMealToOrder(mealID)
            .then((data) => {
                setOrder(data)
                // getCart()
            })
            .catch(err => console.log(err))
    }

    const removeMeal = (mealID: string) => {
        orderServices
            .removeMealFromOrder(mealID)
            .then((data) => {
                setOrder(data)
                // getCart()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => getCart(), [])

    return (
        <>
            <CartContext.Provider value={{ order, setOrder, getCart, addMeal, removeMeal }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProviderWrapper }