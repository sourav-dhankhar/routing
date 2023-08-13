import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const loaderData = useLoaderData();
    return <EventsList events={loaderData} />
}

export default EventsPage;


export async function loader () {
    const response = await fetch('http://localhost:8080/events');
      
    console.log("response ", response);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'events not found'}), {status: 500});
    } else {
      const resData = await response.json();
      return resData.events;
    }
    return [];
}