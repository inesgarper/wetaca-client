import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const OrderChangesFooter = () => {

    const { order } = useContext(CartContext)
    let totalMeals = 0

    if (order?.meals) {
        totalMeals = order?.meals.reduce((acc, meal) => {
            return acc + (meal?.quantity || 0)
        }, 0)
    }

    return (
        <>
            <h5>{order?.price}</h5>
            <h5>{totalMeals}</h5>
        </>
    )
}

export default OrderChangesFooter