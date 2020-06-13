const db = require('../database/db-config');

module.exports = {
    addEvent
}

function addEvent(event){
    const {text, type, event_ts: event_timestamp, user: slack_user, team, channel, ts: timestamp} = event;
    const newEvent = {text, type, event_timestamp, slack_user, team, channel, timestamp};
    console.log('event', newEvent)
    return db('events')
        .insert(newEvent)
        
}