import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Weather from "./weatherSpec/weather";

function Info({ weatherData }) {
    const { main, wind, weather } = weatherData;
    return (
        <View style={styles.contentBox}>
            <View style={styles.iconContent}>
                <Text style={styles.weatherDescription}>{weather?.description}</Text>
                {weather?.main && <Weather condition={weather.main} />}
            </View>
            <View style={styles.content}>
                <Icon name="temperature-high" size={15} color="#F25252" />
                <Text style={styles.temp}>{main?.temp} °C</Text>
                <Icon name="wind" size={15} color="#4A88D9" />
                <Text style={styles.wind}>{wind?.speed} m/s</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentBox: {
        flex: 5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    temp: {
        padding: 15,
        fontStyle: "italic",
        textDecorationLine: "underline",
        fontWeight: "200",
        textAlign: "center",
    },
    wind: {
        padding: 15,
        fontStyle: "italic",
        textDecorationLine: "underline",
        fontWeight: "200",
        textAlign: "center",
    },
    iconContent: {
        flex: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,

        backgroundColor: "#F2F1DF",
        // borderRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: "#D7D7D9",

        shadowColor: "#D7D7D9",
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3,
        elevation: 3,
    },
    weatherDescription: {
        fontWeight: "100",
        fontSize: 25,
        textTransform: "capitalize",
        letterSpacing: 12.5,
        marginBottom: 20,
        textAlign: "center",
    },
});

export default Info;
