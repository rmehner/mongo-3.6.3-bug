const { MongoClient, connect } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017", {
  useUnifiedTopology: true,
});

(async () => {
  const connection = await client.connect();
  console.log("If you see this, the connection was successful 🎉");
  await connection.close()
  process.exit(0);
})();
