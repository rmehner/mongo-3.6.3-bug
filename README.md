# Mongo Client 3.6.3 bug

🐛 https://jira.mongodb.org/browse/NODE-3052

## Requirements

* Node 12+
* npm
* Docker

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `docker-compose up`
4. `node index.js` (or `npm test`)

## Expected behaviour

No error and the message: If you see this, the connection was successful 🎉

## Actual behaviour

No output for a while, then:

```
UnhandledPromiseRejectionWarning: MongoServerSelectionError: Server selection timed out after 30000 ms
```

## Fixes

### Downgrade to 3.6.2

In `package.json`, change version of `mongodb` to `3.6.2`, run `npm install`.
Everything works as expected then.

### Don't use useUnifiedTopology

Change the connection call to:

```js
const client = new MongoClient("mongodb://localhost:27017");
```

This also works as expected then.
