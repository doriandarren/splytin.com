import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useOwnCompany() {

	const ownCompany = ref();
	const ownCompanies = ref([]);
	const ownCompanyErrors = ref([]);
	const { t } = useI18n();

	const getOwnCompanies = async () => {
		ownCompanyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}own-companies/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${localStorage.getItem('token')}`
				"Authorization": `Bearer 1|kXAK8rlItGnX95dYLslQlmWy0RpQyDVpmohXjXk10c2882cf`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				ownCompanyErrors.value = res.errors;
			}else{
				ownCompanies.value = res.data;
			}
		})
		.catch((e) => {
			ownCompanyErrors.value.push(t("errors.error_internal"));
		});
	}


	const getOwnCompany = async (id) => {
		ownCompanyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}own-companies/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${localStorage.getItem('token')}`
				"Authorization": `Bearer 1|kXAK8rlItGnX95dYLslQlmWy0RpQyDVpmohXjXk10c2882cf`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				ownCompanyErrors.value = res.errors;
			}else{
				ownCompany.value = res.data;
			}
		})
		.catch((e) => {
			ownCompanyErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeOwnCompany = async (data) => {
		ownCompanyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}own-companies/store`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${localStorage.getItem('token')}`
				"Authorization": `Bearer 1|kXAK8rlItGnX95dYLslQlmWy0RpQyDVpmohXjXk10c2882cf`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				ownCompanyErrors.value = res.errors;
			}else{
				ownCompany.value = res.data;
			}
		})
		.catch((e) => {
			ownCompanyErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateOwnCompany = async (id, data) => {
		ownCompanyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}own-companies/update/${id}`,{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${localStorage.getItem('token')}`
				"Authorization": `Bearer 1|kXAK8rlItGnX95dYLslQlmWy0RpQyDVpmohXjXk10c2882cf`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				ownCompanyErrors.value = res.errors;
			}else{
				ownCompany.value = res.data;
			}
		})
		.catch((e) => {
			ownCompanyErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyOwnCompany = async (id) => {
		ownCompanyErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}own-companies/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${localStorage.getItem('token')}`
				"Authorization": `Bearer 1|kXAK8rlItGnX95dYLslQlmWy0RpQyDVpmohXjXk10c2882cf`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				ownCompanyErrors.value = res.errors;
			}else{
				ownCompany.value = res.data;
			}
		})
		.catch((e) => {
			ownCompanyErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		ownCompanyErrors,
		ownCompany,
		ownCompanies,
		getOwnCompany,
		getOwnCompanies,
		storeOwnCompany,
		updateOwnCompany,
		destroyOwnCompany,
	}

}
