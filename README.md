# Mongo Client 3.6.3 bug

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

## Fix

In `package.json`, change version of `mongodb` to `3.6.2`, run `npm install`.
Everything works as expected then.
