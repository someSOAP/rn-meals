import React, { FC, useState } from 'react'
import { StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { OPEN_SANS, OPEN_SANS_BOLD } from '@constants/fonts'
import MealsNavigator from './src/navigator'

const fetchFonts = () => {
  return Font.loadAsync({
    [OPEN_SANS]: require('./assets/fonts/OpenSans-Regular.ttf'),
    [OPEN_SANS_BOLD]: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App: FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.error}
      />
    )
  }

  return <MealsNavigator />
}

const styles = StyleSheet.create({})

export default App
