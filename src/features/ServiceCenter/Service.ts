import Client from "../../api"

export const getServiceCenter=async(data:any)=>{
    try{
        const response = await new Client().admin.servicecenter.getAll(data)
        return response
    } catch (error){
        console.log("Error in post servicecenter")
    }

}