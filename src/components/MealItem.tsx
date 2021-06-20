import React, { FC } from 'react'
import { startCase } from 'lodash'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import Meal from '@/models/Meal'
import { mixins } from '@/styles/mixins'
import { SECONDARY } from '@color'

interface IMealItemProps {
  meal: Meal
  onPress: () => void
}

export const MealItem: FC<IMealItemProps> = ({ meal, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage}>
        <View>
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.mealDetail}>
          <View style={styles.detailRow}>
            <Text style={styles.detail}>{meal.duration}m</Text>
            <Text style={styles.detail}>{startCase(meal.complexity)}</Text>
            <Text style={styles.detail}>{startCase(meal.affordability)}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 200,
    backgroundColor: '#ccc',
    marginVertical: 5,
    borderRadius: 10,
    elevation: 7,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  title: mixins.title,
  mealDetail: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  detailRow: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: SECONDARY,
    justifyContent: 'space-between',
  },
  detail: {
    color: 'white',
  },
})

export default MealItem
