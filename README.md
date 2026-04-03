# to-do--list__backend

## Structure
```
to-do--list__backend/
│
├── src/
│ ├── controllers/
│ │ └── todoController.js # бизнес-логика (CRUD для задач)
│ │
│ ├── db/
│ │ └── db.js # подключение к базе данных
│ │
│ └── routes/
│ └── todosRouter.js # маршруты API
│
├── Dockerfile # сборка backend контейнера
├── docker-compose.yml # оркестрация сервисов (backend + db)
│
├── server.js # точка входа приложения
```


## How to start

### create .env file in project root folder

```
NODE_ENV=(design / production)
DATABASE_URL=postgres://USER:PASSWORD@db:PORT/to-do--list
POSTGRES_DB=to-do--list
POSTGRES_USER=
POSTGRES_PASSWORD=
```
