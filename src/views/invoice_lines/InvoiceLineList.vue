<template>

	<!-- BEGIN: Page Layout Create -->
	<div v-animate v-if="isCreate">
		<Create
			@saveInvoiceLineForm="saveInvoiceLineForm"
			@cancelCreate="cancelCreate"
		/>
	</div>

	<!-- BEGIN: Page Layout Update -->
	<div v-animate v-if="isEdit">
		<Edit
			:invoiceLineId="invoiceLineId"
			@cancelEdit="cancelEdit"
			@updateInvoiceLineForm="updateInvoiceLineForm"
		/>
	</div>

	<!-- BEGIN: Table -->
	<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start justify-end">
			<div class="flex mt-5 mb-5 sm:mt-0">
				<button class="btn-primary w-1/2 sm:w-auto" @click.prevent="showCreateInvoiceLine">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 50 50">
				<path fill="currentColor"
					d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" />
					<path fill="currentColor" d="M16 24h18v2H16z" />
					<path fill="currentColor" d="M24 16h2v18h-2z" />
				</svg>
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
					<button @click="showEditInvoiceLine(props.row.id)">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 hover:text-blue-400" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"/><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"/></svg>
					</button>
					<button @click="showDeleteInvoiceLine(props.row.id)">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 hover:text-red-400" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg>
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
	import useInvoiceLines from "@/composables/invoice_lines";
	import Create from "@/components/invoice_lines/InvoiceLineCreate.vue";
	import Edit from "@/components/invoice_lines/InvoiceLineEdit.vue";

	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const invoiceLineId = ref(0);

	const { t } = useI18n();
	const { invoiceLines, getInvoiceLines, storeInvoiceLine, updateInvoiceLine, destroyInvoiceLine} = useInvoiceLines();


	const findData = async() => {
		await getInvoiceLines();
		return toRaw(invoiceLines.value);
	}

	// Table
	const columns = [
		{ label: t("invoice_header_id"), field: 'invoice_header_id' },
		{ label: t("vat"), field: 'vat' },
		{ label: t("unit_prices"), field: 'unit_prices' },
		{ label: t("total"), field: 'total' },
		{ label: t("description"), field: 'description' },
		{ label: t('Actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
	//Store
	const showCreateInvoiceLine = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveInvoiceLineForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		await storeInvoiceLine({ ...form });
		rows.value = await findData();
		await Toast(t("message.record_saved"), 'success');
	}

	//Edit
	const showEditInvoiceLine = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		invoiceLineId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateInvoiceLineForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		await updateInvoiceLine(id, data);
		rows.value = await findData();
		await Toast(t("message.record_updated"), 'success');
	}

	// Delete
	const showDeleteInvoiceLine = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyInvoiceLine(id);
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
