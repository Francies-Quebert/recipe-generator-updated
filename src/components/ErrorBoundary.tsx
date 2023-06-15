import {
    useRouteError,
    isRouteErrorResponse,
} from "react-router-dom";


export default function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error) && error.status === 401) {
        return (
            <div>
                <h1>Error {error.status}</h1>
                <p>
                    Go ahead and email  <a href='mailto:francies.quebert@gmail.com'>francies.quebert@gmail.com</a> if you
                    feel like this is a mistake.
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Error</h1>
                <h2>Error 404 not found</h2>
                <p>
                    Go ahead and email  <a href='mailto:francies.quebert@gmail.com'>francies.quebert@gmail.com</a> if you
                    feel like this is a mistake.
                </p>
            </div>
        );
    }

    // throw error;
}