class Event {

    constructor(event) {
        this.id = event.id
        this.name = event.attributes.name
        this.description = event.attributes.description
        this.participants = event.attributes.participants
        Event.all.push(this)
    }

    renderEvent() {
        const eventList = document.querySelector('#event-list')
        const eventListMarkup = `${this.name}`
        let eventListOption = document.createElement('option')
        eventListOption.innerHTML = eventListMarkup
        eventListOption.setAttribute('id', this.id)
        eventListOption.setAttribute('value', this.id)
        eventList.appendChild(eventListOption)
    }
}

Event.all = []