import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/registro' element={<SignUpPage />} />

        </Routes>
    )

}

export default AppRoutes