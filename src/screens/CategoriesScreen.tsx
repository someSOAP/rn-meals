import React from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Category from '@/models/Category'
import { CategoryMeal } from '@constants/navigations'
import { CATEGORIES } from '@/data/dummy-data'

type CategoriesScreenType = NavigationStackScreenComponent

export const CategoriesScreen: CategoriesScreenType = ({ navigation }) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigation.navigate({
            routeName: CategoryMeal,
            params: {
              categoryId: itemData.item.id,
              category: itemData.item,
            },
          })
        }
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
})

export default CategoriesScreen
