import { IMC_LEVELS } from '@/contexts/user/types';

export const getManLoseWeight = ({ weight, height, age }: Record<string, number>) => {
  const step1 = 10 * weight;
  const step2 = 6.25 * height;
  const step3 = 5 * age;

  return step1 + step2 - step3 + 5;
};

export const getWomanLoseWeight = ({ weight, height, age }: Record<string, number>) => {
  const step1 = 10 * weight;
  const step2 = step1 + 6.25;
  const step3 = step2 * height;
  const step4 = step3 - 5;
  const step5 = step4 * age;

  return step5 - 161;
};

export const getMaintainWeight = ({ weight, height, age }: Record<string, number>) => {
  const step1 = 13.752 * weight;
  const step2 = 5.003 * height;
  const step3 = 6.775 * age;

  return 66.473 + step1 + step2 - step3;
};

export const getWalkingGoal = ({ weight }: Record<string, number>) => {
  const step1 = weight * 2.2;

  return 0.029 * step1 * 30;
};

export const getLitersGoal = ({ weight }: Record<string, number>) => weight * 0.03;

export const getIMCLevel = ({ imc }: Record<string, number>): IMC_LEVELS => {
  if (imc <= 18.49) {
    return IMC_LEVELS.LOW_WEIGHT;
  }
  if (imc > 18.49 && imc <= 24.9) {
    return IMC_LEVELS.NORMAL_WEIGHT;
  }
  if (imc > 24.9 && imc <= 29.9) {
    return IMC_LEVELS.OVERWEIGHT;
  }
  if (imc > 29.9 && imc <= 34.9) {
    return IMC_LEVELS.LOW_OBESITY;
  }
  if (imc > 34.9 && imc <= 39.9) {
    return IMC_LEVELS.MEDIUM_OBESITY;
  }
  return IMC_LEVELS.MORBID_OBESITY;
};

export const translateIMC = (imcLevel: IMC_LEVELS): string => {
  if (imcLevel === IMC_LEVELS.LOW_WEIGHT) {
    return 'Bajo Peso';
  }
  if (imcLevel === IMC_LEVELS.NORMAL_WEIGHT) {
    return 'Peso Normal';
  }
  if (imcLevel === IMC_LEVELS.OVERWEIGHT) {
    return 'Sobrepeso';
  }
  if (imcLevel === IMC_LEVELS.LOW_OBESITY) {
    return 'Obesidad Leve';
  }
  if (imcLevel === IMC_LEVELS.MEDIUM_OBESITY) {
    return 'Obesidad moderada';
  }
  return 'Obesidad morbida';
};
