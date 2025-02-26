import React, { useState, useEffect } from "react";

const API_KEY = "2dcff64eb6762205b3aad7874d975979";

const Others = () => {
  const [city, setCity] = useState("srimushnam");
  const [weather, setWeather] = useState(null);
  const [quote, setQuote] = useState(null);
  const [bitcoinPriceUsd, setBitcoinPriceUsd] = useState(null);
  const [bitcoinPriceInr, setBitcoinPriceInr] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError("City not found. Try again!");
      setWeather(null);
    }
  };

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      console.log(data);
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote", error);
    }
  };

  const fetchBitcoinPrice = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr");
      const data = await response.json();
      console.log(data);
      setBitcoinPriceUsd(data.bitcoin.usd);
      setBitcoinPriceInr(data.bitcoin.inr);
    } catch (error) {
      console.error("Error fetching Bitcoin price", error);
    }
  };

  useEffect(() => {
    fetchQuote();
    fetchBitcoinPrice();
  }, []);

  return (
    <div id="others" className="bg-gray-900 flex justify-center items-center  p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Weather App 🌤️</h1>

        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 rounded-lg text-black outline-none"
          />
          <button
            onClick={getWeather}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {weather && (
          <div className="p-4 bg-gray-700 text-left rounded-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3">
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="space-y-2">
              <p className="text-lg"><strong>🌡️ Temperature:</strong> {weather.main.temp}°C (Feels like: {weather.main.feels_like}°C)</p>
              <p className="text-lg"><strong>🌥️ Weather:</strong> {weather.weather[0].description}</p>
              <p className="text-lg"><strong>💨 Wind:</strong> {weather.wind.speed} m/s, Direction: {weather.wind.deg}°</p>
              <p className="text-lg"><strong>📍 Coordinates:</strong> lat - {weather.coord.lat}, lon - {weather.coord.lon}</p>
              <p className="text-lg"><strong>🧭 Pressure:</strong> {weather.main.pressure} hPa</p>
              <p className="text-lg"><strong>💦 Humidity:</strong> {weather.main.humidity}%</p>
              <p className="text-lg"><strong>🌅 Sunrise:</strong> {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p className="text-lg"><strong>🌇 Sunset:</strong> {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
              <p className="text-lg"><strong>👀 Visibility:</strong> {weather.visibility / 1000} km</p>
              <p className="text-lg"><strong>☁️ Cloudiness:</strong> {weather.clouds.all}%</p>
            </div>
          </div>
        )}

        {quote && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <h1 className="text-lg text-green-600 italic">Random Comedy</h1>
            <p className="text-sm text-left italic"><span className="font-semibold">Setup: </span>{quote.setup}</p>
            <p className="text-sm text-left text-white"><span className="font-semibold">Punchline: </span>{quote.punchline}</p>
            <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors duration-300 inline-block" onClick={fetchQuote}>Another One</button>
          </div>
        )}

        {bitcoinPriceUsd && (
          <div className="mt-4 p-4 text-white  bg-gray-700 rounded-lg">
            <p className="text-lg font-bold">Today Single Bitcoin Price:</p>
            <p className="text-xl">${bitcoinPriceUsd} USD</p>
            <p className="text-xl">RS.{bitcoinPriceInr} INR</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Others;
