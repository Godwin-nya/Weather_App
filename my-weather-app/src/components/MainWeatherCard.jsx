const MainWeatherCard = ({ city, setCity, weather, loading, error }) => {

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  return (
    <>
      <input
        type="text"
        onKeyDown={handleSearch}
        className="border-2 border-gray-600 bg-transparent text-white w-80 rounded-lg p-2"
        placeholder="Search location..."
      />

      <div className="bg-[#1F2937] p-6 rounded-2xl flex justify-between items-center mt-4">

        {loading && <p>Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {weather && !loading && (
          <>
            <div>
              <p className="text-gray-400 text-lg">
                {weather.name}, {weather.sys.country}
              </p>

              <h1 className="text-5xl font-bold mt-2">
                {Math.round(weather.main.temp)}°C
              </h1>

              <p className="text-gray-400 mt-1">
                High: {Math.round(weather.main.temp_max)}° 
                Low: {Math.round(weather.main.temp_min)}°
              </p>

              <p className="mt-4 text-lg capitalize">
                {weather.weather[0].description}
              </p>
            </div>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </>
        )}
      </div>
    </>
  );
};

export default MainWeatherCard;
