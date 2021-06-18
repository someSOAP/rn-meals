import React from 'react'
import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Category from '@/models/Category'
import CategoryGridTile from '@components/CategoryGridTile'
import { CATEGORIES } from '@/data/dummy-data'
import { CategoryMeal } from '@constants/navigations'

type CategoriesScreenType = NavigationStackScreenComponent

export const CategoriesScreen: CategoriesScreenType = ({ navigation }) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        category={itemData.item}
        onPress={() =>
          navigation.navigate({
            routeName: CategoryMeal,
            params: {
              category: itemData.item,
            },
          })
        }
      />
    )
  }

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({})

export default CategoriesScreen
