
import Client from "../../../api";


export const sos =async (data:any)=>{
    try{ 
        const response =  await new Client().admin.sos.get(data)
        // const data= <response />;
        console.log(response);
    }
    catch(error)
    {
        console.log('Error fetching data:',error);
        
    }
}

export const  getallSos= async (data:any)=>{
    try{
        const response = await new Client().admin.sos.getAll(data)
        console.log(response);
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}

export const updatesos = async (data:any,params:string)=>{
    try{
        const response = await new Client().admin.sos.put(data,params)
        console.log(response);
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}

export const postSos = async (data:any,params:string)=>{
    try{
        const response = await new Client().admin.sos.post(data,params)
        console.log(response);
    }
    catch(error){
        console.log('Error fetching data:',error);
    }
}


