import { MongoClient, MongoClientOptions } from "mongodb";

const connectionOptions: MongoClientOptions = {};

MongoClient.connect("", connectionOptions);
