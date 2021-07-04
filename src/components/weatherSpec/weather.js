import React from "react";
import { WEATHER_CONDITION } from "./weatherCondition";
import { Rainy, Thunderstorm, Clear, Cloudy, Snow, Fog } from "./weatherIcon";

export default function Weather({ condition = "clear" }) {
    if (condition === WEATHER_CONDITION.CLEAR) {
        return <Clear />;
    } else if (
        (condition === WEATHER_CONDITION.CLOUDS) |
        (condition === WEATHER_CONDITION.DRIZZLE)
    ) {
        return <Cloudy />;
    } else if (condition === WEATHER_CONDITION.RAIN) {
        return <Rainy />;
    } else if (condition === WEATHER_CONDITION.SNOW) {
        return <Snow />;
    } else if (condition === WEATHER_CONDITION.THUNDER_STORM) {
        return <Thunderstorm />;
    }
    // 배열화 시킨 후 메서드 적용
    else if (new Array(WEATHER_CONDITION.ATMOSPHERE).includes(condition)) {
        return <Fog />;
    }
}
