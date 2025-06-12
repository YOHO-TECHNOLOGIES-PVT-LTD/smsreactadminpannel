

export const API_END_POINTS ={

   dashboard:{
    Get:"api/admin/dashboard/",
    GetTransaction:"/api/admin/dashboard/transaction",
    GetCustomerDetails:"/api/admin/dashboard/customerDetails/"
   },


    jobcard:{
            Post:"/api/jobcardscreateCard",
            Get:"/api/jobcards/getOne/:id",
            GetAll:"/api/jobcards/getAll",
            Put:"/api/jobcards/updateCard/:id",
    } ,

    
   vechiclemanage:{
            Get:"/api/vehicle/getall/",
   }  ,

   
   announcement:{
    Post:"/api/announcement/create",
    Get:"/api/announcement/all",

   },
   enquiry:{
    Post:"/api/enquiry/create",
    Get:"/api/enquiry/all",
    Put:"/api/enquiry/update/:uuid",
   },

   sos:{
    Post:"/api/sos/add",
    GetAll:"/api/sos/getall",
    Get:"/api/sos/get/:id",
    Put:"/api/sos/update/",
    put:"/api/sos/addlist",
    getsoslis:"/api/sos/soslist",
    updatelist:"/api/sos/updatelist/:id",
    delete:"/api/sos/delete/"
   },

   profile:{
    Get:"/api/admin/auth/me",
    Put:"/api/admin/auth/update",
    Post:"/api/admin/auth/register",
    Postlogin:"/api/admin/auth/login",
   },

   auth:{
    Post:"/api/admin/auth/forget-pass",
    Postotp:"/api/admin/auth/verfiy-otp",
    Postreset:"/api/admin/auth/reset-pass/:id",
   },

   notification:{
    create:"/api/notifications/",
    createBulk:"/api/notifications/bulk",
    getByUser:"/api/notifications/user/:userId",
    getUnreadCount:"/api/notifications/user/:userId/unread-count",
    markAsRead:"/api/notifications/read/:uuid",
    markAllAsRead:"/api/notifications/read-all/:userId",
    Getstats:"/api/notifications/stats/:userId",
    delete:"/api/notifications/:uuid",
    getall:"/api/notifications/",
    GetById:"/api/notifications/:uuid",
    update:"/api/notifications/:uuid",
    postperferenceCreateOrUpdate:"/api/notifications/preferences",
    putpreferenceCreateOrUpdate:"/api/notifications/preference",
    getPreferenceGet:"/api/preferences/:userId",
   },

   spareparts:{
    create:"/api/admin/spareparts/create",
    get:"/api/admin/spareparts/create",
    getall:"/api/admin/spareparts/getall",
    update:"/api/admin/spareparts/update/:id",
    updatestatus:"/api/admin/spareparts/updatestatus/:id",
    delete:"/api/admin/spareparts/delete/:id",
   },

   serviceCenter:{
     getAll: "/api/admin/servicecenter/getall",
     getCatevery: "/api/admin/category/getAll/",
     getAllCat: "/api/admin/category/getAll/:uuid",
     postPartner: "/api/partner/auth/register",
     updatePatner: "/api/partner/auth/update/:id",
     delete:"/api/admin/servicecenter/delete/:id",
    },
    category:{
        update:"/api/admin/category/update/:uuid",
        delete:"/api/admin/category/delete/:uuid",
        create:"/api/admin/category/create",
    },
    service:{
        create:"/api/admin/service/",
        getall:'/api/admin/service/',
        put:'/api/admin/service/:uuid',
        patch:'/api/admin/service/toggle-status/:uuid',
    }


   

}