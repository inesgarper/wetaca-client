import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MenuPage from "../pages/MenuPage/MenuPage"
import NewMealPage from "../pages/NewMealPage/NewMealPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import NewSubscriptionPage from "../pages/NewSubscriptionPage/NewSubscriptionPage"
import MealsPage from "../pages/MealsPage/MealsPage"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/registro' element={<SignUpPage />} />
            <Route path='/crear-suscripcion' element={<NewSubscriptionPage/>}/>

            <Route path='/crear-plato' element={<NewMealPage />} />
            <Route path='/menu' element={<MenuPage />} />

            {/* ADMIN ROUTES */}
            <Route path='/crear-menu' element={<MealsPage/>}/>

        </Routes>
    )

}

export default AppRoutes