<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form class="validate-form" @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="company_id" class="form-label w-full">
							{{ $t("company_id") }} *
						</label>
						<input
							v-model.trim="validate.company_id.$model"
							id="company_id"
							type="text"
							name="company_id"
							class="form-control"
							:class="{ 'border-danger': validate.company_id.$error }"
						/>
						<template v-if="validate.company_id.$error">
							<div v-for="(error, index) in validate.company_id.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="name" class="form-label w-full">
							{{ $t("name") }} *
						</label>
						<input
							v-model.trim="validate.name.$model"
							id="name"
							type="text"
							name="name"
							class="form-control"
							:class="{ 'border-danger': validate.name.$error }"
						/>
						<template v-if="validate.name.$error">
							<div v-for="(error, index) in validate.name.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="total_hours" class="form-label w-full">
							{{ $t("total_hours") }} *
						</label>
						<input
							v-model.trim="validate.total_hours.$model"
							id="total_hours"
							type="text"
							name="total_hours"
							class="form-control"
							:class="{ 'border-danger': validate.total_hours.$error }"
						/>
						<template v-if="validate.total_hours.$error">
							<div v-for="(error, index) in validate.total_hours.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="current_hours" class="form-label w-full">
							{{ $t("current_hours") }} *
						</label>
						<input
							v-model.trim="validate.current_hours.$model"
							id="current_hours"
							type="text"
							name="current_hours"
							class="form-control"
							:class="{ 'border-danger': validate.current_hours.$error }"
						/>
						<template v-if="validate.current_hours.$error">
							<div v-for="(error, index) in validate.current_hours.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="started_at" class="form-label w-full">
							{{ $t("started_at") }} *
						</label>
						<input
							v-model.trim="validate.started_at.$model"
							id="started_at"
							type="date"
							name="started_at"
							class="form-control"
							:class="{ 'border-danger': validate.started_at.$error }"
						/>
						<template v-if="validate.started_at.$error">
							<div v-for="(error, index) in validate.started_at.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="finished_at" class="form-label w-full">
							{{ $t("finished_at") }} *
						</label>
						<input
							v-model.trim="validate.finished_at.$model"
							id="finished_at"
							type="date"
							name="finished_at"
							class="form-control"
							:class="{ 'border-danger': validate.finished_at.$error }"
						/>
						<template v-if="validate.finished_at.$error">
							<div v-for="(error, index) in validate.finished_at.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="description" class="form-label w-full">
							{{ $t("description") }} *
						</label>
						<input
							v-model.trim="validate.description.$model"
							id="description"
							type="text"
							name="description"
							class="form-control"
							:class="{ 'border-danger': validate.description.$error }"
						/>
						<template v-if="validate.description.$error">
							<div v-for="(error, index) in validate.description.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<!-- BEGIN: Buttons -->
				<div class="col-span-12 md:col-span-12 lg:col-span-12">
					<div class="flex justify-center">
						<button type="submit" class="btn btn-primary mr-5">
							{{ $t("save") }}
						</button>
						<button @click.prevent="emit('cancelEdit')" class="btn btn-danger">
							{{ $t("cancel") }}
						</button>
					</div>
				</div>
				<!-- END: Buttons -->

			</div>
			<!-- END: container -->

		</form>
		<!-- END: Form -->

	</div>
	<!-- END: Card -->

</template>


<script setup>

	import { onMounted, reactive, toRefs } from 'vue';
	import useProjects from '@/composables/projects';
	import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
	import { useVuelidate } from '@vuelidate/core';
	import { helpers } from '@vuelidate/validators';
	import { useI18n } from 'vue-i18n';

	const { project, getProject } = useProjects();
	const { t } = useI18n();
	const props = defineProps(['projectId']);
	const emit = defineEmits(['cancelEdit', 'updateProjectForm']);

	const rules = {
		company_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		name: {
			required: helpers.withMessage(t("form.required"), required),
		},
		total_hours: {
			required: helpers.withMessage(t("form.required"), required),
		},
		current_hours: {
			required: helpers.withMessage(t("form.required"), required),
		},
		started_at: {
			required: helpers.withMessage(t("form.required"), required),
		},
		finished_at: {
			required: helpers.withMessage(t("form.required"), required),
		},
		description: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		company_id: "",
		name: "",
		total_hours: "",
		current_hours: "",
		started_at: "",
		finished_at: "",
		description: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('updateProjectForm', project.value.id, formData);
		}
	};

	onMounted(async () => {
		await getProject(props.projectId);
		formData.company_id = project.value.company_id;
		formData.name = project.value.name;
		formData.total_hours = project.value.total_hours;
		formData.current_hours = project.value.current_hours;
		formData.started_at = project.value.started_at;
		formData.finished_at = project.value.finished_at;
		formData.description = project.value.description;
	});

</script>
