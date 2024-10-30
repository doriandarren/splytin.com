import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useProvider() {

	const provider = ref();
	const providers = ref([]);
	const providerErrors = ref([]);
	const { t } = useI18n();

	const getProviders = async () => {
		providerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}providers/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				providerErrors.value = res.errors;
			}else{
				providers.value = res.data;
			}
		})
		.catch((e) => {
			providerErrors.value.push(t("errors.error_internal"));
		});
	}


	const getProvider = async (id) => {
		providerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}providers/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				providerErrors.value = res.errors;
			}else{
				provider.value = res.data;
			}
		})
		.catch((e) => {
			providerErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeProvider = async (data) => {
		providerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}providers/store`,{
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
				providerErrors.value = res.errors;
			}else{
				provider.value = res.data;
			}
		})
		.catch((e) => {
			providerErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateProvider = async (id, data) => {
		providerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}providers/update/${id}`,{
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
				providerErrors.value = res.errors;
			}else{
				provider.value = res.data;
			}
		})
		.catch((e) => {
			providerErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyProvider = async (id) => {
		providerErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}providers/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				providerErrors.value = res.errors;
			}else{
				provider.value = res.data;
			}
		})
		.catch((e) => {
			providerErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		providerErrors,
		provider,
		providers,
		getProvider,
		getProviders,
		storeProvider,
		updateProvider,
		destroyProvider,
	}

}
