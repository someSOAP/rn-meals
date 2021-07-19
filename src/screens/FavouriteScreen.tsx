import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { MealList } from '@components/MealList'
import { MEALS } from '@/data/dummy-data'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Meal from '@/models/Meal'
import { MEAL_DETAIL } from '@constants/navigations'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from '@components/HeaderButton'

type FavouriteScreenType = NavigationStackScreenComponent

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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

const HeaderLeft: FC<{ onPress: () => void }> = ({ onPress }) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName="ios-menu" onPress={onPress} />
  </HeaderButtons>
)

const getHeaderLeft = (onPress: () => void) => {
  return <HeaderLeft onPress={onPress} />
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
FavouriteScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Favourites Screen',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    headerLeft: getHeaderLeft(() => navigation.toggleDrawer()),
  }
}

const styles = StyleSheet.create({})

export default FavouriteScreen
