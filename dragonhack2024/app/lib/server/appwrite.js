import { Account, Client, Databases, Storage, ID, Query } from 'appwrite';


const client = new Client();
const databases = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const database = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collectionUsers = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_USERS_ID;
const collectionNotes = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_NOTES_ID;
const bucketProofs = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_PROOFS_ID;
const bucketPfp = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_PFP_ID;
const bucketNotes = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_NOTES_ID;


// Actions for setting up and gettings users. 

export async function getUser (auth0Id) {
    // Query for user by auht0Id
    noStore();
    const data = await databases.listDocuments(
        database, 
        collectionUsers, 
        [
            Query.orderDesc("$createdAt"),
            Query.equal("user_id_Auth0", auth0Id)
        ]
    );

    return data;
}

// Actions for getting tuuors

export async function listTutors() {
    noStore();
    const data = await databases.listDocuments(
        database,
        collectionUsers,
        [
            Query.orderDesc("$createdAt"),
            Query.equal("isTutor", "true")
        ]
    );

    return data;
}

// Actions for getting notes

export async function getNotes() {
  noStore();
  const data = await databases.listDocuments(
    database,
    collectionNotes,
    [
      Query.orderDesc("$createdAt"),
    ]
  );

  return data;
}


