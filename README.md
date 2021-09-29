# Project 3 Cooper, Jessé, Mathijs, Thea

## Description

Describe your project in one/two lines.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **500:** As an anon/user I can see a 500 page when the developers broke something, so that I know that is not my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Pool** As a user I can add a new pool so that I can share it with friends
-  **List Members** As a user I want to see the list of pools I'm part of so that I can access them
-  **Search Pools** As a user I want to search pools by name and if active 
-  **Set Pool Duration** As a user I want to control how frequent payments will be in the timeframe chosen 
-  **Select Pool Type** As a user I want to see what my friends and I are saving for

## Backlog

User profile:
- see other users profile, and their pool types

Setting up Third Party Pool:
- Morality is as importanrt as avoiding pyramid schemes that sell drugs
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /pools - pools list
- /pools/create - create a pool
- /pools/:id - restaurant detail
- /profile/me - my details and favorite pools
- 404

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Pool List Page (public only)
- Pool Create (user only)
- Pool Detail Page (public only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Pool Card component
  - Input: pool: any
  - Output: favorite(poolId: string, on: boolean)
- Search component
  - Output: change(terms: string)

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Pool Service
  - pool.list()
  - pool.create(data)
  - pool.detail(id)
  - pool.addFavorite(id)
  - pool.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Pool>]
```

Pool model

```
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
```

## API Endpoints/Backend Routes

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /user/me/favorite
  - body:
    - poolId
- DELETE /user/me/favorite/:poolId
  - body: (empty)
- GET /pool
- POST /pool
  - body:
    - name
    - phone
    - address
- GET /pool/:id

  

## Links

### Trello/Kanban

[Trello](https://trello.com/b/ClH5Bn4q/project-3) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com)

[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
