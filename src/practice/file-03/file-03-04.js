// sort the tournament items in an array based on the “order” property.
// And propose how to exclude the ones with id higher than 60000
// Here is the array

let data = {

    "tournaments": [
        {
            "event_count": 1,
            "events": {
                "19153938": 19153938
            },
            "id": 55970,
            "name": "Philippines - Pvl, Open Conference",
            "order": 5,
            "sport_id": 23
        },
        {
            "event_count": 1,
            "events": {
                "17686592": 17686592
            },
            "id": 79819,
            "name": "International - Fiba World Cup, Group H",
            "order": 4,
            "sport_id": 2
        },
        {
            "event_count": 2,
            "events": {
                "19348464": 19348464,
                "19348466": 19348466
            },
            "id": 85316,
            "name": "Challenger - Jinan, China",
            "order": 3,
            "sport_id": 5
        },
        {
            "event_count": 2,
            "events": {
                "19348464": 19348464,
                "19348466": 19348466
            },
            "id": 45786,
            "name": "Challenger - Fiba World Cup, Group J",
            "order": 1,
            "sport_id": 5
        }
    ]

}

let sortedData = data.tournaments.sort((a, b) => a.order > b.order ? 1 : -1)

console.log(sortedData)

let highID = data.tournaments.filter(item => item.id < 60000)

console.log(highID)