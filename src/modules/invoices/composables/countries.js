import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useCountry() {

	const country = ref();
	const countries = ref([]);
	const countryErrors = ref([]);
	const { t } = useI18n();

	const getCountries = async () => {
		countryErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}countries/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				countryErrors.value = res.errors;
			}else{
				countries.value = res.data;
			}
		})
		.catch((e) => {
			countryErrors.value.push(t("errors.error_internal"));
		});
	}


	const getCountry = async (id) => {
		countryErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}countries/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				countryErrors.value = res.errors;
			}else{
				country.value = res.data;
			}
		})
		.catch((e) => {
			countryErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeCountry = async (data) => {
		countryErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}countries/store`,{
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
				countryErrors.value = res.errors;
			}else{
				country.value = res.data;
			}
		})
		.catch((e) => {
			countryErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateCountry = async (id, data) => {
		countryErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}countries/update/${id}`,{
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
				countryErrors.value = res.errors;
			}else{
				country.value = res.data;
			}
		})
		.catch((e) => {
			countryErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyCountry = async (id) => {
		countryErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}countries/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				countryErrors.value = res.errors;
			}else{
				country.value = res.data;
			}
		})
		.catch((e) => {
			countryErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		countryErrors,
		country,
		countries,
		getCountry,
		getCountries,
		storeCountry,
		updateCountry,
		destroyCountry,
	}

}
