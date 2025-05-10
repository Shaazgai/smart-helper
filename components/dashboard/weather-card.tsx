'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { Sun, Cloud, CloudRain, Thermometer } from 'lucide-react';

export function WeatherCard() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const weatherData = {
    location: 'Улаанбаатар',
    temperature: 24,
    condition: 'cloudy',
    high: 24,
    low: 7,
    forecast: [
      { day: 'Өнөөдөр', temp: 24, condition: 'cloudy' },
      { day: 'Маргааш', temp: 19, condition: 'rain' },
      { day: 'Нөгөөдөр', temp: 2, condition: 'sunny' },
    ]
  };
  
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-400" />;
      case 'rain':
        return <CloudRain className="h-6 w-6 text-blue-400" />;
      default:
        return <Thermometer className="h-6 w-6 text-red-400" />;
    }
  };
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-sky-400 to-blue-500 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>{t('weather')}</span>
          {getWeatherIcon(weatherData.condition)}
        </CardTitle>
        <p className="font-medium">{weatherData.location}</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">{weatherData.temperature}°C</span>
          <div className="text-sm text-muted-foreground mt-1">
            {weatherData.high}°C / {weatherData.low}°C
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-4 border-t">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium">{day.day}</div>
              <div className="flex justify-center my-1">
                {getWeatherIcon(day.condition)}
              </div>
              <div className="text-sm">{day.temp}°C</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}