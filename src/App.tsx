import { useContext } from 'react';
import './App.css';
import CreateMealForm from './app/components/CreateMealForm';
import NavBar from './app/components/NavBar/NavBar';
import NewMealForm from './app/components/NewMealForm/NewMealForm';
import { AuthContext } from './app/contexts/auth.context';
import AppRoutes from './app/routes/AppRoutes';


function App() {

  console.log(useContext(AuthContext))

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <NewMealForm/>
      {/* <CreateMealForm /> */}
    </div>
  );
}

export default App;
