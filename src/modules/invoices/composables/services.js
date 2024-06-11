import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useService() {

	const service = ref();
	const services = ref([]);
	const serviceErrors = ref([]);
	const { t } = useI18n();

	const getServices = async () => {
		serviceErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}services/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				serviceErrors.value = res.errors;
			}else{
				services.value = res.data;
			}
		})
		.catch((e) => {
			serviceErrors.value.push(t("errors.error_internal"));
		});
	}


	const getService = async (id) => {
		serviceErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}services/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				serviceErrors.value = res.errors;
			}else{
				service.value = res.data;
			}
		})
		.catch((e) => {
			serviceErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeService = async (data) => {
		serviceErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}services/store`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				serviceErrors.value = res.errors;
			}else{
				service.value = res.data;
			}
		})
		.catch((e) => {
			serviceErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateService = async (id, data) => {
		serviceErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}services/update/${id}`,{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				serviceErrors.value = res.errors;
			}else{
				service.value = res.data;
			}
		})
		.catch((e) => {
			serviceErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyService = async (id) => {
		serviceErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}services/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				serviceErrors.value = res.errors;
			}else{
				service.value = res.data;
			}
		})
		.catch((e) => {
			serviceErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		serviceErrors,
		service,
		services,
		getService,
		getServices,
		storeService,
		updateService,
		destroyService,
	}

}
