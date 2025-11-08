import React, { useEffect, useState } from "react";
import "./Weather.css";
import MapView from "../components/MapView";

import search_icon from "../assets/search-icon.png";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import humid from "../assets/humidity.png";
import rainy from "../assets/rainy.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([]);

  // ✅ Theme state fixed — defined outside any function
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const allIcons = {
    1000: sunny,
    1003: cloudy,
    1006: cloudy,
    1009: cloudy,
    1063: rainy,
    1189: rainy,
    1192: rainy,
    1210: snow,
    1219: snow,
  };

  const search = async (cityName) => {
    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=da25e059e14642fda4d130526253107&q=${cityName}&days=7&aqi=no&alerts=yes`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data.location) {
        alert("City not found!");
        return;
      }

      setWeatherData({
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        temperature: Math.floor(data.current.temp_c),
        location: data.location.name,
        region: data.location.region,
        country: data.location.country,
        icon: "https:" + data.current.condition.icon,
        localTime: data.location.localtime,
        forecast: data.forecast.forecastday,
        lat: data.location.lat,
        lon: data.location.lon,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
      });

      setHistory((prev) => {
        const updated = [
          cityName,
          ...prev.filter((c) => c.toLowerCase() !== cityName.toLowerCase()),
        ].slice(0, 5);
        localStorage.setItem("searchHistory", JSON.stringify(updated));
        return updated;
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) setHistory(JSON.parse(storedHistory));
    search("Bhopal");
  }, []);

  return (
    <div className="weather">
      {/* Theme Toggle */}
      <div id="theme">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search City"
          value={city}
          // onChange={(e) => setCity(e.target.value)}
           onChange={(e) => setCity(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        search(city);
      }
    }}
        />
        <img
          className="search_icon"
          src={search_icon}
          onClick={() => search(city)}
          alt="Search"
        />
      </div>

      <div className="data_container">
        <div className="grid_left">
          {weatherData && (
            <>
              <div className="grid_left_top">
                {/* Local Time & Temp */}
                <div className="local_time">
                  <p className="local-time">{weatherData.localTime}</p>
                  <div className="temp_name">
                    <p className="temperature">{weatherData.temperature}°C</p>
                    <img
                      className="weather_icon"
                      src={weatherData.icon}
                      alt="Weather Icon"
                    />
                  </div>
                  <p className="location">
                    {weatherData.location}
                    <br /> {weatherData.region}
                    <br /> {weatherData.country}
                  </p>

                  
                </div>
                {/* Forecast */}
                <div className="forecast-container">
                  {weatherData.forecast?.map((day, index) => (
                    <div key={index} className="forecast-day">
                      <p>{day.date}</p>
                      <img
                        className="forecast_img"
                        src={allIcons[day.day.condition.code] || sunny}
                        alt={day.day.condition.text}
                        width={40}
                      />
                      <p>
                        {Math.round(day.day.maxtemp_c)}°C /{" "}
                        {Math.round(day.day.mintemp_c)}°C
                      </p>
                      <p>{day.day.condition.text}</p>
                    </div>
                  ))}
                </div>
                
              </div>

              {/* Map */}
              <MapView
                lat={weatherData.lat}
                lon={weatherData.lon}
                city={weatherData.location}
              />
            </>
          )}
        </div>

        {/* Right panel */}
        {weatherData && (
          <div className="grid_right">
            <div className="weather_data">
              <div className="humid">
                <div className="col">
                  <img src={humid} alt="Humidity" />
                  <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                  </div>
                </div>
                <div className="col">
                  <img src={wind} alt="Wind Speed" />
                  <div>
                    <p>{weatherData.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                  </div>
                </div>
              </div>
              <div className="sun">
                <div className="col">
                  <img src={sunrise} alt="Sunrise" />
                  <div>
                    <p>{weatherData.sunrise}</p>
                    <span>Sunrise</span>
                  </div>
                </div>
                <div className="col">
                  <img src={sunset} alt="Sunset" />
                  <div>
                    <p>{weatherData.sunset}</p>
                    <span>Sunset</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search History */}
            <p className="recently_searched">Recently Searched</p>
            <div className="history">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="history-item"
                  onClick={() => {
                    setCity(item);
                    search(item);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
