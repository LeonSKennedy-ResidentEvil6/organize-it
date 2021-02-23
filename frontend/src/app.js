const eventEndPoint = "http://127.0.0.1:3000/events"
const participantEndPoint = "http://127.0.0.1:3000/events"

// Load forms and other content to app html page
document.addEventListener('DOMContentLoaded', () => {
    const createEventForm = document.querySelector('#event-form');
    createEventForm.addEventListener("submit", e => createEventFormHandler(e));

    const createParticipantForm = document.querySelector('#participant-form')
    createParticipantForm.addEventListener("submit", e => createParticipantFormHandler(e));

    getEvents();
})

// Request, render, display events from backend
function getEvents() {
    fetch(eventEndPoint)
    .then(response => response.json())
    .then(events => {
        events.data.forEach(event => {
            const newEvent = new Event(event)
            newEvent.renderEvent();
        })
    })
}


function createEventFormHandler(e) {
    e.preventDefault()
    const eventNameInput = document.querySelector('#input-event-name').value
    const eventDescriptionInput = document.querySelector('input-event-description').value
    postEvent(eventNameInput, eventDescriptionInput)
}

function createParticipantFormHandler(e) {
    e.preventDefault()
    const fullNameInput = document.querySelector('#full-name').value
    const emailInput = document.querySelector('#email').value
    const phoneNumberInput = document.querySelector('#phone-number').value
    const eventId = document.querySelector('#event-list').value
    postParticipant(fullNameInput, emailInput, phoneNumberInput, eventId)
}