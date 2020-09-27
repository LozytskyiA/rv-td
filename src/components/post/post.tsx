import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

interface IPostProps {
  post: {
    id: string,
    img: string,
    text: string,
    date: string,
    booked: boolean
  },
  onOpen: ({}) => void
}

export const Post = ({ post, onOpen }: IPostProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
      <ImageBackground style={styles.image} source={{uri: post.img}}>
        <View style={styles.textWrapp}>
          <Text style={styles.title}>
            {new Date(post.date).toLocaleDateString()}
          </Text>
        </View>
      </ImageBackground>
      <Text></Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrapp: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'regular'
  }
})
