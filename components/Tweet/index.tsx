import React from "react";
import { View } from "react-native";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import { TweetType } from "../../types";
import styles from "./styles";


export type TweetProps = {
    tweet: TweetType,
}

const Tweet = ({tweet}: TweetProps) => {
    return (
        <View style={styles.container}>
            {/* Left Container */}
            <LeftContainer user={tweet.user} />
            {/* Main Container */}
            <MainContainer tweet={tweet} />
        </View>
    )}

export default Tweet;