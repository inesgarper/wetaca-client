import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"

const HomePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <>
            <h1>Bienvenidos a WETACA</h1>
            <h2>{user?.name}</h2>
        </>
    )
}

export default HomePage