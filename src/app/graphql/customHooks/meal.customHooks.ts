import { useQuery } from "@apollo/client"
import { GET_ALL_MEALS } from "./../queries/meal.queries"

export const useGetAllMeals = () => useQuery(GET_ALL_MEALS)