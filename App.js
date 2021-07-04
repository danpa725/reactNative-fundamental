import React, { useEffect, useState, useCallback } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Alert } from "react-native";
import axios from "axios";

import * as Location from "expo-location";
//! 컴포넌트 로딩
import Loading from "./src/components/Loading";
// import { getWeather } from "./src/api/api";
import Info from "./src/components/Info";

const API_KEY = "0f08d3e36af0567afc5f34b2ddcd0756";

export default function App() {
    const [isLoading, setLoading] = useState(false);
    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                // 사용자 위치 추적 허용 요청
                await Location.requestForegroundPermissionsAsync();
                // 사용자 경도, 위도 요청
                const {
                    coords: { latitude, longitude },
                } = await Location.getCurrentPositionAsync();
                setLocation({ latitude, longitude });
                setLoading(true);
                // API 에 보내고 날씨 받기
            } catch (err) {
                Alert.alert("please allow location access😶");
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const data = getWeather(location?.latitude, location?.longitude, API_KEY);
        setWeatherData(data);
    }, [location]);

    const getWeather = useCallback(async (latitude, longitude, key) => {
        //! api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        if (latitude && longitude) {
            try {
                const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
                const {
                    data: { main, wind, weather },
                } = await axios.get(URL);
                const weatherData = { main, wind, weather: weather[0] };
                setWeatherData(weatherData);
            } catch (err) {
                console.warn(err);
            }
        }
        return;
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {Object.keys(weatherData).length === 3 && (
                    <Info weatherData={weatherData} />
                )}

                <Loading isLoading={isLoading} />
            </View>
            <View style={styles.loadMessage}>
                <Text style={styles.headText}>June's Weather</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        // 수평 패딩, 수직 패딩
        paddingHorizontal: 10,
        paddingVertical: 35,

        backgroundColor: "#F2F2F2",
        fontFamily: "American Typewriter",
    },
    headText: {
        color: "#262626",
        fontSize: 25,
        fontWeight: "200",
    },
    content: {
        flex: 15,
        color: "#262626",
        alignItems: "center",
        justifyContent: "center",
    },
    loadMessage: {
        flex: 1,
    },
});
