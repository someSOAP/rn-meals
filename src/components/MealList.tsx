import React, { FC } from 'react'
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'
import Meal from '@/models/Meal'
import { MealItem } from '@components/MealItem'

interface IMealListProps {
  meals: Meal[]
  onPress?: (meal: Meal) => void
}

export const MealList: FC<IMealListProps> = ({ meals, onPress }) => {
  const renderMeals = (data: ListRenderItemInfo<Meal>) => {
    return (
      <MealItem
        meal={data.item}
        onPress={() => onPress && onPress(data.item)}
      />
    )
  }

  return (
    <View>
      <FlatList data={meals} renderItem={renderMeals} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default MealList
