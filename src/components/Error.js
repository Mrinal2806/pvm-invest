import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log('error', err);
    return (
        <div>
            <h1>Oops</h1>
            <h2>Something went wrong</h2>
            <h3>
                Status: {err.status}
                Text: {err.statusText}
            </h3>
        </div>
        
    )
}

export default Error;