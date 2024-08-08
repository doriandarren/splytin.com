import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useInvoiceCounter() {

	const invoiceCounter = ref();
	const invoiceCounters = ref([]);
	const invoiceCounterErrors = ref([]);
	const { t } = useI18n();

	const getInvoiceCounters = async () => {
		invoiceCounterErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-counters/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				invoiceCounterErrors.value = res.errors;
			}else{
				invoiceCounters.value = res.data;
			}
		})
		.catch((e) => {
			invoiceCounterErrors.value.push(t("errors.error_internal"));
		});
	}


	const getInvoiceCounter = async (id) => {
		invoiceCounterErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-counters/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				invoiceCounterErrors.value = res.errors;
			}else{
				invoiceCounter.value = res.data;
			}
		})
		.catch((e) => {
			invoiceCounterErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeInvoiceCounter = async (data) => {
		invoiceCounterErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-counters/store`,{
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
				invoiceCounterErrors.value = res.errors;
			}else{
				invoiceCounter.value = res.data;
			}
		})
		.catch((e) => {
			invoiceCounterErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateInvoiceCounter = async (id, data) => {
		invoiceCounterErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-counters/update/${id}`,{
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
				invoiceCounterErrors.value = res.errors;
			}else{
				invoiceCounter.value = res.data;
			}
		})
		.catch((e) => {
			invoiceCounterErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyInvoiceCounter = async (id) => {
		invoiceCounterErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-counters/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				invoiceCounterErrors.value = res.errors;
			}else{
				invoiceCounter.value = res.data;
			}
		})
		.catch((e) => {
			invoiceCounterErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		invoiceCounterErrors,
		invoiceCounter,
		invoiceCounters,
		getInvoiceCounter,
		getInvoiceCounters,
		storeInvoiceCounter,
		updateInvoiceCounter,
		destroyInvoiceCounter,
	}

}
