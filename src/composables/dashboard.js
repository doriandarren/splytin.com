import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useDashboard() {

	const dashboard = ref();
	const dashboards = ref([]);
	const dashboardErrors = ref([]);
	const { t } = useI18n();

	const getDashboards = async () => {
		dashboardErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/youtube-videos/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				dashboardErrors.value = res.errors;
			}else{
				dashboards.value = res.data;
			}
		})
		.catch((e) => {
			dashboardErrors.value.push(t("errors.error_internal"));
		});
	}


	const getDashboard = async (id) => {
		dashboardErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/youtube-videos/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				dashboardErrors.value = res.errors;
			}else{
				dashboard.value = res.data;
			}
		})
		.catch((e) => {
			dashboardErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeDashboard = async (data) => {
		dashboardErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/youtube-videos/store`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				dashboardErrors.value = res.errors;
			}else{
				dashboard.value = res.data;
			}
		})
		.catch((e) => {
			dashboardErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateDashboard = async (id, data) => {
		dashboardErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/youtube-videos/update/${id}`,{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				dashboardErrors.value = res.errors;
			}else{
				dashboard.value = res.data;
			}
		})
		.catch((e) => {
			dashboardErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyDashboard = async (id) => {
		dashboardErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/youtube-videos/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				dashboardErrors.value = res.errors;
			}else{
				dashboard.value = res.data;
			}
		})
		.catch((e) => {
			dashboardErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		dashboardErrors,
		dashboard,
		dashboards,
		getDashboard,
		getDashboards,
		storeDashboard,
		updateDashboard,
		destroyDashboard,
	}

}
