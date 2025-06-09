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
    create:(data:string)=>httpClient.post(API_END_POINTS.notification.create,data),
    getByUser:(params:string)=>httpClient.get(API_END_POINTS.notification.getByUser,params) ,
    markAsRead:(params:string,data:string)=>httpClient.update(API_END_POINTS.notification.markAsRead,data,params),
    getUnreadCount:(params:string)=>httpClient.get(API_END_POINTS.notification.getUnreadCount,params),
    createBulk:(data:string)=>httpClient.post(API_END_POINTS.notification.createBulk,data),
    postpreferenceCreateOrUpdate:(data:string)=>httpClient.post(API_END_POINTS.notification.postperferenceCreateOrUpdate,data),
    putpereferenceCreateOrUpdate:(data:string,params:string)=>httpClient.update(API_END_POINTS.notification.putpreferenceCreateOrUpdate,params,data),
    getpreferenceGet:(data:string)=>httpClient.get(API_END_POINTS.notification.getPreferenceGet,data,),
    update:(data:string,params:string)=>httpClient.update(API_END_POINTS.notification.update,params,data),

},

   sos:{
    post:(data:any,)=>httpClient.post(API_END_POINTS.sos.Post,data),
    put:(data:any,params:string)=>httpClient.update(API_END_POINTS.sos.Put+params,data,''),
    get:(params:string)=>httpClient.get(API_END_POINTS.sos.Get.replace(':id',params),),
    getAll:()=>httpClient.get(API_END_POINTS.sos.GetAll,'')
   },

   Announcement:{
    post:(data:any)=>httpClient.post(API_END_POINTS.announcement.Post,data),
    get:(data:any,)=>httpClient.get(API_END_POINTS.announcement.Get,data,)
},


spareparts:{
    create:(data:any)=>httpClient.post(API_END_POINTS.spareparts.create,data),
    get:(params:string)=>httpClient.get(API_END_POINTS.spareparts.get,params),
    getAll:(params:string)=>httpClient.get(API_END_POINTS.spareparts.getall,params),
    delete:()=>httpClient.delete(API_END_POINTS.spareparts.delete),
    update:(data:string,params:string)=>httpClient.update(API_END_POINTS.spareparts.update,data,params),
   updatestatus:(data:string,params:string)=>httpClient.update(API_END_POINTS.spareparts.updatestatus,data,params)
},
auth:{
  post:(data:any)=>httpClient.post(API_END_POINTS.auth.Post,data),
  postotp:(data:any)=>httpClient.post(API_END_POINTS.auth.Postotp,data,),
  postreset:(data:any)=>httpClient.post(API_END_POINTS.auth.Postreset,data,)  
},

profile:{
    get:(params:string)=>httpClient.get(API_END_POINTS.profile.Get,params),
    put:(params:string,data:string)=>httpClient.update(API_END_POINTS.profile.Put,params,data),
    post:(data:string)=>httpClient.post(API_END_POINTS.profile.Post,data,),
    postlogin:(data:any)=>httpClient.post(API_END_POINTS.profile.Postlogin,data)
},


enquiry:{
    post:(data:string)=>httpClient.post(API_END_POINTS.enquiry.Post,data,),
    get:(params:string)=>httpClient.get(API_END_POINTS.enquiry.Get,params),
    put:(data:string,params:string)=>httpClient.update(API_END_POINTS.enquiry.Put,data,params)
},

 vechiclemanage:{
    get:(params:string)=>httpClient.get(API_END_POINTS.vechiclemanage.Get,params)
 },

  jobcard:{
    get:(params:string)=>httpClient.get(API_END_POINTS.jobcard.Get.replace(':id',params)),
    getAll:()=>httpClient.get(API_END_POINTS.jobcard.GetAll),
    post:(data:string)=>httpClient.post(API_END_POINTS.jobcard.Post,data),
    put:(data:any,params:string)=>httpClient.update(API_END_POINTS.jobcard.Put,data,params),
  },

 dashboard:{
    get:(params:string)=>httpClient.get(API_END_POINTS.dashboard.Get,params),
    getTransaction:(params:string)=>httpClient.get(API_END_POINTS.dashboard.GetTransaction,params),
    getCustomerDetails:(params:string)=>httpClient.get(API_END_POINTS.dashboard.GetCustomerDetails,params),
 },

 servicecenter:{
  getAll:(data:string)=>httpClient.get(API_END_POINTS.serviceCenter.getAll,data),
  getAllCat:(params:string)=>httpClient.get(API_END_POINTS.serviceCenter.getAllCat.replace(':uuid',params)),
  postPartner:(data:any)=>httpClient.post(API_END_POINTS.serviceCenter.postPartner,data),
  update:(data:any,params:string)=>httpClient.update(API_END_POINTS.serviceCenter.updatePatner.replace(':id',params),data,'')
 }


}


}



export default Client;