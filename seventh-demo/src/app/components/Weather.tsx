import React from "react";

const wait = (ms: number) => new Promise((resole) => setTimeout(resole, ms));

const Weather = async () => {
  await wait(500);
  return <div>Weather</div>;
};

export default Weather;
