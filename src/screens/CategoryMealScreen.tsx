import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import { MealDetail } from '@constants/navigations'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Category from '@/models/Category'

type CategoryMealScreenType = NavigationStackScreenComponent

export const CategoryMealScreen: CategoryMealScreenType = ({ navigation }) => {
  const selectedCategory: Category | undefined = navigation.getParam('category')

  return (
    <View>
      <Text>{selectedCategory?.title ?? 'Категория'}</Text>
      <Button
        title="GoTo CategoryMealScreen"
        onPress={() => navigation.navigate({ routeName: MealDetail })}
      />
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
