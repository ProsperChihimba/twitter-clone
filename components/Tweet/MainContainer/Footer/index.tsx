import React from "react";
import { View, Text, Image } from "react-native";
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons';

import { TweetType } from "../../../../types";
import styles from "./styles";

export type FooterProps = {
    tweet: TweetType,
}

const Footer = ({tweet}: FooterProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <EvilIcons name='comment' size={20} color='grey' />
                <Text style={styles.number}>{ tweet.numberOfComments }</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name='retweet' size={23} color='grey' />
                <Text style={styles.number}>{ tweet.numberOfRetweets }</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name='hearto' size={15} color='grey' />
                <Text style={styles.number}>{ tweet.numberOfLikes }</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name='share-google' size={21} color='grey' />
            </View>
        </View>
    )}

export default Footer;