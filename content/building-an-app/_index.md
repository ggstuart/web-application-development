---
title: Building an application
type: unit
weight: 50
---

In this series of exercises we will build a simple application from scratch.
<!--more-->

Our application will be a simple tool for creating and managing *"todo lists"*.
The overall aim of the application is to enable users to manage lists of items, including their 'done' status.

## User stories

There is only one kind of user, so we have the following simple user stories. 

As a user, I need to...

- **view** all the available *todo-lists*
- **create** a new *todo-list*
- **update** a *todo-list* name
- **delete** a todo-list from the system
- **view** an individual *todo-list* with all its *todo-items*
- **create** a new *todo-item* in order to keep track of something
- **edit** the "done" state of a *todo-item* in order to keep track of something
- **delete** a *todo-item* from a selected *todo-list* in order to remove it

Essentially, we need to perform the standard CRUD (Create, Read, Update, Delete) operations on two database tables.

> We are keeping things simple so we can build this application fairly quickly. 
> Typically there are many more things to keep track of than this.

## Routes

Users can only interact with web applications by making HTTP requests to the server for different resources.
HTTP requests are made by either following links (to make `GET` requests) or by submitting forms (to make `POST` requests).

In our simple application, each action a user can take will have a pathway through the code. 

The above user stories can be broken down into the following **routes**.

- `GET` **index.php** for listing the available *todo-lists*
- `POST` **create-todo-list.php** for creating a new list
- `POST` **update-todo-list.php** for renaming a list
- `POST` **delete-todo-list.php** for deleting a list (and all its items)
- `GET` **todo-list.php** for viewing a single list with all its items
- `POST` **create-todo-item.php** for adding a new item to a given list
- `POST` **update-todo-item.php** for editing an existing item (e.g. setting done state)
- `POST` **delete-todo-item.php** for deleting an item from a list

Of these, only **index.php** and **todo-list.php** will appear to users in the url bar of their browsers. All the other routes will perform an action on the server and then redirect the user to either **index.php** or **todo.php**.

**todo-list.php** will be used with a query parameter `id` (i.e. **todo-list.php?id=1**, **todo-list.php?id=2** etc.) so it can provide a unique page for each *todo-list* in the system.
