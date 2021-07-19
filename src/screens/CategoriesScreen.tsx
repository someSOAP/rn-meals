import React, { FC } from 'react'
import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import Category from '@/models/Category'
import CategoryGridTile from '@components/CategoryGridTile'
import { CATEGORIES } from '@/data/dummy-data'
import { CATEGORY_MEAL } from '@constants/navigations'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from '@components/HeaderButton'

type CategoriesScreenType = NavigationStackScreenComponent

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const CategoriesScreen: CategoriesScreenType = ({ navigation }) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        category={itemData.item}
        onPress={() =>
          navigation.navigate({
            routeName: CATEGORY_MEAL,
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
CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Meal Categories',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    headerLeft: getHeaderLeft(() => navigation.toggleDrawer()),
  }
}

const styles = StyleSheet.create({})

export default CategoriesScreen
