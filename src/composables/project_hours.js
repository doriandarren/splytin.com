import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useProjectHour() {

	const projectHour = ref();
	const projectHours = ref([]);
	const projectHourErrors = ref([]);
	const { t } = useI18n();

	const getProjectHours = async () => {
		projectHourErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}project-hours/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				projectHourErrors.value = res.errors;
			}else{
				projectHours.value = res.data;
			}
		})
		.catch((e) => {
			projectHourErrors.value.push(t("errors.error_internal"));
		});
	}


	const getProjectHour = async (id) => {
		projectHourErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}project-hours/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				projectHourErrors.value = res.errors;
			}else{
				projectHour.value = res.data;
			}
		})
		.catch((e) => {
			projectHourErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeProjectHour = async (data) => {
		projectHourErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}project-hours/store`,{
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
				projectHourErrors.value = res.errors;
			}else{
				projectHour.value = res.data;
			}
		})
		.catch((e) => {
			projectHourErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateProjectHour = async (id, data) => {
		projectHourErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}project-hours/update/${id}`,{
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
				projectHourErrors.value = res.errors;
			}else{
				projectHour.value = res.data;
			}
		})
		.catch((e) => {
			projectHourErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyProjectHour = async (id) => {
		projectHourErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}project-hours/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				projectHourErrors.value = res.errors;
			}else{
				projectHour.value = res.data;
			}
		})
		.catch((e) => {
			projectHourErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		projectHourErrors,
		projectHour,
		projectHours,
		getProjectHour,
		getProjectHours,
		storeProjectHour,
		updateProjectHour,
		destroyProjectHour,
	}

}
