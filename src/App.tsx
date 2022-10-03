import './App.css';
import CreateMealForm from './app/components/CreateMealForm';
import NavBar from './app/components/NavBar/NavBar';
import NewMealForm from './app/components/NewMealForm/NewMealForm';
import AppRoutes from './app/routes/AppRoutes';


function App() {

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
