import React from 'react'
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { MealItem } from '@components/MealItem'
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

  const renderMeals = (data: ListRenderItemInfo<Meal>) => {
    return (
      <MealItem
        meal={data.item}
        onPress={() =>
          navigation.navigate({
            routeName: MEAL_DETAIL,
            params: { meal: data.item },
          })
        }
      />
    )
  }

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
