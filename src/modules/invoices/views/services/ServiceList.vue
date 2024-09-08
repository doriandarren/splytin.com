<template>

	<!-- BEGIN: Page Layout Create -->
	<div v-animate v-if="isCreate">
		<Create
			@saveServiceForm="saveServiceForm"
			@cancelCreate="cancelCreate"
		/>
	</div>

	<!-- BEGIN: Page Layout Update -->
	<div v-animate v-if="isEdit">
		<Edit
			:serviceId="serviceId"
			@cancelEdit="cancelEdit"
			@updateServiceForm="updateServiceForm"
		/>
	</div>

	<!-- BEGIN: Table -->
	<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start justify-end">
			<div class="flex mt-5 mb-5 sm:mt-0">
				<button class="btn-primary w-1/2 sm:w-auto" @click.prevent="showCreateService">
					<div class="flex flex-row">
						<IconAdd />
						{{ $t("add") }}
					</div>
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
					<button @click="showEditService(props.row.id)">
						<IconEdit class="h-6 w-8 text-primary hover:text-primary-dark" />
					</button>
					<button @click="showDeleteService(props.row.id)">
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
	import useServices from "../../composables/services";
	import Create from "../../components/services/ServiceCreate.vue";
	import Edit from "../../components/services/ServiceEdit.vue";
	import IconEdit from '@/components/icons/IconEdit.vue';
	import IconDelete from '@/components/icons/IconDelete.vue';
	import IconAdd from '@/components/icons/IconAdd.vue';


	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const serviceId = ref(0);

	const { t } = useI18n();
	const { services, getServices, storeService, updateService, destroyService} = useServices();


	const findData = async() => {
		await getServices();
		return toRaw(services.value);
	}

	// Table
	const columns = [
		{ label: t("name"), field: 'name' },
		{ label: t('Actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
	//Store
	const showCreateService = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveServiceForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		await storeService({ ...form });
		rows.value = await findData();
		await Toast(t("message.record_saved"), 'success');
	}

	//Edit
	const showEditService = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		serviceId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateServiceForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		await updateService(id, data);
		rows.value = await findData();
		await Toast(t("message.record_updated"), 'success');
	}

	// Delete
	const showDeleteService = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyService(id);
		rows.value = await findData();
				Swal.fire(t("message.record_deleted"), '', 'success');
			}

		});

	}

	onMounted(async () => {
		rows.value = await findData();
	});


</script>

<style scoped>
</style>
