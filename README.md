# Workout API

## Local testing

The project uses serverless-offline to simulate Lambda requests locally. To run the project locally run command `serverless offline` or `npm run dev`.

## DynamoDB

Project uses DynamoDB as a database.

https://github.com/aws/aws-sdk-js-v3/tree/main/lib/lib-dynamodb

### Data types for use with DynamoDB

|          JavaScript Type          | DynamoDB AttributeValue |
| :-------------------------------: | ----------------------- |
|              String               | S                       |
|          Number / BigInt          | N                       |
|              Boolean              | BOOL                    |
|               null                | NULL                    |
|               Array               | L                       |
|              Object               | M                       |
|   Set\<Uint8Array, Blob, ...\>    | BS                      |
|       Set\<Number, BigInt\>       | NS                      |
|           Set\<String\>           | SS                      |
| Uint8Array, Buffer, File, Blob... | B                       |

## TODO
- decide tables that are required
- decide structure of tables
- create read queries
- create write mutations