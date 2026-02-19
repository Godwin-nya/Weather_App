const MainWeatherCard = ({ city, setCity, weather, loading, error }) => {

  

  return (
    <>
     

      <div className="bg-[#1F2937] p-6 rounded-2xl flex justify-between items-center mt-4">

        {loading && <p>Loading...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {weather && !loading && (
          <>
            <div>
              <h3 className="text-gray-400 text-lg">
                {weather.name}, {weather.sys.country}
              </h3>

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
              <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
            </div>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="weather icon"
            />
          </>
        )}
      </div>
    </>
  );
};

export default MainWeatherCard;
