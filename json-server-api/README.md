# Getting started

Install JSON Server

```
npm install --save json-server
```

Create a db.json file with some data

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```
json-server --watch db.json
```
or

```javascript
npm run start // "start": "json-server --watch db.json --port 3000 --host 0.0.0.0"
```

Now if you go to http://localhost:3000/posts/1, you'll get

```
{ "id": 1, "title": "json-server", "author": "typicode" }
```

# Use extensions REST Client

```http

GET http://localhost:3000/cursos  HTTP/1.1

### 

GET http://localhost:3000/cursos/1  HTTP/1.1

### 

POST http://localhost:3000/cursos HTTP/1.1
content-type: application/json

{
    "nome": "Java OO"
}

###

PUT http://localhost:3000/cursos/2 HTTP/1.1
content-type: application/json

{
    "nome": "Java"
}

###

DELETE http://localhost:3000/cursos/2 HTTP/1.1
content-type: application/json

```