import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

const Error = () => {
    const error = useRouteError();
    
    let title = "Error Occured";
    let message = "Something went wrong";

    if (error.status == 500) {
        message = JSON.parse(error.data).message;
    }

    return <PageContent title = {title}>{message}</PageContent>
}

export default Error;