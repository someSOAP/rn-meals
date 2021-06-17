import React, { FC } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { MealDetail, Categories } from '@constants/navigations'

interface IMealDetailsScreenProps {
  navigation: NavigationStackProp
}

export const MealDetailsScreen: FC<IMealDetailsScreenProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.push(MealDetail)}
        title="GOTO another Meal detail"
      />
      <Button title="BACK" onPress={() => navigation.pop()} />
      <Button title="TO ROOT" onPress={() => navigation.popToTop()} />
      <Button
        title="REPLACE ROOT"
        onPress={() => navigation.replace(Categories)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default MealDetailsScreen
