import { useContext } from 'react';
import './App.css';
import NavBar from './app/components/NavBar/NavBar';
import { AuthContext } from './app/contexts/auth.context';
import AppRoutes from './app/routes/AppRoutes';


function App() {

  console.log('ESTOY EN LA APP-----', useContext(AuthContext))
  console.log('LOCAL STORAGE---', localStorage)


  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
