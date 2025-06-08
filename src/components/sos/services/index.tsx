
import Client from "../../../api";


export const getsos =async (data:any)=>{
    try{ 
        const response:any =  await new Client().admin.sos.get(data)
        return response.data
    }
    catch(error)
    {
        console.log('Error fetching data:',error);
        
    }
}

export const  getallSos= async ()=>{
    try{
        const response = await new Client().admin.sos.getAll()
        console.log(response);
        return response
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}

export const updatesos = async (data:any,params:string)=>{
    try{
        const response = await new Client().admin.sos.put(data,params)
        return response
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}

export const postSos = async (data:any)=>{
    try{
        const response = await new Client().admin.sos.post(data)
        console.log(response);
        return response
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}


