import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useProject() {

	const project = ref();
	const projects = ref([]);
	const projectErrors = ref([]);
	const { t } = useI18n();

	const getProjects = async () => {
		projectErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}projects/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				projectErrors.value = res.errors;
			}else{
				projects.value = res.data;
			}
		})
		.catch((e) => {
			projectErrors.value.push(t("errors.error_internal"));
		});
	}


	const getProject = async (id) => {
		projectErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}projects/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				projectErrors.value = res.errors;
			}else{
				project.value = res.data;
			}
		})
		.catch((e) => {
			projectErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeProject = async (data) => {
		projectErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}projects/store`,{
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
				projectErrors.value = res.errors;
			}else{
				project.value = res.data;
			}
		})
		.catch((e) => {
			projectErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateProject = async (id, data) => {
		projectErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}projects/update/${id}`,{
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
				projectErrors.value = res.errors;
			}else{
				project.value = res.data;
			}
		})
		.catch((e) => {
			projectErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyProject = async (id) => {
		projectErrors.value = [];
		await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}projects/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				projectErrors.value = res.errors;
			}else{
				project.value = res.data;
			}
		})
		.catch((e) => {
			projectErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		projectErrors,
		project,
		projects,
		getProject,
		getProjects,
		storeProject,
		updateProject,
		destroyProject,
	}

}
