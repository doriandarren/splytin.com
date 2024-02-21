import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useInvoiceLine() {

	const invoiceLine = ref();
	const invoiceLines = ref([]);
	const invoiceLineErrors = ref([]);
	const { t } = useI18n();

	const getInvoiceLines = async () => {
		invoiceLineErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-lines/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				invoiceLineErrors.value = res.errors;
			}else{
				invoiceLines.value = res.data;
			}
		})
		.catch((e) => {
			invoiceLineErrors.value.push(t("errors.error_internal"));
		});
	}


	const getInvoiceLine = async (id) => {
		invoiceLineErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-lines/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				invoiceLineErrors.value = res.errors;
			}else{
				invoiceLine.value = res.data;
			}
		})
		.catch((e) => {
			invoiceLineErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeInvoiceLine = async (data) => {
		invoiceLineErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-lines/store`,{
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
				invoiceLineErrors.value = res.errors;
			}else{
				invoiceLine.value = res.data;
			}
		})
		.catch((e) => {
			invoiceLineErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateInvoiceLine = async (id, data) => {
		invoiceLineErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-lines/update/${id}`,{
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
				invoiceLineErrors.value = res.errors;
			}else{
				invoiceLine.value = res.data;
			}
		})
		.catch((e) => {
			invoiceLineErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyInvoiceLine = async (id) => {
		invoiceLineErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}invoice-lines/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				invoiceLineErrors.value = res.errors;
			}else{
				invoiceLine.value = res.data;
			}
		})
		.catch((e) => {
			invoiceLineErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		invoiceLineErrors,
		invoiceLine,
		invoiceLines,
		getInvoiceLine,
		getInvoiceLines,
		storeInvoiceLine,
		updateInvoiceLine,
		destroyInvoiceLine,
	}

}
