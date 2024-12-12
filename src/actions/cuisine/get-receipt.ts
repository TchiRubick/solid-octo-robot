'use server';

import { getCuisine, UserInfos } from "@/packages/openai";

const USERINFOS: UserInfos = {
  gender: 'male',
  age: 30,
  height: 180,
  weight: 80,
  lastMealEaten: 'Beans and rice. Mostly rice the last days',
  physicalActivityLevel: 'light exercise',
  dietaryPreferences: 'no preference',
  dietaryRestrictions: 'no restrictions',
  goals: 'muscle gain'
}

export const getReceipt = async () => {
  const receipt = await getCuisine(USERINFOS);

  return receipt as string;
}
