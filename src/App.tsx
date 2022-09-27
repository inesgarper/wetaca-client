import { useEffect, useState } from 'react';
import './App.css';
import mealServices from './app/services/mealServices';
import { getAllMealsQuery_getAllMeals } from './app/services/mealServices/queries/__generated__/getAllMealsQuery';
import { getMealDetailsQuery_getMealDetails } from './app/services/mealServices/queries/__generated__/getMealDetailsQuery';



function App() {

  const [mealDetails, setMealDetails] = useState<getMealDetailsQuery_getMealDetails | null>(null)

  // const [meals, setMeals] = useState<Array<getAllMealsQuery_getAllMeals | null>>([])

  useEffect(() => {
    mealServices
      .getMealDetails("6318f6cc12e12a635fbb0235")
      .then(data => {
        console.log(data)
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
      <h3>{mealDetails?.name} {mealDetails?.category}</h3>
      {/* {
        meals.map(meal => {
          return <h3>{meal?.name} {meal?.price}</h3>
        })
      } */}
      <p></p>
    </div>
  );
}

export default App;
