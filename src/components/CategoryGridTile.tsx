import React, { FC } from 'react'
import { Text, StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import Category from '@/models/Category'
import { OPEN_SANS_BOLD } from '@constants/fonts'
interface ICategoryGridTileProps {
  category: Category
  onPress: () => void
}

export const CategoryGridTile: FC<ICategoryGridTileProps> = ({
  onPress,
  category,
}) => {
  return (
    <View style={{ ...styles.gridItem, backgroundColor: category.color }}>
      <TouchableNativeFeedback onPress={onPress}>
        <Text numberOfLines={2} style={styles.textStyle}>
          {category.title}
        </Text>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 7,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 15,
  },
  textStyle: {
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    textAlign: 'right',
    fontFamily: OPEN_SANS_BOLD,
    fontSize: 17,
    color: 'white',
  },
})

export default CategoryGridTile
