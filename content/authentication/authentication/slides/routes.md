---
type: slide
title: routes
---

Thinking in terms of routes is always helpful.

| Method | Path                        | Purpose                |
| ------ | :-------------------------- | ---------------------- |
| GET    | /register                   | Show registration form |
| GET    | /login                      | Show login form        |
| POST   | /users                      | Create a user          |
| POST   | /sessions                   | Create a session       |
| POST   | /logout                     | Delete current session |
| GET    | /profile                    | Show current user      |
| GET    | /users                      | Show all users         |
| GET    | /users/:userId              | Show one user          |
| GET    | /sessions                   | Show all sessions      |
| POST   | /profile                    | Update current user    |
| POST   | /users/:userId              | Update a user          |
| POST   | /users/:userId/delete       | Delete a user          |
| POST   | /sessions/:sessionId/delete | Log someone out        |

Authentication requires five basic routes.
The others are optional.