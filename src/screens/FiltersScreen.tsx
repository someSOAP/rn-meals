import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from '@components/HeaderButton'

interface IFiltersScreenProps {
  prop?: any
}

export const FiltersScreen: FC<IFiltersScreenProps> = ({ children }) => {
  return <View></View>
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
FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Favourites Screen',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    headerLeft: getHeaderLeft(() => navigation.toggleDrawer()),
  }
}

const styles = StyleSheet.create({})

export default FiltersScreen
