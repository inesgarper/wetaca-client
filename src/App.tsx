import { useEffect } from 'react';
import './App.css';
import { useGetAllMeals } from "./app/graphql/customHooks/meal.customHooks"
import { MEAL_getAllMeals } from './app/graphql/queries/__generated__/GET_ALL_MEALS';



function App() {

  const { data } = useGetAllMeals()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="App">
      <h1>TENGO EL CONTROL</h1>
      {data?.getAllMeals.map((meal: MEAL_getAllMeals) => {
        return <h3>{meal.name} {meal.price}</h3>
      })}
      <p></p>
    </div>
  );
}

export default App;
