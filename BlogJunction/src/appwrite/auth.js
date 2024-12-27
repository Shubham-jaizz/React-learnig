import { Client, Account, ID } from "appwrite"
import Conf from "../config/conf";

class AuthService {
    client
    account
    constructor() {
        this.client = new Client()
                        .setEndpoint(Conf.appwriteUrl)
                        .setProject(Conf.appwriteProject)

        this.account = new Account(this.client)
    }
    async createAccount({email,password,username}) {
        try {
        const user = await this.account.create(ID.unique(),email,password,username);
        if(user){
           //use Another method  this method could be if already user exists then directly login them
           return this.login({email,password})
        }else{
            return user; //

        }
        } catch (error) {
            throw error;
            
        }
    }

    async login({email,password}) {
        try {
            return  await this.account.createEmailPasswordSession(email, password);
       
        } catch (error) {
            console.error("Error while logging in appwrie"+ error);
        }
    }
    async getUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            console.error("error in Appwrite getuser:::"+error);
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("error occured whil logout appwrite:: " + error)
        }
    }
}

const authService = new AuthService;

export default authService