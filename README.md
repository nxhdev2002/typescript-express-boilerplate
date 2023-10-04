# Typescript-Express-Sequelize-boilerplate

Typescript-Express-Sequelize-boilerplate started kit for your project.

- Typescript
- Express.js
- Sequelize.js

## Tech

- Typescript
- node.js - evented I/O for the backend
- Express - fast node.js network app framework
- Sequelize - Best ORM for Node.js
- Husky - Modern native Git Hooks for project convention.

## Installation

Rename .env.example to .env
```sh
NODE_ENV=PRODUCTION
PORT=3000

SQL_TYPE=mysql
SQL_ADDRESS=Your_SQL_ADDRESS
SQL_PORT=Your_SQL_Port
SQL_USERNAME=Your_SQL_Username
SQL_PASSWORD=Your_SQL_Password

JWT_SECRET=YOUR_JWT_SECRET
```

Install the dependencies and devDependencies and start the server.

```sh
cd Typescript-Express-Sequelize-boilerplate
yarn
yarn dev
```

For production environments...

```sh
cd Typescript-Express-Sequelize-boilerplate
yarn
yarn prod
```

## License

MIT

