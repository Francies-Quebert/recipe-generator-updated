import { MealsListData, ingredientInterface } from "../store/useReceipe";
import { getImageData } from "./getImageData";

type fetchIngredientDataParam = {
    value: { filterBy: string, data?: string };
}


const defaultUrl = 'https://www.themealdb.com/api/json/v1/1'

async function fetchIngredientData({ value }: fetchIngredientDataParam) {

    let url: RequestInfo | URL = `${defaultUrl}/list.php?${value.filterBy}=list`

    let { meals }: { meals: ingredientInterface[] } = await fetch(url).then(res => res.json());
    let imgUrl: { name: string, url: string }[] = []

    // for (let index = 0; index < meals.length; index++) {
    //     imgUrl.push({ name: meals[index].idIngredient, url: `https://www.themealdb.com/images/ingredients/${meals[index].strIngredient}-Small.png` })
    // }

    return { meals }
}

async function fetchingredientFiltersData({ value }: fetchIngredientDataParam) {

    let url: RequestInfo | URL = `${defaultUrl}/filter.php?i=${value.data}`


    let { meals }: { meals: MealsListData[] } = await fetch(url).then(res => res.json());
    // let imgUrl: { name: string, url: string }[] = []

    // for (const key in meals) {
    //     imgUrl.push({ name: meals[key].idMeal, url: `${meals[key].strMealThumb}/preview` })
    // }

    return { meals }
}

export { fetchIngredientData, fetchingredientFiltersData }