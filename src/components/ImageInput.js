import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { styles } from '../styles'
import { UserImage } from './UserImage'

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
            aspect: [4, 4],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
            
        }
    }
    return (
        <TouchableOpacity
            onPress={() => { pickImage() }}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',

            }}
        >
            {!image &&
                <UserImage
                    style
                    image={image}
                    edit={edit}
                />

            }

            {image &&
                <Image source={{ uri: image }} style={{
                    marginBottom: -30,
                    borderRadius: 100,
                    width: 110,
                    height: 110,
                }}
                />
            }
            <Text
                style={{
                    backgroundColor: 'rgba(0,0,0, 0.4)',
                    color: '#ffffff',
                    padding: 5,
                    borderRadius: 40,
                    width: 80,
                }}
            >

                Editar foto
                </Text>
        </TouchableOpacity>

    )
}