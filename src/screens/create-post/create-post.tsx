import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Platform, Alert, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export const CreatePost = () => {
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    
  }, [image]);

  const askForPermission = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    )

    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
      return false;
    }

    return true
  }

  const takePhoto = async () => {
    const hasPermissions = await askForPermission();

    if(!hasPermissions) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!image.cancelled) {
      setImage(image.uri);
    }
  }
  return (
    <View>
      <Button title="Make photo" onPress={takePhoto} />
      <Text>
        {image && <Image style={styles.image} source={{ uri: image }} />}
      </Text>
    </View>
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
