import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useCustomer() {

	const customer = ref();
	const customers = ref([]);
	const customerErrors = ref([]);
	const { t } = useI18n();

	const getCustomers = async () => {
		customerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}customers/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				customerErrors.value = res.errors;
			}else{
				customers.value = res.data;
			}
		})
		.catch((e) => {
			customerErrors.value.push(t("errors.error_internal"));
		});
	}


	const getCustomer = async (id) => {
		customerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}customers/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				customerErrors.value = res.errors;
			}else{
				customer.value = res.data;
			}
		})
		.catch((e) => {
			customerErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeCustomer = async (data) => {
		customerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}customers/store`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				customerErrors.value = res.errors;
			}else{
				customer.value = res.data;
			}
		})
		.catch((e) => {
			customerErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateCustomer = async (id, data) => {
		customerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}customers/update/${id}`,{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				customerErrors.value = res.errors;
			}else{
				customer.value = res.data;
			}
		})
		.catch((e) => {
			customerErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyCustomer = async (id) => {
		customerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}customers/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				customerErrors.value = res.errors;
			}else{
				customer.value = res.data;
			}
		})
		.catch((e) => {
			customerErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		customerErrors,
		customer,
		customers,
		getCustomer,
		getCustomers,
		storeCustomer,
		updateCustomer,
		destroyCustomer,
	}

}
