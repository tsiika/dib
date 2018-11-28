# README for backend

To see more detailed information of the project, see the README on the root.

## Installation

Pretty straigthforward installation

```
npm install
npm run watch
```

## API endpoints

API for user handling:

```
GET     /api/auth/profile       Get user profile
POST    /api/auth/register      Register new user
POST    /api/auth/login         User login
```

API for link handling:

```
GET     /api/links/             Get all links
GET     /api/links/:id          Get one link
POST    /api/links/             Post new link
PUT     /api/links/:id          Edit link
DELETE  /api/links/:id          Delete link
```
