import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
} from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { MealItem } from '@components/MealItem'
import Category from '@/models/Category'

import { MEALS } from '@/data/dummy-data'
import Meal from '@/models/Meal'

type CategoryMealScreenType = NavigationStackScreenComponent

const renderMeals = (data: ListRenderItemInfo<Meal>) => {
  return <MealItem meal={data.item} onPress={() => void 0} />
}

export const CategoryMealScreen: CategoryMealScreenType = ({ navigation }) => {
  const selectedCategory: Category | undefined = navigation.getParam('category')

  const categoryMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(selectedCategory?.id ?? '')
  )

  return (
    <View>
      <FlatList data={categoryMeals} renderItem={renderMeals} />
    </View>
  )
}

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const selectedCategory: Category | undefined = navigation.getParam('category')

  return {
    headerTitle: selectedCategory?.title ?? 'Категория',
  }
}

const styles = StyleSheet.create({})

export default CategoryMealScreen
