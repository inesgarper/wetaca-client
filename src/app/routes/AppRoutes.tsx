import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import NewMealPage from "../pages/NewMealPage/NewMealPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/registro' element={<SignUpPage />} />

            <Route path='/newMeal' element={<NewMealPage />} />

        </Routes>
    )

}

export default AppRoutes