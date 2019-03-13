# GraphQL Server with AdonisJS + PostgreSQL

This Project Implement Graphql Server with AdonisJS + PostgreSQL Database

## Setup

1. Clone the repo and then run `npm install` on your terminal.
2. Create `.env` file on root of this project. Fill the file like this :

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=etHCEsGzpZEF1auKYgmSi8nzV1C587Z7
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=POSTGRES_USER
DB_PASSWORD=POSTGRES_PASSWORD
DB_DATABASE=POSTGRES_DATABASE
HASH_DRIVER=bcrypt
```

3. Make sure to load Postgre database sample. Please following instruction from [here](http://www.postgresqltutorial.com/load-postgresql-sample-database/)
4. Run `adonis serve --dev`. Make sure you have installed Adonis CLI before
