// Load environment file
import * as dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

const connectionStringURI = process.env.MONGO_CONNECTION_STRING as string;
const client = new MongoClient(connectionStringURI);

// Database Name
const dbName = process.env.DATABASE_NAME as string;

// Specifying a Schema is always optional, but it enables type hinting on.

async function connectDB() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to MongoDB server");
  const db = client.db(dbName);
  const thumbnailsCollection = db.collection("thumbnails");

  /**
   *  ----- CODE EXAMPLES -----
   */

  // 1. Create data (insertOne | insertMany)
  const insertResult = await thumbnailsCollection.insertOne({
    imageURL: "https://picsum.photos/200/300",
    videoURL: "https://picsum.photos/200/300",
    altText: "This is example No. 1",
  });
  console.log("Inserted document => ", insertResult);

  // 2. Retrieve one data item
  const findOneResult = await thumbnailsCollection.findOne(
    { altText: "This is example No. 1" },
    {
      sort: { rating: -1 },
      projection: { _id: 1, altText: 1, videoURL: 1, imageURL: 1 },
    }
  );
  console.log("Found document through findOne => ", findOneResult);

  // 3. Retrieve multiple data items using simple queries
  const findResult = await thumbnailsCollection.find({}).toArray();
  console.log("Found documents => ", findResult);

  // 4. Retrieve multiple data items using complex queries
  const filteredDocs = await thumbnailsCollection
    .find({ imageURL: "https://picsum.photos/200/300" })
    .toArray();
  console.log("Found documents filtered by imageURL prop => ", filteredDocs);

  // 5. Update data
  const updateResult = await thumbnailsCollection.updateOne(
    { altText: "This is example No. 1" },
    { $set: { title: "This is a thumbnail" } }
  );
  console.log("Updated documents => ", updateResult);

  // 6. Delete data
  const deleteResult = await thumbnailsCollection.deleteMany({
    title: "This is a thumbnail",
  });
  console.log("Deleted documents => ", deleteResult);

  return "done.";
}

connectDB()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
