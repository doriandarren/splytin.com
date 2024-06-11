<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form class="validate-form" @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-6">
					<div class="input-form">
						<label for="project_id" class="form-label w-full">
							{{ $t("project_id") }} *
						</label>
						<input
							v-model.trim="validate.project_id.$model"
							id="project_id"
							name="project_id"
							class="form-control"
							:class="{ 'border-danger': validate.project_id.$error }"
						/>
						<template v-if="validate.project_id.$error">
							<div v-for="(error, index) in validate.project_id.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>



				<div class="col-span-12 md:col-span-6 lg:col-span-2">
					<div class="input-form">
						<label for="hours" class="form-label w-full">
							{{ $t("hours") }} *
						</label>
						<input
							v-model.trim="validate.hours.$model"
							id="hours"
							type="text"
							name="hours"
							class="form-control"
							:class="{ 'border-danger': validate.hours.$error }"
						/>
						<template v-if="validate.hours.$error">
							<div v-for="(error, index) in validate.hours.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-2">
					<div class="input-form">
						<label for="invoice_at" class="form-label w-full">
							{{ $t("invoice_at") }} *
						</label>
						<input
							v-model.trim="validate.invoice_at.$model"
							id="invoice_at"
							type="text"
							name="invoice_at"
							class="form-control"
							:class="{ 'border-danger': validate.invoice_at.$error }"
						/>
						<template v-if="validate.invoice_at.$error">
							<div v-for="(error, index) in validate.invoice_at.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-12">
					<div class="input-form">
						<label for="description" class="form-label w-full">
							{{ $t("description") }}
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
	import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
	import { useVuelidate } from '@vuelidate/core';
	import { helpers } from '@vuelidate/validators';
	import { useI18n } from 'vue-i18n';
	import useProjectHours from '../../composables/project_hours';

	const { projectHour, getProjectHour } = useProjectHours();
	const { t } = useI18n();
	const props = defineProps(['projectHourId']);
	const emit = defineEmits(['cancelEdit', 'updateProjectHourForm']);

	const rules = {
		project_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		hours: {
			required: helpers.withMessage(t("form.required"), required),
		},
		invoice_at: {
			required: helpers.withMessage(t("form.required"), required),
		},
		description: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		project_id: "",
		hours: "",
		invoice_at: "",
		description: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('updateProjectHourForm', projectHour.value.id, formData);
		}
	};

	onMounted(async () => {
		await getProjectHour(props.projectHourId);
		formData.project_id = projectHour.value.project_id;
		formData.invoice_id = projectHour.value.invoice_id;
		formData.hours = projectHour.value.hours;
		formData.invoice_at = projectHour.value.invoice_at;
		formData.is_generated = projectHour.value.is_generated.split(' ')[0];
		formData.description = projectHour.value.description;
	});

</script>
