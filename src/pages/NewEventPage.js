import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";

const NewEventPage = () => {
    return <EventForm></EventForm>
}

export default NewEventPage;

export async function action({request, params}) {
    const data = await request.formData();
    
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    const res = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })

    if (!res.ok) {
        throw new Response(JSON.stringify({message: "Couldn't save data"}), {status: 500});
    }

    return redirect('/events');
}