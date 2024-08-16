<template>

	<!-- BEGIN: Page Layout Create -->
	<div v-animate v-if="isCreate">
		<Create
			@saveGeneratorVideoForm="saveGeneratorVideoForm"
			@cancelCreate="cancelCreate"
		/>
	</div>

	<!-- BEGIN: Page Layout Update -->
	<div v-animate v-if="isEdit">
		<Edit
			:generatorVideoId="generatorVideoId"
			@cancelEdit="cancelEdit"
			@updateGeneratorVideoForm="updateGeneratorVideoForm"
		/>
	</div>

	<!-- BEGIN: Table -->
	<div v-animate id="div_table">
		<div class="flex flex-col sm:flex-row xl:items-start justify-between mb-5">
			<h1 class="mt-0">{{ $t("generator_videos") }}</h1>
			<button class="btn-primary sm:w-auto" @click.prevent="showCreateGeneratorVideo">
				<div class="flex flex-row">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-1" viewBox="0 0 50 50">
					<path fill="currentColor"
						d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" />
						<path fill="currentColor" d="M16 24h18v2H16z" />
						<path fill="currentColor" d="M24 16h2v18h-2z" />
						<path fill="currentColor" d="M24 16h2v18h-2z" />
					</svg>
					{{ $t("add") }}
				</div>
			</button>
		</div>

		<!-- BEGIN: Table -->
		<div class="p-5 border rounded-md shadow-sm">
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
							<button @click="showEditGeneratorVideo(props.row.id)">
								<IconEdit class="h-6 w-6 text-primary hover:text-primary-dark" />
							</button>
							<button @click="showDeleteGeneratorVideo(props.row.id)">
								<IconDelete class="h-6 w-6 text-red-600 hover:text-red-400" />
							</button>
						</span>
					</template>
				</VueGoodTable>
			</div>

		</div>

	</div>

</template>
<script setup>
	import { ref, onMounted, toRaw } from 'vue';
	import { useI18n } from 'vue-i18n';
	import { Toast } from '@/utils/toast';
	import Swal from 'sweetalert2';
	import IconEdit from '@/components/icons/IconEdit.vue';
	import IconDelete from '@/components/icons/IconDelete.vue';
	import useGeneratorVideo from "../../composables/generator_videos";
	import Create from "../../components/generator_videos/GeneratorVideoCreate.vue";
	import Edit from "../../components/generator_videos/GeneratorVideoEdit.vue";

	// Tabulator
	const rows = ref([]);

	// Views
	const isCreate = ref(false);
	const isEdit = ref(false);
	const generatorVideoId = ref(0);

	const { t } = useI18n();
	const { generatorVideos, getGeneratorVideos, storeGeneratorVideo, updateGeneratorVideo, destroyGeneratorVideo} = useGeneratorVideo();


	const findData = async() => {
		await getGeneratorVideos();
		return toRaw(generatorVideos.value);
	}

	// Table
	const columns = [
		{ label: t("file"), field: 'file' },
		{ label: t('actions'), field: 'actions', sortable: false, searchable: false, width: '100px',},
	];
	//Store
	const showCreateGeneratorVideo = () => {
		isCreate.value = true;
		div_table.style.display = 'none';
	}

	const cancelCreate = () => {
		isCreate.value = false;
		div_table.style.display = 'block';
	}

	const saveGeneratorVideoForm = async (form) => {
		isCreate.value = false;
		div_table.style.display = 'block';
		await storeGeneratorVideo({ ...form });
		rows.value = await findData();
		await Toast(t("message.record_saved"), 'success');
	}

	//Edit
	const showEditGeneratorVideo = (id) => {
		isEdit.value = true;
		div_table.style.display = 'none';
		generatorVideoId.value = id;
	}

	const cancelEdit = async() => {
		isEdit.value = false;
		div_table.style.display = 'block';
	}

	const updateGeneratorVideoForm = async (id, data) => {
		isEdit.value = false;
		div_table.style.display = 'block';
		await updateGeneratorVideo(id, data);
		rows.value = await findData();
		await Toast(t("message.record_updated"), 'success');
	}

	// Delete
	const showDeleteGeneratorVideo = async (id, description='') => {
		Swal.fire({
			icon: 'warning',
			title: t("message.are_you_sure"),
			text: t("delete") + (description !== '' ? ': ' + description : ''),
			showCancelButton: true,
			confirmButtonText: t("delete"),
			confirmButtonColor: import.meta.env.VITE_SWEETALERT_COLOR_BTN_SUCCESS,
		}).then(async(result) => {
			if (result.isConfirmed) {
				await destroyGeneratorVideo(id);
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
