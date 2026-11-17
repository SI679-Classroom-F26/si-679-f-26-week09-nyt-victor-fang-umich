import { MongoClient } from 'mongodb';
import type { Db } from 'mongodb';
import {getMongoUri, getDbName} from '../config.js';

const MONGO_URI: string = 'mongodb://127.0.0.1:27017';
const DB_NAME: string = 'week9';

let client: MongoClient | null = null;
let database: Db;

// export const connect = async (
//   uri: string = MONGO_URI,
//   dbName: string = DB_NAME
// ): Promise<void> => {
//   client = new MongoClient(uri);
//   await client.connect();
//   database = client.db(dbName);
// };

// The tests pass their own uri and database name.
export const connect = async (
  uri: string = getMongoUri(),
  dbName: string = getDbName()
): Promise<void> => {
  client = new MongoClient(uri);
  await client.connect();
  database = client.db(dbName);
};

export const disconnect = async (): Promise<void> => {
  if (client) {
    await client.close();
    client = null;
  }
};

export const getDb = (): Db => database;


