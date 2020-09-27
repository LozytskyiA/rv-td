import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Button, Platform, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export const PhotoPicker = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const takePhoto = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(image);

    if (!image.cancelled) {
      setImage(image.uri);
    }
  }

  return (
    <>
      <Button title="Make photo" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
