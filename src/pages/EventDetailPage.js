import { useRouteLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";


const EventDetailPage = () => {
    const loaderData = useRouteLoaderData('event-detail-id');
    return <EventItem event={loaderData.event}/>
}

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Item not found'}), {status: 500});
    } else {
        const resData = await response.json();
        return resData;
    }
}