import { useContext } from 'react';
import './App.css';
import NavBar from './app/components/NavBar/NavBar';
import NewMealForm from './app/components/NewMealForm/NewMealForm';
import { AuthContext } from './app/contexts/auth.context';
import AppRoutes from './app/routes/AppRoutes';


function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <NewMealForm></NewMealForm>
    </div>
  );
}

export default App;
