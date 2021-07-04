import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Foggy from "react-native-vector-icons/MaterialCommunityIcons";

export const Rainy = (color = "#024873") => {
    return <Icon name="rainy" color={color} size={50} />;
};

export const Thunderstorm = (color = "#262626") => {
    return <Icon name="thunderstorm" color={color} size={50} />;
};

export const Clear = (color = "tomato") => {
    return <Icon name="sunny" color={color} size={50} />;
};

export const Cloudy = (color = "#262626") => {
    return <Icon name="cloudy" color={color} size={50} />;
};

export const Snow = (color = "#262626") => {
    return <Icon name="snow" color={color} size={50} />;
};

export const Fog = (color = "#262626") => {
    return <Foggy name="weather-fog" color={color} size={50} />;
};
