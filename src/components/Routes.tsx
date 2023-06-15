import IngredientList from '../pages/IngredientList';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import ReceipePage from '../pages/ReceipePage';
import Layout from './Layout';
import MealsList from '../pages/MealsList';
import React from 'react';
import Loading from './Loading';

function RoutesComp() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: "/",
                    lazy: async () => ({ Component: IngredientList }),
                    index: true,
                }, {
                    path: "/meals/:name",
                    lazy: async () => ({ Component: MealsList }),
                }, {
                    path: "/meals",
                    lazy: async () => ({ Component: IngredientList }),
                }, {
                    path: "/receipe-page/:receipeId",
                    lazy: async () => ({ Component: ReceipePage }),
                },
                {
                    path: "/receipe-page",
                    lazy: async () => ({ Component: IngredientList }),
                },
            ],
            errorElement: <ErrorBoundary />
        },
    ], { basename: '/' });

    return (
        <>
            <React.Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
            </React.Suspense>
        </>
    )
}

export default RoutesComp