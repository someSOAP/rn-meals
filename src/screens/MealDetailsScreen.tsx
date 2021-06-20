import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from '@components/HeaderButton'
import Meal from '@/models/Meal'

export const MealDetailsScreen: NavigationStackScreenComponent = ({
  navigation,
}) => {
  const selectedMeal: Meal | undefined = navigation.getParam('meal')

  return (
    <View>
      <Text>{selectedMeal?.title}</Text>
    </View>
  )
}

const HeaderRight = () => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Favourite"
      iconName="ios-star"
      onPress={() => console.log('Mark as Fav')}
    />
  </HeaderButtons>
)

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const selectedMeal: Meal | undefined = navigation.getParam('meal')

  return {
    headerTitle: selectedMeal?.title ?? 'Блюдо',
    headerRight: HeaderRight,
  }
}

const styles = StyleSheet.create({})

export default MealDetailsScreen
