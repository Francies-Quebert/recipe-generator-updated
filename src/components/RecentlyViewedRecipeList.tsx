import { Link } from "react-router-dom"
import { useReceipe } from "../store/useReceipe"

function RecentlyViewedRecipeList() {
    const meals = useReceipe.use.meals()
    return (
        <div className="border border-solid border-black/30 rounded-md p-2 mt-4 md:mt-0">
            <div className="font-bold text-xl">Recently Viewed</div>
            <div className="">
                {meals?.length && meals.reverse().slice(0, 10).map(data =>
                    <Link
                        to={`receipe-page/${data.idMeal}`}
                        key={data.idMeal}
                        className="border border-solid border-black/10 flex rounded-md m-2 gap-2  shadow-lg cursor-pointer">
                        <div className="h-16 w-16">
                            <img src={`${data.strMealThumb}/preview`} alt={data.strMeal} className="rounded-md h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-black/70 line-clamp-2 px-2 text-sm">
                                {data.strMeal}
                            </div>

                        </div>

                    </Link>
                )
                }

            </div>
        </div>
    )
}

export default RecentlyViewedRecipeList