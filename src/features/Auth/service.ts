import Client from "../../api"

export const getProfile = async (data:any)=>{
    try{
        const response = await new Client().admin.profile.get(data);        
        return response;
    }
    catch{
        console.log("Errorr");
        
    }
}

export const updateProfile = async (params:string,data:string)=>{
    try{
        const profile = await new Client().admin.profile.put(params, data);
        console.log(profile,"dfghjkl");
        return profile;
    }
    catch{
        console.log("error");
        
    }
}