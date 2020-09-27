import React from 'react'
import { StyleSheet, View,FlatList } from 'react-native'
import { Post } from '../../components/post';

export const Posts = ({ DATA, onOpen }) => {

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={ DATA }
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
});