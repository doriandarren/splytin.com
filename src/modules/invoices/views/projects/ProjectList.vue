<template>

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

	<!-- BEGIN: Table -->
	<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start justify-end">
			<div class="flex mt-5 mb-5 sm:mt-0">
				<button class="btn-primary w-1/2 sm:w-auto" @click.prevent="showCreateProject">
					<IconAdd />
					{{ $t("add") }}
			</button>
		</div>
	</div>

	<!-- BEGIN: Table -->
	<div class="overflow-x-auto scrollbar-hidden">
		<VueGoodTable
			:columns="columns" 
			:rows="rows" 
			:pagination-options="{
				enabled: true,
				mode: 'records',
				perPage: 5,
				perPageDropdown: [10, 20, 50],
				dropdownAllowAll: false,
				setCurrentPage: 1,
				nextLabel: $t('setting_table.next_table'),
				prevLabel: $t('setting_table.prev_table'),
				rowsPerPageLabel: $t('setting_table.rows_per_page'),
				ofLabel: $t('setting_table.of'),
				pageLabel: 'page', // for pages mode
				allLabel: 'All',
			}" 
			:search-options="{ enabled: true, placeholder: $t('setting_table.search') }"
		>
			<template #table-row="props">
				<span v-if="props.column.field == 'actions'">
					<button @click="showEditProject(props.row.id)">
						<IconEdit class="h-6 w-8 text-primary hover:text-primary-dark" />
					</button>
					<button @click="showDeleteProject(props.row.id)">
						<IconDelete class="h-6 w-6 text-red-600 hover:text-red-400" />
					</button>
					</span>
				</template>
			</VueGoodTable>
		</div>

	</div>

</template>
<script setup>
	import { ref, onMounted, toRaw } from 'vue';
	import { useI18n } from 'vue-i18n';
	import { Toast } from '@/utils/toast';
	import Swal from 'sweetalert2';
	import useProjects from "../../composables/projects";
	import Create from "../../components/projects/ProjectCreate.vue";
	import Edit from "../../components/projects/ProjectEdit.vue";
	import IconEdit from '@/components/icons/IconEdit.vue';
	import IconDelete from '@/components/icons/IconDelete.vue';
	import IconAdd from '@/components/icons/IconAdd.vue';


	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const projectId = ref(0);

	const { t } = useI18n();
	const { projects, getProjects, storeProject, updateProject, destroyProject} = useProjects();


	const findData = async() => {
		await getProjects();
		return toRaw(projects.value);
	}

	// Table
	const columns = [
		{ label: t("company_id"), field: 'company.name' },
		{ label: t("name"), field: 'name' },
		{ label: t("total_hours"), field: 'total_hours' },
		{ label: t("started_at"), field: 'started_at' },
		{ label: t("finished_at"), field: 'finished_at' },
		{ label: t("description"), field: 'description' },
		{ label: t('actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
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
		await storeProject({ ...form });
		rows.value = await findData();
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
		await updateProject(id, data);
		rows.value = await findData();
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
		rows.value = await findData();
				Swal.fire(t("message.record_deleted"), '', 'success');
			}

		});

	}

	/**
	 * Ex: 2024-04-07 00:00:00 -> convert 07-04-2024
	 * 
	 * @param {'2024-04-07 00:00:00'} date 
	 */
	 const formattedDate = (date) => {
      const [year, month, day] = date.split(' ')[0].split('-');
      return `${day}-${month}-${year}`;
    }

	onMounted(async () => {
		rows.value = await findData();
	});


</script>

<style scoped>
</style>
