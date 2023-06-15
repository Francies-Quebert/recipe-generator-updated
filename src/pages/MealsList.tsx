import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMealsTypes, useReceipe } from '../store/useReceipe';
import { fetchingredientFiltersData } from '../lib/fetchIngredientData';
import ListCard from '../components/ListCard';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

function MealsList() {
    let { name = '' } = useParams();
    const setIngredientMeals = useReceipe.use.setIngredientMeals()
    const ingredientMeals = useReceipe.use.ingredientMeals()
    const filterBy = useReceipe.use.filterBy()
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        getMealData()
    }, [name])

    async function getMealData() {
        try {
            if (ingredientMeals[name]) return;
            if (!name) navigate('/')
            const { meals } :fetchMealsTypes= await fetchingredientFiltersData({ value: { filterBy, data: name } });
            setIngredientMeals({ ...ingredientMeals, [name]: meals || [] })
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }

    }

    if (loading) return <Loading />
    return (
        ingredientMeals[name]?.length > 0 ? <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto  md:gap-5 py-24 px-8 ms:px-0">
            {ingredientMeals[name].map(data =>
                <ListCard
                    key={data.idMeal}
                    name={data.strMeal}
                    image={`${data.strMealThumb}/preview`}
                    to={`/receipe-page/${data.idMeal}`}
                    btnname={`Preview Recipe`}
                    titleLineClamp='2'
                    minHeight='min-h-[360px]'
                />
            )}
        </div> : <NotFound name={name} />
    )
}

export default MealsList