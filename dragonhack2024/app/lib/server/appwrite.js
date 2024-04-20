import { Account, Client, Databases, Storage, ID, Query } from 'appwrite';


const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databse = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;