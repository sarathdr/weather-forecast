import { Forecast } from './forecast.model';
export interface Weather {
  id?: number;
  cityName?: string;
  forecasts?: Forecast[];
}
