const eventEndPoint = "http://127.0.0.1:3000/events"
const participantEndPoint = "http://127.0.0.1:3000/events"

// Load forms and other content to app html page
document.addEventListener('DOMContentLoad', () => {
    const createEventForm = document.querySelector('#event-form');
    createEventForm.addEventListener("submit", event => createEventFormHandler(event));

    getEvent();
})

// Request, render, display events from backend
async function getEvent() {
    fetch(eventEndPoint)
    .then(response => response.json())
    .then(events => {
        events.data.forEach(event => {
            const newEvent = new Event(event)
            newEvent.renderEvent();
        })
    })
}