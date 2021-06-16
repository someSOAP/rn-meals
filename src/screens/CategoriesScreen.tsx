import React, { FC } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { CategoryMeal } from '@constants/navigations'
interface ICategoriesScreenProps {
  navigation: NavigationStackProp
}

export const CategoriesScreen: FC<ICategoriesScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="GoTo CategoryMealScreen"
        onPress={() => navigation.navigate({ routeName: CategoryMeal })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoriesScreen
