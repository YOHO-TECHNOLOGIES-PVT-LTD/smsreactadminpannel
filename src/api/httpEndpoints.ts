export const API_END_POINTS = {
	dashboard: {
		Get: 'api/admin/dashboard/',
		GetTransaction: '/api/admin/dashboard/transaction',
		GetCustomerDetails: '/api/admin/dashboard/customerDetails/',
	},

	jobcard: {
		Post: '/api/jobcards',
		Get: '/api/jobcards/:id',
		GetAll: '/api/jobcards',
		Put: '/api/jobcards/:id',
	},

	vechiclemanage: {
		Get: '/api/admin/vehicleManage/',
	},

	announcement: {
		Post: '/api/announcement/create',
		Get: '/api/announcement/all',
	},
	enquiry: {
		Post: '/api/enquiry/create',
		Get: '/api/enquiry/all',
		Put: '/api/enquiry/update/:uuid',
	},

	sos: {
		Post: '/api/sos/add',
		GetAll: '/api/sos/getall',
		Get: '/api/sos/get/:id',
		Put: '/api/sos/update/:id',
	},

	profile: {
		Get: '/api/admin/auth/me',
		Put: '/api/admin/auth/update',
		Post: '/api/admin/auth/register',
		Postlogin: '/api/admin/auth/login',
	},

	auth: {
		Post: '/api/admin/auth/forget-pass',
		Postotp: '/api/admin/auth/verfiy-otp',
		Postreset: '/api/admin/auth/reset-pass/:id',
	},

	notification: {
		create: '/api/admin/notification/',
		createBulk: '/api/admin/notification/bulk',
		getByUser: '/api/admin/notification/user/:userId',
		getUnreadCount: '/api/admin/notification/user/:userId/unread-count',
		markAsRead: '/api/admin/notification/read/:uuid',
		markAllAsRead: '/api/admin/notification/read-all/:userId',
		Getstats: '/api/admin/notification/stats/:userId',
		delete: '/api/admin/notification/:uuid',
		getall: '/api/admin/notification/',
		GetById: '/api/admin/notification/:uuid',
		update: '/api/admin/notification/:uuid',
		postperferenceCreateOrUpdate: '/api/admin/notification/preferences',
		putpreferenceCreateOrUpdate: '/api/admin/notification/preference',
		getPreferenceGet: '/api/admin/preferences/:userId',
	},

	spareparts: {
		create: '/api/admin/spareparts/create',
		get: '/api/admin/spareparts/create',
		getall: '/api/admin/spareparts/getall',
		update: '/api/admin/spareparts/update/:id',
		updatestatus: '/api/admin/spareparts/updatestatus/:id',
		delete: '/api/admin/spareparts/delete/:id',
	},
};
