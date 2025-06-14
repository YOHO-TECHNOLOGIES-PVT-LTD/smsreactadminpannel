import Client from "../../api"

export const getServiceCenter=async(data:any)=>{
    try{
        const response = await new Client().admin.servicecenter.getAll(data)
        return response
    } catch (error){
        console.log("Error in post servicecenter")
    }

}
export const getServices=async(data:any)=>{
    try{
        const response = await new Client().admin.servicecenter.getAllCat(data)
        return response
    } catch (error){
        console.log("Error in post services")
    }

}
export const getSpareparts=async(data:any)=>{
    try{
        const response = await new Client().admin.spareparts.getAll(data)
        return response
    } catch (error){
        console.log("Error in post spareparts")
    }
}


