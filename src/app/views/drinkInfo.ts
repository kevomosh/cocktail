import { IngMeasurementInfo } from './ngMeasurementInfo';

export interface DrinkInfo {
  id?: number;
  picUrl?: string;
  name?: string;
  ingredientMeasurement?: IngMeasurementInfo[];
  ingredient?: string;
  category?: string;
  type?: string;
  glass?: string;
  instructions?: string;
}
