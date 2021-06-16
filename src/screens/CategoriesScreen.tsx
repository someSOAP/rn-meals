import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface ICategoriesScreenProps {
  prop?: any
}

export const CategoriesScreen: FC<ICategoriesScreenProps> = ({ children }) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
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
