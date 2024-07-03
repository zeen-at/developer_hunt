import { Client, Account, ID, Databases, Avatars, Storage, Query } from 'react-native-appwrite';




export const appWriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.aora",
    projectId: "6642ba380006cf5312c8",
    databaseId: "6642bce1003bd7f76750",
    userCollectionId: "6642bd23001f505e3b22",
    videoCollectionId: "6642bd5f003903d4e0cf",
    storageId: "66454b2a002fb0a4a2c8"
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);


// Register User

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw new Error

        const avatarUrl = avatar.getInitials(username)

        const newUser = await databases.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username, 
                avatar: avatarUrl,
            }
        )

        return newUser;
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
   
}

// Login User

export const signIn = async (email, password) => {
    try {

        const session = await account.createEmailPasswordSession(email, password)
        
        return session;

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const signOut = async () => {
    try {

        const session = await account.deleteSession('current');
        
        return session;

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}


export const getCurrentUser = async () => {
    try {

       const currentAccount =  await account.get();

       if(!currentAccount) throw Error

       const currentUser = await databases.listDocuments(
        appWriteConfig.databaseId,
        appWriteConfig.userCollectionId,
        [Query.equal('accountId', currentAccount.$id)]
       )

       if(!currentUser) throw Error;

       return currentUser.documents[0]
       
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = async () => {
    try {

        const posts = await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.videoCollectionId,
        )
        return posts.documents;
        
    } catch (error) {
        throw new Error(error)
    }

}

export const getLatestPosts = async () => {
    try {

        const posts = await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.videoCollectionId,
            [Query.orderDesc('$createdAt'), Query.limit(7)]
        )
        return posts.documents;
        
    } catch (error) {
        throw new Error(error)
    }

}
export const getUserPosts = async (userId) => {
    try {

        const posts = await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.videoCollectionId,
            [Query.equal('users', userId)]
        )
        return posts.documents;
        
    } catch (error) {
        throw new Error(error)
    }

}