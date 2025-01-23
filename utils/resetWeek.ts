import { Days } from '@/constants/Goals';

export const resetWeek = () =>
  Days.map(() => ({
    calories: 0,
    exceeded: false,
    liters: 0,
    succeeded: false,
    walking: false,
  }));
