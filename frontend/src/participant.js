class Participant {

    constructor(participant) {
        this.id = participant.id
        this.full_name = participant.full_name
        this.email = participant.email
        this.phone_number = participant.phone_number
        this.event = participant.event_id

        Event.all.push(this)
    }


}

Event.all = []