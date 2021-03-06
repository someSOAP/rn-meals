import React, { FC } from 'react'
import {
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  ImageBackground,
} from 'react-native'
import Category from '@/models/Category'
import { mixins } from '@/styles/mixins'

interface ICategoryGridTileProps {
  category: Category
  onPress: () => void
}

export const CategoryGridTile: FC<ICategoryGridTileProps> = ({
  onPress,
  category,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{ ...styles.gridItem, backgroundColor: category.color }}>
        <ImageBackground
          style={styles.image}
          source={{ uri: category.imageURL }}
        >
          <Text numberOfLines={2} style={styles.textStyle}>
            {category.title}
          </Text>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
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
  image: {
    width: '100%',
    height: '100%',
  },
  textStyle: mixins.title,
})

export default CategoryGridTile
