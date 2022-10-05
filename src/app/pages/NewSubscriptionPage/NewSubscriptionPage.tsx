import { useState } from "react"
import NewPaymentMethodForm from "../../components/NewPaymentMethodForm/NewPaymentMethodFrom"
import NewSubscriptionForm from "../../components/NewSubscriptionForm/NewSubscriptionForm"

const NewSubscriptionPage = () => {

    const [subscriptionStage, setSubscriptionStage] = useState(0)

    return (
        <>
            {subscriptionStage}
            <h1>Suscríbete</h1>
            {
                subscriptionStage === 0 && <NewSubscriptionForm setSubscriptionStage={setSubscriptionStage} />
            }
            {
                subscriptionStage === 1 && <NewPaymentMethodForm setSubscriptionStage={setSubscriptionStage} />
            }

        </>
    )
}

export default NewSubscriptionPage