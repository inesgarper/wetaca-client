import { gql } from "@apollo/client";

export const GET_ALL_MEALS = gql`
    query getAllMealsQuery {
        getAllMeals {
            unique {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            light {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            full {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            veggie {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            starter {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            dessert {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
        }
    }
`

export const GET_MEAL_DETAILS = gql`
    query getMealDetailsQuery($mealID: ID) {
        getMealDetails(mealID: $mealID) {
            name
            category
            price
        }
    }
`

export const GET_NUTRITIONAL_VALUES = gql`
    query getNutritionalValuesQuery ($mealID: ID) {
        getNutritionalValues(mealID: $mealID){
            calories
        }
    }
`

export const GET_MEALS_BY_CATEGORY = gql`
    query getMealsByCategoryQuery ($mealCategory: MealCategory) {
        getMealsByCategory(mealCategory: $mealCategory){
            name
            category
        }
    }
`

export const GET_MENU = gql`
    query getMenuQuery {
        getMenu {
            unique {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            light {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            full {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            veggie {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            starter {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            dessert {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
        }
    }
`

export const GET_NEXT_WEEK_MENU = gql`
    query getNextWeekMenuQuery {
        getNextWeekMenu {
            unique {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            light {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            full {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            veggie {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            starter {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
            dessert {
                id
                name
                category
                price
                images{
                    finals
                }
                currentlyInMenu
                nextWeekInMenu
            }
        }
    }
`

export const GET_MEALS_TO_COOK = gql`
    query getMealsToCookQuery {
        getMealsToCook {
            meal {
                id
                name
            }
            quantity
        }
    }
`