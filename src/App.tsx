import { useContext } from 'react';
import './App.css';
import NavBar from './app/components/NavBar/NavBar';
import { CartContext } from './app/contexts/cart.context';
import AppRoutes from './app/routes/AppRoutes';


function App() {

  console.log(useContext(CartContext))

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
