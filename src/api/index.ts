import httpClient from "./httpClient";
import { API_END_POINTS } from "./httpEndpoints";


class Client{
admin={
    notification:{
    getById:(params:string)=>httpClient.get(API_END_POINTS.notification.GetById ,params),
    markAllAsread:(params:string,data:string)=>httpClient.update(API_END_POINTS.notification.markAllAsRead,params,data),
    delete:()=>httpClient.delete(API_END_POINTS.notification.delete),
    getAll:(data:string)=>httpClient.get(API_END_POINTS.notification.getall,data),
    getstats:(params:string)=>httpClient.get(API_END_POINTS.notification.Getstats,params),
    create:(params:string,data:string)=>httpClient.post(API_END_POINTS.notification.create,params,data),
    getByUser:(params:string)=>httpClient.get(API_END_POINTS.notification.getByUser,params) ,
    markAsRead:(params:string,data:string)=>httpClient.update(API_END_POINTS.notification.markAsRead,data,params),
    getUnreadCount:(params:string)=>httpClient.get(API_END_POINTS.notification.getUnreadCount,params),
    createBulk:(data:string)=>httpClient.post(API_END_POINTS.notification.createBulk,'',data),
    postpreferenceCreateOrUpdate:(data:string,params:string)=>httpClient.post(API_END_POINTS.notification.postperferenceCreateOrUpdate,data,params),
    putpereferenceCreateOrUpdate:(data:string,params:string)=>httpClient.update(API_END_POINTS.notification.putpreferenceCreateOrUpdate,params,data),
    getpreferenceGet:(data:string)=>httpClient.get(API_END_POINTS.notification.getPreferenceGet,data,),
    update:(data:string,params:string)=>httpClient.update(API_END_POINTS.notification.update,params,data),
},

   sos:{
    post:(data:string,params:string)=>httpClient.post(API_END_POINTS.sos.Post,data,params),
    put:(data:string,params:string)=>httpClient.update(API_END_POINTS.sos.Put,data,params),
    get:(data:string)=>httpClient.get(API_END_POINTS.sos.Get,data,),
    getAll:(data:string)=>httpClient.get(API_END_POINTS.sos.GetAll,data,)
   },


}


}



export default new Client();