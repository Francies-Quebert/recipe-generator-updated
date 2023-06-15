import { create } from 'zustand'
import createSelectors from '../lib/createSelectors';
import { MealDataInterface } from '../lib/cleanMealData';


export interface ingredientInterface {
    "idIngredient": string,
    "strIngredient": string,
    "strDescription": string,
    "strType": null | string,
    'src'?: string | null
}

export interface MealsListData {
    "strMeal": string,
    "strMealThumb": string,
    "idMeal": string
}

export interface IngredientMeals {
    [key: string]: MealsListData[]
}


export type fetchIngredientsTypes = {
    meals: ingredientInterface[];
}

export type fetchMealsTypes = {
    meals: MealsListData[];
}

interface ReceipeStoreInterface {
    ingredients: ingredientInterface[],
    setIngredient: (ingredients: any) => void,

    ingredientMeals: IngredientMeals,
    setIngredientMeals: (ingredientMeals: IngredientMeals) => void,

    meals: MealDataInterface[],
    setMeals: (meals: MealDataInterface[]) => void,

    filterReceipe: string | null;
    setFilterReceipe: (filterReceipe: string | null) => void;

    filterBy: string;

}


const useReceipeBase = create<ReceipeStoreInterface>()((set) => ({
    ingredients: [],
    setIngredient: (ingredients: any) => set(ingredients),

    ingredientMeals: {},
    setIngredientMeals: (ingredientMeals: any) => set({ ingredientMeals }),

    meals: [],
    setMeals: (meals: any) => set({ meals }),

    filterReceipe: null,
    setFilterReceipe: (filterReceipe: string | null) => set({ filterReceipe }),

    filterBy: 'i',
    setFilterBy: (filterBy: string) => set({ filterBy }),

}))

export const useReceipe = createSelectors(useReceipeBase)

