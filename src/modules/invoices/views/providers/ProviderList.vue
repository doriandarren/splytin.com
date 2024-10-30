<template>

	<!-- BEGIN: Page Layout Create -->
	<div v-animate v-if="isCreate">
		<Create
			@saveProviderForm="saveProviderForm"
			@cancelCreate="cancelCreate"
		/>
	</div>

	<!-- BEGIN: Page Layout Update -->
	<div v-animate v-if="isEdit">
		<Edit
			:providerId="providerId"
			@cancelEdit="cancelEdit"
			@updateProviderForm="updateProviderForm"
		/>
	</div>

	<!-- BEGIN: Table -->
	<div v-animate class="p-5 border rounded-md shadow-sm" id="div_table">
		<div class="flex flex-col sm:flex-row sm:items-end xl:items-start justify-end">
			<div class="flex mt-5 mb-5 sm:mt-0">
				<button class="btn-primary w-1/2 sm:w-auto" @click.prevent="showCreateProvider">
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
					<button @click="showEditProvider(props.row.id)">
						<IconEdit class="h-6 w-8 text-primary hover:text-primary-dark" />
					</button>
					<button @click="showDeleteProvider(props.row.id)">
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
	import useProviders from "../../composables/providers";
	import Create from "../../components/providers/ProviderCreate.vue";
	import Edit from "../../components/providers/ProviderEdit.vue";
	import IconEdit from '@/components/icons/IconEdit.vue';
	import IconDelete from '@/components/icons/IconDelete.vue';
	import IconAdd from '@/components/icons/IconAdd.vue';


	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const providerId = ref(0);

	const { t } = useI18n();
	const { providers, providerErrors, getProviders, storeProvider, updateProvider, destroyProvider} = useProviders();


	const findData = async() => {
		await getProviders();
		return toRaw(providers.value);
	}

	// Table
	const columns = [
		{ label: t("service_id"), field: 'service_id' },
		{ label: t("code"), field: 'code' },
		{ label: t("name"), field: 'name' },
		{ label: t('Actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
	//Store
	const showCreateProvider = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveProviderForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		await storeProvider({ ...form });
		
		if (providerErrors.value.length === 0) {
			await Toast(t("message.record_updated"), 'success');
		}else{
			const errorMessages = providerErrors.value.flatMap(errorObj => Object.values(errorObj).flat()).join(', ');
			await Toast(errorMessages, 'error');
		}

		rows.value = await findData();
		
	}

	//Edit
	const showEditProvider = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		providerId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateProviderForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		await updateProvider(id, data);

		if (providerErrors.value.length === 0) {
			await Toast(t("message.record_updated"), 'success');
		}else{
			const errorMessages = providerErrors.value.flatMap(errorObj => Object.values(errorObj).flat()).join(', ');
			await Toast(errorMessages, 'error');
		}

		rows.value = await findData();
		
	}

	// Delete
	const showDeleteProvider = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyProvider(id);
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
