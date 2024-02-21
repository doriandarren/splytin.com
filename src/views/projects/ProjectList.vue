<template>

	<div v-animate>

		<!-- BEGIN: Page Layout Create -->
		<div v-animate v-if="isCreate">
			<Create
				@saveProjectForm="saveProjectForm"
				@cancelCreate="cancelCreate"
			/>
		</div>

		<!-- BEGIN: Page Layout Update -->
		<div v-animate v-if="isEdit">
			<Edit
				:projectId="projectId"
				@cancelEdit="cancelEdit"
				@updateProjectForm="updateProjectForm"
			/>
		</div>

		<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
			<div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
				<form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
					<div class="relative sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
						<input
							id="tabulator-html-filter-value"
							v-model="filter.value"
							type="text"
							class="w-full xl:w-[600px] form-control mt-2 sm:mt-0"
							:placeholder="$t('search')"
							@keyup="onFilter" />
							<button
								class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0 text-slate-400 hover:cursor-pointer"
								@click.prevent="onResetFilter"
							>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z"/></svg>
						</button>
					</div>
				</form>
				<div class="flex mt-5 sm:mt-0">
					<button class="btn-primary w-1/2 sm:w-auto mr-2" @click.prevent="showCreateProject">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="M16 24h18v2H16z"/><path fill="currentColor" d="M24 16h2v18h-2z"/></svg>
					</button>
				</div>
			</div>
			<div class="overflow-x-auto scrollbar-hidden">
				<div
					id="tabulator"
					ref="table"
					class="mt-5 table-report table-report--tabulator"
				></div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, reactive, onMounted, toRaw } from 'vue';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import { useI18n } from 'vue-i18n';
	import { Toast } from '@/utils/toast';
	import Swal from 'sweetalert2';
	import useProjects from "@/composables/projects";
	import Create from "@/components/projects/ProjectCreate.vue";
	import Edit from "@/components/projects/ProjectEdit.vue";

	// Tabulator
	const table = ref(null);
	const tabulator = ref(null);
	const tableData = reactive([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const projectId = ref(0);

	const { t } = useI18n();
	const { projects, getProjects, storeProject, updateProject, destroyProject} = useProjects();


	const filter = reactive({
		field: "own_company_id",
		type: "like",
		value: "",
	});

	// Filter function
	const onFilter = () => {
		//tabulator.value.setFilter(filter.field, filter.type, filter.value);
		tabulator.value.setFilter([
			[
				{field: 'own_company_id', type: 'like', value: filter.value},
				{field: 'company_id', type: 'like', value: filter.value},
				{field: 'name', type: 'like', value: filter.value},
				{field: 'total_hours', type: 'like', value: filter.value},
				{field: 'current_hours', type: 'like', value: filter.value},
				{field: 'started_at', type: 'like', value: filter.value},
				{field: 'finished_at', type: 'like', value: filter.value},
				{field: 'description', type: 'like', value: filter.value},
			]
		]);
	};

	// On reset filter
	const onResetFilter = () => {
		filter.field = "own_company_id";
		filter.type = "like";
		filter.value = "";
		onFilter();
	};

	const findData = async() => {
		await getProjects();
		return toRaw(projects.value);
	}

	// Table
	const initTabulator = async () => {
		tabulator.value = new Tabulator(table.value, {
			pagination: "local",
			paginationSize: 10,
			paginationSizeSelector: [10, 20, 30, 40],
			layout:"fitDataFill",
			responsiveLayout: "collapse",
			data: tableData.value, //link data to table
			reactiveData: true, //enable data reactivity
			columns: [
				{
					formatter: "responsiveCollapse",
					width: 40,
					minWidth: 30,
					hozAlign: "center",
					resizable: false,
					headerSort: false,
				},
				{
					title: t("own_company_id"),
					minWidth: 200,
					responsive: 0,
					field: "own_company_id",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("company_id"),
					minWidth: 200,
					responsive: 0,
					field: "company_id",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("name"),
					minWidth: 200,
					responsive: 0,
					field: "name",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("total_hours"),
					minWidth: 200,
					responsive: 0,
					field: "total_hours",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("current_hours"),
					minWidth: 200,
					responsive: 0,
					field: "current_hours",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("started_at"),
					minWidth: 200,
					responsive: 0,
					field: "started_at",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("finished_at"),
					minWidth: 200,
					responsive: 0,
					field: "finished_at",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: t("description"),
					minWidth: 200,
					responsive: 0,
					field: "description",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: "",
					minWidth: 80,
					width: 10,
					field: "actions",
					responsive: 0,
					headerHozAlign: "center",
					hozAlign: "center",
					vertAlign: "middle",
					headerSort: false,
					download: false,
					formatter: (cell, formatterParams) => {
						return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 hover:text-blue-400" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"/><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"/></svg>`;
					},
					cellClick: (e, cell) => {
						showEditProject(cell.getData().id);
						e.preventDefault();
					},
				},
				{
					title: "",
					minWidth: 80,
					width: 10,
					field: "actions",
					responsive: 0,
					headerHozAlign: "center",
					hozAlign: "center",
					vertAlign: "middle",
					headerSort: false,
					download: false,
					formatter: (cell, formatterParams) => {
						return `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 hover:text-red-400" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>`;
					},
					cellClick: (e, cell) => {
						//deleteProject(cell.getData().id, cell.getData().name);
						showDeleteProject(cell.getData().id);
						e.preventDefault();
					},
				},
			],
		});
	}

	//Store
	const showCreateProject = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveProjectForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		loading.value = true;
		await storeProject({ ...form });
		//await getProjects();
		tableData.value = await findData();
		tabulator.value.setData(tableData.value);
		loading.value = false;
		await Toast(t("message.record_saved"), 'success');
	}

	//Edit
	const showEditProject = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		projectId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateProjectForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		loading.value = true;
		await updateProject(id, data);
		//await getProjects();
		tableData.value = await findData();
		tabulator.value.setData(tableData.value);
		loading.value = false;
		await Toast(t("message.record_updated"), 'success');
	}

	// Delete
	const showDeleteProject = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyProject(id);
				await getProjects();
				Swal.fire(t("message.record_deleted"), '', 'success');
			}

		});

	}

	onMounted(async () => {
		tableData.value = await findData();
		await initTabulator();
	});


</script>
<style>
</style>
