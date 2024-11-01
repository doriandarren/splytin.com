<template>
	<!-- BEGIN: Page Layout Create -->
	<div v-animate v-if="isCreate">
		<Create
			@saveCompanyForm="saveCompanyForm"
			@cancelCreate="cancelCreate"
		/>
	</div>

	<!-- BEGIN: Page Layout Update -->
	<div v-animate v-if="isEdit">
		<Edit
			:companyId="companyId"
			@cancelEdit="cancelEdit"
			@updateCompanyForm="updateCompanyForm"
		/>
	</div>

	<!-- BEGIN: Table -->
	<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start justify-end">
			<div class="flex mt-5 mb-5 sm:mt-0">
				<button class="btn-primary w-1/2 sm:w-auto" @click.prevent="showCreateCompany">
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
					<button @click="showEditCompany(props.row.id)">
						<IconEdit class="h-6 w-8 text-primary hover:text-primary-dark" />
					</button>
					<button @click="showDeleteCompany(props.row.id)">
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
	import useCompanies from "../../composables/companies";
	import Create from "../../components/companies/CompanyCreate.vue";
	import Edit from "../../components/companies/CompanyEdit.vue";
	import IconEdit from '@/components/icons/IconEdit.vue';
	import IconDelete from '@/components/icons/IconDelete.vue';
	import IconAdd from '@/components/icons/IconAdd.vue';

	

	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const companyId = ref(0);

	const { t } = useI18n();
	const { companies, companyErrors, getCompanies, storeCompany, updateCompany, destroyCompany} = useCompanies();


	const findData = async() => {
		await getCompanies();
		return toRaw(companies.value);
	}

	// Table
	const columns = [
		{ label: t("country_id"), field: 'country.common_name' },
		{ label: t("name"), field: 'name' },
		{ label: t("tax"), field: 'tax' },
		{ label: t("email"), field: 'email' },
		{ label: t('actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
	//Store
	const showCreateCompany = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveCompanyForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		await storeCompany({ ...form });
		


		if (companyErrors.value.length === 0) {
            await Toast(t("message.record_saved"), 'success');
        }else{
            const errorMessages = companyErrors.value.flatMap(errorObj => Object.values(errorObj).flat()).join(', ');
            await Toast(errorMessages, 'error');
        }
		rows.value = await findData();
		
	}

	//Edit
	const showEditCompany = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		companyId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateCompanyForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		await updateCompany(id, data);
		rows.value = await findData();
		await Toast(t("message.record_updated"), 'success');
	}

	// Delete
	const showDeleteCompany = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyCompany(id);
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
