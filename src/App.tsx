import { useEffect, useState } from 'react';
import './App.css';
import reviewServices from './app/services/reviewServices';
import { getReviewsQuery_getReviews } from './app/services/reviewServices/queries/__generated__/getReviewsQuery';


function App() {

  const [mealDetails, setMealDetails] = useState<Array<getReviewsQuery_getReviews | null> | null>(null)

  // const [meals, setMeals] = useState<Array<getAllMealsQuery_getAllMeals | null>>([])

  useEffect(() => {
    reviewServices
      .getReviews('630d14cef19d5545b990ec85')
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
        mealDetails?.map(review => {
          return <h3>{review?.comment}</h3>
        })
      }
      <p></p>
    </div>
  );
}

export default App;
