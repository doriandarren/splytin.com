<template>

	<!-- BEGIN: Page Layout Create -->
	<div v-animate v-if="isCreate">
		<Create
			@saveInvoiceHeaderForm="saveInvoiceHeaderForm"
			@cancelCreate="cancelCreate"
		/>
	</div>

	<!-- BEGIN: Page Layout Update -->
	<div v-animate v-if="isEdit">
		<Edit
			:invoiceHeaderId="invoiceHeaderId"
			@cancelEdit="cancelEdit"
			@updateInvoiceHeaderForm="updateInvoiceHeaderForm"
		/>
	</div>

	<!-- BEGIN: Table -->
	<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start justify-end">
			<div class="flex mt-5 mb-5 sm:mt-0">
				<button class="btn-primary w-1/2 sm:w-auto" @click.prevent="showCreateInvoiceHeader">
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
					<button @click="showEditInvoiceHeader(props.row.id)">
						<IconEdit class="h-6 w-8 text-primary hover:text-primary-dark" />
					</button>
					<button @click="showDeleteInvoiceHeader(props.row.id)">
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
	import useInvoiceHeaders from "../../composables/invoice_headers";
	import Create from "../../components/invoice_headers/InvoiceHeaderCreate.vue";
	import Edit from "../../components/invoice_headers/InvoiceHeaderEdit.vue";
	import IconEdit from '@/components/icons/IconEdit.vue';
	import IconDelete from '@/components/icons/IconDelete.vue';
	import IconAdd from '@/components/icons/IconAdd.vue';

	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const invoiceHeaderId = ref(0);

	const { t } = useI18n();
	const { invoiceHeaders, getInvoiceHeaders, storeInvoiceHeader, updateInvoiceHeader, destroyInvoiceHeader} = useInvoiceHeaders();


	const findData = async() => {
		await getInvoiceHeaders();
		return toRaw(invoiceHeaders.value);
	}

	// Table
	const columns = [
		{ label: t("own_company_id"), field: 'own_company.name' },
		{ label: t("company_id"), field: 'company.name' },
		{ label: t("number"), field: 'number' },
		{ label: t("date"), field: 'date' },
		{ label: t("due_date"), field: 'due_date' },
		{ label: t("total_with_vat"), field: 'total_with_vat' },
		{ label: t("has_paid"), field: 'has_paid' },
		{ label: t('actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
	//Store
	const showCreateInvoiceHeader = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveInvoiceHeaderForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		await storeInvoiceHeader({ ...form });
		rows.value = await findData();
		await Toast(t("message.record_saved"), 'success');
	}

	//Edit
	const showEditInvoiceHeader = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		invoiceHeaderId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateInvoiceHeaderForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		await updateInvoiceHeader(id, data);
		rows.value = await findData();
		await Toast(t("message.record_updated"), 'success');
	}

	// Delete
	const showDeleteInvoiceHeader = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyInvoiceHeader(id);
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
