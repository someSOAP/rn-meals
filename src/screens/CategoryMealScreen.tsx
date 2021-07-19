import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { MealList } from '@components/MealList'

import Category from '@/models/Category'
import { MEAL_DETAIL } from '@constants/navigations'
import { MEALS } from '@/data/dummy-data'
import Meal from '@/models/Meal'

type CategoryMealScreenType = NavigationStackScreenComponent

export const CategoryMealScreen: CategoryMealScreenType = ({ navigation }) => {
  const selectedCategory: Category | undefined = navigation.getParam('category')

  const categoryMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(selectedCategory?.id ?? '')
  )

  const onPress = (meal: Meal) =>
    navigation.navigate({
      routeName: MEAL_DETAIL,
      params: { meal },
    })

  return <MealList meals={categoryMeals} onPress={onPress} />
}

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory: Category | undefined = navigation.getParam('category')

  return {
    headerTitle: selectedCategory?.title ?? 'Категория',
  }
}

const styles = StyleSheet.create({})

export default CategoryMealScreen
