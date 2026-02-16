import { Sunrise, Sunset } from "lucide-react";

const ForecastSection = ({ forecast, weather }) => {
  const todayForecast = forecast?.list?.slice(0, 6);

  return (
    <div className="mt-6 grid grid-cols-3 gap-6">
      {/* LEFT SIDE */}
      <div className="col-span-2 flex flex-col gap-6">
        {/* Today */}
        <div className="bg-[#1F2937] p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Today</h3>

          <div className="grid grid-cols-6 gap-4">
            {todayForecast?.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] p-4 rounded-xl flex flex-col items-center"
              >
                <p className="text-gray-400 text-sm">
                  {new Date(item.dt_txt).getHours()}:00
                </p>

                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt=""
                />

                <p className="font-semibold">{Math.round(item.main.temp)}°</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tomorrow */}
        <div className="bg-[#1F2937] p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Tomorrow</h3>

          {forecast?.list && (
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">
                  {new Date(forecast.list[8].dt_txt).toLocaleDateString(
                    "en-US",
                    { weekday: "long" },
                  )}
                </p>
                <p className="text-2xl font-bold mt-1">
                  {Math.round(forecast.list[8].main.temp)}°
                </p>
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          )}
        </div>
      </div>

      {/* Sunrise */}
      <div className="bg-[#1F2937] p-6 rounded-2xl flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-6">Sunrise & Sunset</h3>
         <Sunrise className="w-6 h-6 text-orange-400" />
                <p className="text-gray-400">Sunrise</p>
        

        {weather?.sys && (
          <div className="space-y-6">
            {/* Sunrise */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sunrise className="w-6 h-6 text-orange-400" />
                <p className="text-gray-400">Sunrise</p>
              </div>

              <p className="font-bold">
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {/* Sunset */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sunset className="w-6 h-6 text-purple-400" />
                <p className="text-gray-400">Sunset</p>
              </div>

              <p className="font-bold">
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForecastSection;
