### FreeCodeCamp ExerciseTracker Microservice

- To Check this,

```sh
$ cd fcc-exercise-tracker-ms
$ touch keys/mongo_conn.js

# Update keys/mongo_conn.js
var conn_str = <YOUR_MONGO_CONNECTION_URL>

module.exports = conn_str
```

```sh
$ cd fcc-exercise-tracker-ms
$ yarn install
$ yarn start
```