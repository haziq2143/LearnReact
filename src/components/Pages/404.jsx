import { useRouteError } from "react-router-dom";

const ErrorPage =  () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-4xl">Oops...</h1>
            <p className="text-lg text-gray-400">Sorry, an unexpected error has accured</p>
            <p className="font-semibold text-5xl text-red-500">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage