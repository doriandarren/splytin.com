import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useGeneratorVideo() {

	const generatorVideo = ref();
	const generatorVideos = ref([]);
	const generatorVideoErrors = ref([]);
	const { t } = useI18n();

	const getGeneratorVideos = async () => {
		generatorVideoErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}generator-videos/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				generatorVideoErrors.value = res.errors;
			}else{
				generatorVideos.value = res.data;
			}
		})
		.catch((e) => {
			generatorVideoErrors.value.push(t("errors.error_internal"));
		});
	}


	const getGeneratorVideo = async (id) => {
		generatorVideoErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}generator-videos/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				generatorVideoErrors.value = res.errors;
			}else{
				generatorVideo.value = res.data;
			}
		})
		.catch((e) => {
			generatorVideoErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeGeneratorVideo = async (data) => {
		generatorVideoErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}generator-videos/store`,{
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
				generatorVideoErrors.value = res.errors;
			}else{
				generatorVideo.value = res.data;
			}
		})
		.catch((e) => {
			generatorVideoErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateGeneratorVideo = async (id, data) => {
		generatorVideoErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}generator-videos/update/${id}`,{
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
				generatorVideoErrors.value = res.errors;
			}else{
				generatorVideo.value = res.data;
			}
		})
		.catch((e) => {
			generatorVideoErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyGeneratorVideo = async (id) => {
		generatorVideoErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL}generator-videos/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				generatorVideoErrors.value = res.errors;
			}else{
				generatorVideo.value = res.data;
			}
		})
		.catch((e) => {
			generatorVideoErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		generatorVideoErrors,
		generatorVideo,
		generatorVideos,
		getGeneratorVideo,
		getGeneratorVideos,
		storeGeneratorVideo,
		updateGeneratorVideo,
		destroyGeneratorVideo,
	}

}
