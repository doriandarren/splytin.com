import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useCompany() {

	const company = ref();
	const companies = ref([]);
	const companyErrors = ref([]);
	const { t } = useI18n();

	const getCompanies = async () => {
		companyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}companies/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				companyErrors.value = res.errors;
			}else{
				companies.value = res.data;
			}
		})
		.catch((e) => {
			companyErrors.value.push(t("errors.error_internal"));
		});
	}


	const getCompany = async (id) => {
		companyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}companies/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				companyErrors.value = res.errors;
			}else{
				company.value = res.data;
			}
		})
		.catch((e) => {
			companyErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeCompany = async (data) => {
		companyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}companies/store`,{
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
				companyErrors.value = res.errors;				
			}else{
				company.value = res.data;
			}
		})
		.catch((e) => {
			companyErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateCompany = async (id, data) => {
		companyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}companies/update/${id}`,{
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
				companyErrors.value = res.errors;
			}else{
				company.value = res.data;
			}
		})
		.catch((e) => {
			companyErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyCompany = async (id) => {
		companyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}companies/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				companyErrors.value = res.errors;
			}else{
				company.value = res.data;
			}
		})
		.catch((e) => {
			companyErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		companyErrors,
		company,
		companies,
		getCompany,
		getCompanies,
		storeCompany,
		updateCompany,
		destroyCompany,
	}

}
