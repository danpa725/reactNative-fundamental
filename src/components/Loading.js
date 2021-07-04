import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading({ isLoading }) {
    return (
        <View style={styles.container}>
            {!isLoading && <Text style={styles.loadingText}>Loading...😃</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // 수평 패딩, 수직 패딩
    },
    loadingText: {
        alignItems: "center",
        justifyContent: "center",
        color: "gray",
        fontSize: 20,
    },
});

export default Loading;
