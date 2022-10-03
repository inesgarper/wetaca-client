import { useContext } from 'react';
import './App.css';
import LogInForm from './app/components/NavBar/LogInForm';
import NavBar from './app/components/NavBar/NavBar';
import SignUpForm from './app/components/NavBar/SignUpForm';
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
      <SignUpForm/>
    </div>
  );
}

export default App;
