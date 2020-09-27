import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native'
import { SCREENS } from '../../constants/screen-cases'
import { RootStackParamList } from '../../../types';
import { Posts } from '../posts';
import { loadPosts } from '../../store/actions/post';

export const Main = ({ navigation }: StackScreenProps<RootStackParamList, 'Main'>) => {
  const openPostHandler = post => {
    navigation.navigate(SCREENS.post, { postId: post.id, date: post.date, booked: post.booked })
  }

  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.post.allPosts)

  useEffect(() => {
    dispatch(loadPosts())
  },[dispatch])

  return <Posts DATA={allPosts} onOpen={openPostHandler} />
}
