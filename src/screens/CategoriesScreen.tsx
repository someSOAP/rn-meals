import React, { FC } from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native'
import {
  NavigationStackProp,
  NavigationStackScreenComponent,
} from 'react-navigation-stack'
import Category from '@/models/Category'
import { CategoryMeal } from '@constants/navigations'
import { CATEGORIES } from '@/data/dummy-data'
import { PRIMARY } from '@color'
interface ICategoriesScreenProps {
  navigation: NavigationStackProp
}

type CategoriesScreenType =
  NavigationStackScreenComponent<ICategoriesScreenProps>

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
  headerStyle: {
    backgroundColor: PRIMARY,
  },
  headerTintColor: 'white',
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
