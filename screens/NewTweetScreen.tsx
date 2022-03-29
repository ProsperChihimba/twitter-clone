import { StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../components/ProfilePicture';
import { useState } from 'react';


export default function NewTweetScreen({ navigation }: RootTabScreenProps<'Home'>) {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const onPostTweet = () => {
        console.log("Post Tweet " + tweet)
        console.log("Post Image " + imageUrl)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable
                    onPress={() => navigation.navigate('Home')}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                    <AntDesign name='close' size={25} color={Colors.light.tint} />
                </Pressable>
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture size={35} image={'https://pbs.twimg.com/profile_images/1506373284736155659/ud04uunp_400x400.jpg'} />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={tweet}
                        onChangeText={(value) => setTweet(value)}
                        multiline={true}
                        numberOfLines={4}
                        style={styles.tweetInput}
                        placeholder="What's happening?"
                    />
                    <TextInput
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        style={styles.imageInput}
                        placeholder="Image"
                    />
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputContainer: {
        flex: 1,
        marginLeft: 10,
    },
    tweetInput: {
        height: 30,
        maxHeight: 300,
    },
    imageInput: {

    }
});
