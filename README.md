# to-do--list__backend

## Structure
```
to-do--list__backend/
│
├── src/
│ ├── controllers/
│ │ └── todoController.js # CRUD for tasks
│ │
│ ├── db/
│ │ └── db.js # database connection
│ │
│ └── routes/
│ └── todosRouter.js # API routes
│
├── Dockerfile # building a backend container
├── docker-compose.yml # backend, db conainers up
│
├── server.js # entry point app
```


## Routes


| container | port |
| --------- | ---- |
| db        | 5432 |
| backend   | 5000 |


| Method | URL                   | Payload | Response | Description         |
| ------ | --------------------- | ------- | -------- | ------------------- |
| GET    | `/api/tasks`          |         | Task[]   | Get a list of tasks |
| GET    | `/api/tasks/{taskId}` |         | Task     | Get a task by ID    |
| POST   | `/api/tasks`          | Task    | Task     | Create a new task   |
| PUT    | `/api/tasks/{taskId}` | Task    | Task     | Update a task       |
| Patch  | `/api/tasks/{taskId}` | Task    | Task     | Update a task       |
| Delete | `/api/tasks/{taskId}` |         | Task     | Delete a task       |

## How to start

### Create .env file in project root folder

```
NODE_ENV=(design / production) (design - sqlite3 / production - postgreSQL)
DATABASE_URL=postgres://USER:PASSWORD@db:PORT/to-do--list
POSTGRES_DB=to-do--list
POSTGRES_USER=
POSTGRES_PASSWORD=
```


### Build and start docker-compose
```
# in root folder
docker compose up -d --build

# check containers
docker compose ps
```
