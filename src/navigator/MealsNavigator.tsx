import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '@screens/CategoriesScreen'
import CategoryMealScreen from '@screens/CategoryMealScreen'
import MealDetailsScreen from '@screens/MealDetailsScreen'
import { MealDetail, CategoryMeal, Categories } from '@constants/navigations'

const MealsNavigator = createStackNavigator({
  [Categories]: CategoriesScreen,
  [CategoryMeal]: CategoryMealScreen,
  [MealDetail]: MealDetailsScreen,
})

export default createAppContainer(MealsNavigator)
