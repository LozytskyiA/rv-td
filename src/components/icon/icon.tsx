import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons'
import { THEME } from '../../constants/theme';

export const IoniconsHeaderButton = props => (
    <HeaderButton 
      {...props}
      iconSize={24}
      IconComponent={Ionicons}
      color={Platform.OS === 'web' ? '#fff' : THEME.MAIN_COLOR}
    />
)
