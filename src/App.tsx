import { useContext } from 'react';
import './App.css';
import NavBar from './app/components/NavBar/NavBar';
import { AuthContext } from './app/contexts/auth.context';
import { CartContext } from './app/contexts/cart.context';
import AppRoutes from './app/routes/AppRoutes';


function App() {

  const {getCurrentUser} = useContext(AuthContext)

  // setInterval(() => {
  //   getCurrentUser()
  // }, 3000)

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
