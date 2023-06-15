import { useEffect, useState } from "react"
import { fetchIngredientsTypes, ingredientInterface, useReceipe } from "../store/useReceipe";
import { fetchIngredientData } from "../lib/fetchIngredientData";
import Banner from "../components/Banner";
import ListCard from "../components/ListCard";
import Loading from "../components/Loading";
import RecentlyViewedRecipeList from "../components/RecentlyViewedRecipeList";
import Button from "../components/Button";
import { useImageStore } from "../store/useImage";


function IngredientList() {
    const setIngredient = useReceipe.use.setIngredient()
    const ingredients = useReceipe.use.ingredients()
    const filterBy = useReceipe.use.filterBy()
    const { length } = useReceipe.use.meals()


    const [loading, setLoading] = useState<boolean>(false);
    const [displayAmt, setDisplatAmt] = useState<number>(12)

    useEffect(() => {
        setLoading(true)
        getReceipeData()
        return () => setDisplatAmt(12)
    }, [])


    async function getReceipeData() {
        try {
            if (ingredients.length > 0) return;
            const { meals }: fetchIngredientsTypes = await fetchIngredientData({ value: { filterBy } });
            setIngredient({ ingredients: meals })
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    function onShowMoreClick() {
        setDisplatAmt(displayAmt + 12)
    }


    if (loading) return <Loading />;

    return (
        <div>
            <Banner />
            <div className={`${length ? "grid md:grid-cols-6 py-24 px-8 max-w-7xl " : 'max-w-6xl '} mx-auto py-24 px-8`}>
                <div className="md:col-span-4">
                    <section
                        id="ingredient-list"
                        className={` grid grid-flow-row grid-cols-1 ${length > 0 ? 'md:grid-cols-3' : 'md:grid-cols-4'} max-w-6xl mx-auto md:gap-5`}>
                        {ingredients.slice(0, displayAmt).map(data =>
                            <ListCard
                                key={data.idIngredient}
                                to={`/meals/${data.strIngredient.replaceAll(' ', '_')}`}
                                name={data.strIngredient}
                                image={`https://www.themealdb.com/images/ingredients/${data.strIngredient}-Small.png`}
                                description={data.strDescription}
                                btnname={"Find Meals"} />)}
                    </section>
                    <Button btnname={'Show More'} onClick={onShowMoreClick} />
                </div>
                {length > 0 && <div className={`w-full px-8 ${length > 0 ? 'md:col-span-2' : ''}`}>
                    <RecentlyViewedRecipeList />
                </div>}
            </div>
        </div >
    )
}

export default IngredientList