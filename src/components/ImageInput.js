import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { styles } from '../styles'
export default function ImageInput({ image, setImage, edit }) {

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            setImage(result.uri);

        }
    }
    return (
        <TouchableOpacity
            style={styles.userInfoImage}
            onPress={() => { pickImage() }}>


            {image &&
                <Image source={{ uri: image }} style={{
                    marginBottom: -30,
                    borderRadius: 100,
                    marginTop: 5,
                    width: 110,
                    height: 110,
                }}
                />
            }
            {edit && <Text
                style={{
                    backgroundColor: 'rgba(0,0,0, 0.4)',
                    color: '#ffffff',
                    padding: 5,
                    borderRadius: 40,
                }}
            >

                Editar foto
                </Text>}
        </TouchableOpacity>

    )
}