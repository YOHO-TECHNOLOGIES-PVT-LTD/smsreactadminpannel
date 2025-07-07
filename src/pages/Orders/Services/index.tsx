import Client from "../../../api";

export const getOrdersHistory = async(params: string)=>{
    try{
        const response = await new Client().admin.order_history.getAll(params)
        console.log(response);
        return response
    }catch(error){
        console.log("Error getting orders history:", error)
    }
}

export const CreateOderHistory =async(data:any)=>{
    try {
        const response:any = await new Client().admin.order_history.create(data)
        return response
    } catch (error) {
        console.log("Error getting orders history:",error)
    }
}