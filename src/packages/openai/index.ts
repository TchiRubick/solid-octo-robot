import { env } from "@/env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.OPENAI_SECRET_KEY
});


export const getCompetion = async () => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "Write a haiku about recursion in programming.",
      },
    ],
  });

  return completion.choices[0].message;
};

export type UserInfos = {
  gender: 'male' | 'female',
  age: number,
  height: number,
  weight: number,
  lastMealEaten: string,
  physicalActivityLevel: 'sedentary' | 'light exercise' | 'moderate exercise' | 'intense exercise',
  dietaryPreferences: 'vegetarian' | 'vegan' | 'pescatarian' | 'no preference',
  dietaryRestrictions: 'lactose intolerant' | 'gluten-free' | 'allergic to nuts' | 'no restrictions',
  goals: 'weight loss' | 'weight maintenance' | 'muscle gain' | 'general health'
}

export const getCuisine = async (userInfo: UserInfos) => {
  const prompt = `
            You are a professional nutritionist. Your task is to create a personalized 3-day meal plan tailored to the following user's profile. Include specific meal details for breakfast, lunch, and dinner for each day. Consider nutritional balance, calorie requirements, and their preferences.

            User Profile in JSON:
            ${JSON.stringify(userInfo)}

            Important Notes:
            1. Provide the meal plan in **JSON format** with the structure:
              [
                  {
                      "day": "Day 1",
                      "breakfast": "Description of breakfast",
                      "lunch": "Description of lunch",
                      "dinner": "Description of dinner"
                  },
                  ...
              ]
            2. Ensure meals are balanced with appropriate macronutrients (carbohydrates, proteins, fats) and micronutrients (vitamins, minerals).
            3. The meals should be realistic, easy to prepare, and aligned with the user's preferences and restrictions.
            4. Provide portion sizes or quantities where relevant.

            Example:
            [
                {
                    "day": "Day 1",
                    "breakfast": "Oatmeal with almond milk, topped with sliced banana and honey.",
                    "lunch": "Grilled chicken breast (150g) with quinoa (1 cup) and steamed broccoli (1 cup).",
                    "dinner": "Baked salmon (200g) with roasted sweet potatoes (1 medium) and asparagus (1 cup)."
                },
                {
                    "day": "Day 2",
                    "breakfast": "Scrambled eggs (2) with whole-grain toast (1 slice) and a side of spinach (1/2 cup).",
                    "lunch": "Lentil soup (1 bowl) with a side of mixed greens (1 cup) and whole-grain bread (1 slice).",
                    "dinner": "Stir-fried tofu (150g) with brown rice (1 cup) and mixed vegetables (1 cup)."
                },
                ...
            ]

        `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const mealPlan = response.choices[0].message.content;

  if (!mealPlan) {
    throw new Error("No meal plan generated");
  }

  return JSON.parse(mealPlan);
}
