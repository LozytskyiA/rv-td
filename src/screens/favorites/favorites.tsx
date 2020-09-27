import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { SCREENS } from '../../constants/screen-cases'
import { RootStackParamList } from '../../../types';
import { Posts } from '../posts';

export const Favorites = ({ navigation }: StackScreenProps<RootStackParamList, 'Main'>) => {
  const openPostHandler = post => {
    navigation.navigate(SCREENS.post, { postId: post.id, date: post.date, booked: post.booked })
  }

  const favoritesPosts = useSelector(state => state.post.favoritesPosts)

  return <Posts DATA={favoritesPosts} onOpen={openPostHandler} />
}

