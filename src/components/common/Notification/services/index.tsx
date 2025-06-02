
import Client from "../../../../api"

export const getAllNotification =async (data:any)=>{
    try{
        const response = await new Client().admin.notification.getAll(data)
        console.log(response);
    }
    catch(error) {
        console.log('Error fetching data:',error);
    }
}

export const DeleteNotification = async ()=>{
    try{
        const response = await new Client().admin.notification.delete()
        console.log(response);
    }
    catch(error){
        console.log('Error fetching data:',error)
    }

}  
