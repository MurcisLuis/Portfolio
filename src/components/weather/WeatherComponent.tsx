import { component$, useTask$, useStore } from '@builder.io/qwik';
import { type ContentSectionProps } from "../content/ContentSection";
const CloudyDay1 = "/img/cloudy-day-1.svg";
const CloudyDay2 = "/img/cloudy-day-2.svg";
const CloudyDay3 = "/img/cloudy-day-3.svg";
const CloudyNight1 = "/img/cloudy-night-1.svg";
const CloudyNight2 = "/img/cloudy-night-2.svg";
const CloudyNight3 = "/img/cloudy-night-3.svg";
const RainyDay1 = "/img/rainy-1.svg";
const RainyDay2 = "/img/rainy-2.svg";
const RainyDay3 = "/img/rainy-3.svg";
const RainyNight4 = "/img/rainy-4.svg";
const RainyNight5 = "/img/rainy-5.svg";
const RainyNight6 = "/img/rainy-6.svg";
const SnowyDay1 = "/img/snowy-1.svg";
const SnowyDay2 = "/img/snowy-2.svg";
const SnowyDay3 = "/img/snowy-3.svg";
const SnowyNight4 = "/img/snowy-4.svg";
const SnowyNight5 = "/img/snowy-5.svg";
const SnowyNight6 = "/img/snowy-6.svg";
const Thunther = "/img/thunder.svg";
const Day = "/img/day.svg";
const Night = "/img/night.svg";


export const Weather = component$<ContentSectionProps>((props) => {
    //in react use useState
    const state = useStore({
        svg: Day,
        temperature: 10,
        city: 'Calatayud'
    });

    //in react useEffect
    useTask$(async ({ track }) => {
        track(() => state);

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=41.353196&lon=-1.6329726&appid=${import.meta.env.PUBLIC_WEATHER_KEY}&units=metric&lang=es`
          );
          const data = await response.json();
          const weatherCondition = data.weather[0].main;
          state.temperature=parseInt(data.main.temp);
          state.city=data.name;

          let offset = 1; // CET por defecto
          const now = new Date();
          const month = now.getUTCMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
  
          // España cambia a CEST entre marzo y octubre
          if (month >= 3 && month <= 10) {
              offset = 2; // CEST
          }

          const localHour = now.getUTCHours() + offset;
          const isDayTime = localHour >= 6 && localHour < 20;
          const dayIntervals = [6, 12, 18]; // 6-11: Mañana, 12-17: Mediodía, 18-19: Tarde
          const nightIntervals = [20, 0, 4]; // 20-23: Temprano en la noche, 0-3: Medianoche, 4-5: Tarde en la noche
          let iconIndex;

        if (isDayTime) {
            if (localHour < dayIntervals[1]) {
                iconIndex = 0; // Mañana
            } else if (localHour < dayIntervals[2]) {
                iconIndex = 1; // Mediodía
            } else {
                iconIndex = 2; // Tarde
            }
        } else {
            if (localHour >= nightIntervals[0] || localHour < nightIntervals[1]) {
                iconIndex = 0; // Temprano en la noche
            } else if (localHour < nightIntervals[2]) {
                iconIndex = 1; // Medianoche
            } else {
                iconIndex = 2; // Tarde en la noche
            }
        }
        type WeatherKey = 'Clear' | 'Thunderstorm' | 'Drizzle' | 'Clouds' | 'Rain' | 'Snow' | 'Default';

        // Mapeo de condiciones a íconos
        const iconMap = {
            Clear: isDayTime ? Day : Night,
            Thunderstorm: Thunther,
            Drizzle: isDayTime ? [RainyDay1, RainyDay2, RainyDay3][iconIndex] : [RainyNight4, RainyNight5, RainyNight6][iconIndex],
            Clouds: isDayTime ? [CloudyDay1, CloudyDay2, CloudyDay3][iconIndex] : [CloudyNight1, CloudyNight2, CloudyNight3][iconIndex],
            Rain: isDayTime ? [RainyDay1, RainyDay2, RainyDay3][iconIndex] : [RainyNight4, RainyNight5, RainyNight6][iconIndex],
            Snow: isDayTime ? [SnowyDay1, SnowyDay2, SnowyDay3][iconIndex] : [SnowyNight4, SnowyNight5, SnowyNight6][iconIndex],
            Default: Day // Ícono predeterminado para condiciones no especificadas
        };
        
        
        state.svg = iconMap[weatherCondition as WeatherKey];
  
          
    
    });
    return (
        <div class={`${props.class} flex flex-col items-center justify-center p-4 text-white`}>
            <div class="absolute text-center">
                <img src={state.svg} height={18} width={18} class="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36" alt="Weather icon"/>
                <p class="text-sm sm:text-base text-white">Calatayud</p>
                <p class="text-xs sm:text-sm text-gray-200">Spain</p>
            </div>
            <div class="z-10 mt-3 sm:mt-6 md:mt-12">
                <p class="text-white text-1xl sm:text-2xl mt:text-3xl font-bold">{state.temperature}°C</p>
            </div>
        </div>
    );
})