import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface IFavouriteScreenProps {
  prop?: any
}

export const FavouriteScreen: FC<IFavouriteScreenProps> = ({ children }) => {
  return (
    <View>
      <Text>FAV</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default FavouriteScreen
