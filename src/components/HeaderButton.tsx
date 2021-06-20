import React, { FC } from 'react'
import {
  HeaderButton as HeaderBtn,
  HeaderButtonProps,
} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

export const HeaderButton: FC<HeaderButtonProps> = ({ ...props }) => {
  return (
    <HeaderBtn
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  )
}

export default HeaderButton
