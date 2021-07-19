import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { MealList } from '@components/MealList'
import { MEALS } from '@/data/dummy-data'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Meal from '@/models/Meal'
import { MEAL_DETAIL } from '@constants/navigations'

type FavouriteScreenType = NavigationStackScreenComponent

export const FavouriteScreen: FavouriteScreenType = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')

  const onPress = (meal: Meal) =>
    navigation.navigate({
      routeName: MEAL_DETAIL,
      params: { meal },
    })

  return (
    <View>
      <MealList meals={favMeals} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default FavouriteScreen
