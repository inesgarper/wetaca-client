import { useContext } from 'react';
import './App.css';
import CreateMealForm from './app/components/CreateMealForm';
import LogInForm from './app/components/LogInForm';
import NavBar from './app/components/NavBar/NavBar';
import SignUpForm from './app/components/SignUpForm';
import { AuthContext } from './app/contexts/auth.context';
import mealServices from './app/services/mealServices';


function App() {

  console.log('ESTOY EN LA APP-----', useContext(AuthContext))
  console.log('LOCAL STORAGE---', localStorage)
  

  return (
    <div className="App">
      <NavBar />
      <h1>TENGO EL CONTROL</h1>
      <LogInForm/>
      <h2>PRUEBAS: CREAR MEAL</h2>
      <CreateMealForm/>
    </div>
  );
}

export default App;
