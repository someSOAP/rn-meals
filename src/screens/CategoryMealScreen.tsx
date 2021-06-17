import React, { FC } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { MealDetail } from '@constants/navigations'
import { NavigationStackProp } from 'react-navigation-stack'

interface ICategoryMealProps {
  navigation: NavigationStackProp
}

export const CategoryMealScreen: FC<ICategoryMealProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Button
        title="GoTo CategoryMealScreen"
        onPress={() => navigation.navigate({ routeName: MealDetail })}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default CategoryMealScreen
