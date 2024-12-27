import { Client, Databases, ID ,Query,Storage} from "appwrite"
import Conf from "../config/conf";

class Services {
    client
    databases
    constructor() {
        this.client = new Client()
                        .setEndpoint(Conf.appwriteUrl)
                        .setProject(Conf.appwriteProject);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                Conf.appwriteDatabase,
                Conf.appwriteCollection,
                slug,
                {title,content,featuredImage,status,userId}
            );


        } catch (error) {
            console.log("Error occured in document creation in database::"+error)
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                Conf.appwriteDatabase,
                Conf.appwriteCollection,
                slug,
                {title,content,featuredImage,status}
            );
        } catch (error) {
            console.log("Error occured in updatePost Appwrite:" + error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                Conf.appwriteDatabase,
                Conf.appwriteCollection,
                slug,
            );
            return true
        } catch (error) {
            console.log("Error occured in deletePost in Appwrite:" + error);
        }
    }
    async getPost(slug){
        try {
           return await this.databases.getDocument(
                Conf.appwriteDatabase,
                Conf.appwriteCollection,
                slug
            );
            
        } catch (error) {
            console.log("Error occured in getPost in Appwrite:" + error);
            return false
        }
    }
    async listPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                Conf.appwriteDatabase,
                Conf.appwriteCollection,
                queries,
            );
        } catch (error) {
            console.log("this error is caused by the listPost appwrite::"+error)
            return false;
        }
        
    }

    //file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Conf.appwriteBucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                Conf.appwriteBucket,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            Conf.appwriteBucket,
            fileId
        )
    }


    }

const DatabaseService = new Services;

export default DatabaseService;