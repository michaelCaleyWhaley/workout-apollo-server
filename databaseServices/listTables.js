const {
  DynamoDBClient,
  ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");

async function getTableList() {
  const client = new DynamoDBClient({ region: "eu-west-2" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    return results;
  } catch (err) {
    console.error(err);
    return null;
  }
}

exports.getTableList = getTableList;
