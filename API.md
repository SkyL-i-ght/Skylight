# API Endpoints

## Flights endpoint

Make a `GET` request to `/api/flights` to get flight information. A sample request body would look like this:  
```JSON
{
    "lat": 35.78,
    "lng": -78.12
}
```
A sample response would look like this:
```JSON
[
    {
        "id": "a65408",
        "callsign": "AAL1333",
        "lastContact": 1647452171,
        "lng": -77.9382,
        "lat": 35.0045,
        "direction": 40.29,
        "altitude": 10911.84,
        "speed": 279.22
    },
    {
        "id": "a6eadd",
        "callsign": "N545DU",
        "lastContact": 1647452171,
        "lng": -78.8267,
        "lat": 35.707,
        "direction": 151.74,
        "altitude": 472.44,
        "speed": 54.32
    },
    ...
]
```

## Flight info endpoint

Make a `GET` request to `/api/flightinfo/:callsign`.

The callsign is expected to be in ICAO format. This sample response below is for a `GET` request to `/api/flightinfo/SWA2520`.

A sample response would contain a single object like this:

```JSON
{
  "flight_date": "2022-03-16",
  "flight_status": "active",
  "departure": {
    "airport": "San Diego International Airport",
    "timezone": "America/Los_Angeles",
    "iata": "SAN",
    "icao": "KSAN",
    "terminal": "1",
    "gate": "7",
    "delay": 14,
    "scheduled": "2022-03-16T10:10:00+00:00",
    "estimated": "2022-03-16T10:10:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
  },
  "arrival": {
    "airport": "Kona International Airport",
    "timezone": "Pacific/Honolulu",
    "iata": "KOA",
    "icao": "PHKO",
    "terminal": null,
    "gate": "6",
    "baggage": null,
    "delay": null,
    "scheduled": "2022-03-16T13:35:00+00:00",
    "estimated": "2022-03-16T13:35:00+00:00",
    "actual": null,
    "estimated_runway": null,
    "actual_runway": null
  },
  "airline": {
    "name": "Southwest Airlines",
    "iata": "WN",
    "icao": "SWA"
  },
  "flight": {
    "number": "2520",
    "iata": "WN2520",
    "icao": "SWA2520",
    "codeshared": null
  },
  "aircraft": null,
  "live": null
}
```

## Add to destinations endpoint
Make a `POST` request to `/api/favorites/add`.

The request body will look like this:

```JSON
{
  "airport": "Kona International Airport",
  "city": "Honolulu",
  "country": "USA",
  "description": "Beautiful city with magnificent views of the Pacific Ocean and delightful beaches."
}
```

If successful, the request will return the id for the new favorite. This id will be needed to delete it later.

A sample response would look like:

```JSON
{
  "id": 5
}
```

## Remove from destinations endpoint
Make a `DELETE` request to `/api/favorites/delete`.

The favorite id will need to be specified in the request body as such:
```JSON
{
  "id": 5
}
```

A sample response would simply contain a successful status code.

## User login endpoint
Make a `POST` request to `/api/user/login`.

A sample request body would look like:

```JSON
{
  "username": "digitalnomad1",
  "password": "myverysafepassword"
}
```

If successful, a sample response would simply return a successful status code.

## User signup endpoint
Make a `POST` request to `/api/user/signup`.

A sample request would look like:

```JSON
{
  "username": "digitalnomad1",
  "password": "myverysafepassword"
}
```