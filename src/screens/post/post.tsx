import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native'
import { DATA } from '../../data'
import { THEME } from '../../constants/theme';

export const Post = ({ route }) => {
  const { postId } = route.params;
  const post = DATA.find(post => post.id === postId);

  const removeHandler = () => {
    Alert.alert(
      `Delete ${post.id} post`,
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => console.log('OK Pressed')
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image}></Image>
      <View style={styles.textWrapp}>
        <Text>{post.text}</Text>
      </View>
      <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrapp: {
    padding: 10
  },
})
