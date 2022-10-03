import { useContext } from 'react';
import './App.css';
import NavBar from './app/components/NavBar/NavBar';
import { AuthContext } from './app/contexts/auth.context';
import AppRoutes from './app/routes/AppRoutes';


function App() {

  console.log(useContext(AuthContext))

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
