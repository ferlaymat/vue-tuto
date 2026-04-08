# vue-tuto
This project is a sample to show basic cases in vue.js. It is split into 2 sub-projects.
- vue-project which is the front app.
- vue-back which is a simple back API.

## Requirements
- Java 21
- Maven
- Node V24.13.1

## Getting Started
Firstly, launch the back with following command line:
```bash
cd <project-path>
mvn spring-boot:run
```

then launch the front with:
```bash
cd <project-path>
npm run dev
```

To launch front test, use:
```bash
cd <project-path>
npm test
```

## Projects and URLs

| Service | URL | Use case |
|---|---|---|
| front | http://localhost:5173 |Simple front project which emulate a Kanban without or without http call|
| back | http://localhost:8080 |Simple API which emulate persistence|
