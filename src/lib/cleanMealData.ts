export interface MealDataInterface {
    ingredients: Ingredient[]
    idMeal: string
    strMeal: string
    strDrinkAlternate: string | null
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strTags: string
    strYoutube: string
    strSource: string | null
    strImageSource: string | null
    strCreativeCommonsConfirmed: string | null
    dateModified: string | null
}

export interface Ingredient {
    name: string
    measure: string
}

export default function cleanMealData(data: any) {
    const newData: MealDataInterface = {
        ingredients: [],
        idMeal: '',
        strMeal: '',
        strDrinkAlternate: null,
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
        strTags: '',
        strYoutube: '',
        strSource: null,
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
    }
    for (const key in data) {
        const match = key.match(/\d+/)
        const num = match ? match[0] : ''
        if (key.includes('strIngredient')) {
            if (data[key]) newData['ingredients'].push({ name: data[key], measure: data[`strMeasure${num}`] })
        }
        else {
            if (!key.includes('strMeasure')) (newData as any)[key]  = data[key]
        }
    }
    return newData

}

