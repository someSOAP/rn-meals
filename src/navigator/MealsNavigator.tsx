import React, { FC } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '@screens/CategoriesScreen'
import CategoryMealScreen from '@screens/CategoryMealScreen'
import MealDetailsScreen from '@screens/MealDetailsScreen'
import FavouriteScreen from '@screens/FavouriteScreen'

import {
  MEAL_DETAIL,
  CATEGORY_MEAL,
  CATEGORIES,
  MEALS,
  FAVOURITES,
  FILTERS,
} from '@constants/navigations'
import { PRIMARY, SECONDARY } from '@color'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FiltersScreen from '@screens/FiltersScreen'

const MealsNavigator = createStackNavigator(
  {
    [CATEGORIES]: CategoriesScreen,
    [CATEGORY_MEAL]: CategoryMealScreen,
    [MEAL_DETAIL]: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY,
      },
      headerTintColor: 'white',
    },
  }
)

const FavNavigator = createStackNavigator(
  {
    [FAVOURITES]: FavouriteScreen,
    [MEAL_DETAIL]: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: PRIMARY,
      },
      headerTintColor: 'white',
    },
  }
)

const MealsIcon: FC<any> = ({ tintColor }) => {
  return <Ionicons name="ios-restaurant" size={25} color={tintColor} />
}

const FavIcon: FC<any> = ({ tintColor }) => {
  return <Ionicons name="ios-star" size={25} color={tintColor} />
}

const MealsFavTabNavigator = createMaterialBottomTabNavigator(
  {
    [MEALS]: {
      navigationOptions: {
        tabBarIcon: MealsIcon,
      },
      screen: MealsNavigator,
    },
    [FAVOURITES]: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: FavIcon,
      },
    },
  },
  {
    initialRouteName: MEALS,
    activeColor: PRIMARY,
    inactiveColor: 'gray',
    shifting: true,
    barStyle: {
      backgroundColor: 'white',
    },
  }
)

const FiltersNavigator = createStackNavigator(
  {
    [FILTERS]: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Filter Meals',
    },
  }
)

const MainNavigator = createDrawerNavigator({
  [FAVOURITES]: MealsFavTabNavigator,
  [FILTERS]: FiltersNavigator,
})

export default createAppContainer(MainNavigator)
