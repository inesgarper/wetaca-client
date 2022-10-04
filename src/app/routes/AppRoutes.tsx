import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MealsPage from "../pages/MealsPage/MealsPage"
import NewMealPage from "../pages/NewMealPage/NewMealPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/registro' element={<SignUpPage />} />

            <Route path='/crear-plato' element={<NewMealPage />} />
            <Route path='/menu' element={<MealsPage />} />

        </Routes>
    )

}

export default AppRoutes