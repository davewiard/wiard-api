# wiard-api

This project is for learning purposes. I am writing it so I can replace the wiki I have been using for a long time to track bookmarks and frequently used websites (both internal and external) and tracking certain types of data.

And API key will be used
API versioning will be implemented
Include the request timestamp in every response


# Notes about the API

/api/1.0

## Links

### landing page links
[GET] .../links?category=links

### movies
[GET] .../links?category=movie

### TV
[GET] .../links?category=tv

### Used for editing an existing link
[PUT] .../links/:id/:category

## Investments

### Overview
[GET] .../overview

### All Transcations
[GET] .../transactions

### Used with editing a single transaction
[GET] .../transaction/:id
[PUT] .../transaction/:id

### Used for adding a new transaction
[POST] .../transaction/:id
