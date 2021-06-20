import { StyleSheet } from 'react-native'
import { OPEN_SANS_BOLD } from '@constants/fonts'

export const mixins = StyleSheet.create({
  title: {
    width: '100%',
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    textAlign: 'right',
    fontFamily: OPEN_SANS_BOLD,
    fontSize: 17,
    color: 'white',
  },
})

export default mixins
