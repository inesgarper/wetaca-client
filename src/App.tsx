import { useEffect, useState } from 'react';
import './App.css';
import mealServices from './app/services/mealServices';
import { getMealsToCookQuery_getMealsToCook } from './app/services/mealServices/queries/__generated__/getMealsToCookQuery';
import { getMenuQuery_getMenu } from './app/services/mealServices/queries/__generated__/getMenuQuery';



function App() {

  const [mealDetails, setMealDetails] = useState<Array<getMealsToCookQuery_getMealsToCook | null> | null>(null)

  // const [meals, setMeals] = useState<Array<getAllMealsQuery_getAllMeals | null>>([])

  useEffect(() => {
    mealServices
      .getMealsToCook()
      .then(data => {
        console.log('la respuesta', data)
        setMealDetails(data)
      })
      .catch(err => console.log(err))

    // mealServices
    //   .getAllMeals()
    //   .then(data => {
    //     if (data) {
    //       setMeals(data)
    //     }
    //     console.log(data)
    //   })
    //   .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>TENGO EL CONTROL</h1>

      {
        mealDetails?.map(meal => {
          return <h3>{meal?.meal?.name}</h3>
        })
      }
      <p></p>
    </div>
  );
}

export default App;
