# Express Examples

create a backend that is always running listening for requests

Requests
*** verb (GET, POST, PUT, DELETE)
- URL or domain
*** route - what comes after the domain
- query (sometimes) - the stuff after the ?
- body (sometimes)
- header (sometimes for extra options or parameters) we won't do this much

Response 
*** body
*** response/status code
- header (usually don't care about this)

when we're working on our computers, we are the server

http://localhost:5001/ plus a route

thruty and falsy

false values
    empty strings '' ""
    0
    null 
    undefined
    NaN
    false

everything else is true

***************************************
CLASS 3

Review
path (route) params:
you can have only one path param
i.e.
GET/todos/:id and
GET/todos/:completed
are the same - the word is just a placeholder

query params:
you can have more than one, but we'll just use one in our examples
for now
GET/todos?completed=false
GET/todos?completed=true

one route that either has a query value passed or not 
use conditional (if statement) to find the right option
