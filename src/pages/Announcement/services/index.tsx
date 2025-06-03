import Client from "../../../api";

export const postAnnouncement = async (data:any)=>{
     try{
        const response = await new Client().admin.Announcement.post(data)
        return response;
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}


export const getAnnouncement = async (data:any)=>{
     try{
        const response = await new Client().admin.Announcement.get(data)
        return response;
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}


