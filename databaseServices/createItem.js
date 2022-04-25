const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

async function createItem() {
  const client = new DynamoDBClient({ region: "eu-west-2" });
  const command = new PutItemCommand({
    TableName: "workout",
    Item: {
      1: {
        S: "required value",
      },
      test: {
        S: "test1",
      },
    },
  });
  try {
    const results = await client.send(command);
    return results;
  } catch (err) {
    console.error(err);
    return null;
  }
}

(async function () {
  console.log("createItem(): ", createItem());
})();

// exports.createItem = createItem;
