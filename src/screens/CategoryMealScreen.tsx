import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
} from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Category from '@/models/Category'

import { MEALS } from '@/data/dummy-data'
import Meal from '@/models/Meal'

type CategoryMealScreenType = NavigationStackScreenComponent

const renderMeals = (data: ListRenderItemInfo<Meal>) => {
  return (
    <View>
      <Text>{data.item.title}</Text>
    </View>
  )
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
