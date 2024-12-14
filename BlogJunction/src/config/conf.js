const Conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabase:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteProject:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteBucket:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default Conf;