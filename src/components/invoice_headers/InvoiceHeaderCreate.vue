<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="own_companies_id" class="form-label w-full">
							{{ $t("own_companies_id") }} *
						</label>
						<input
							v-model.trim="validate.own_companies_id.$model"
							id="own_companies_id"
							type="text"
							name="own_companies_id"
							class="form-control"
							:class="{ 'border-danger': validate.own_companies_id.$error }"
						/>
						<template v-if="validate.own_companies_id.$error">
							<div v-for="(error, index) in validate.own_companies_id.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


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
						<label for="project_id" class="form-label w-full">
							{{ $t("project_id") }} *
						</label>
						<input
							v-model.trim="validate.project_id.$model"
							id="project_id"
							type="text"
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


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="number" class="form-label w-full">
							{{ $t("number") }} *
						</label>
						<input
							v-model.trim="validate.number.$model"
							id="number"
							type="text"
							name="number"
							class="form-control"
							:class="{ 'border-danger': validate.number.$error }"
						/>
						<template v-if="validate.number.$error">
							<div v-for="(error, index) in validate.number.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="date" class="form-label w-full">
							{{ $t("date") }} *
						</label>
						<input
							v-model.trim="validate.date.$model"
							id="date"
							type="date"
							name="date"
							class="form-control"
							:class="{ 'border-danger': validate.date.$error }"
						/>
						<template v-if="validate.date.$error">
							<div v-for="(error, index) in validate.date.$errors" :key="index" class="text-danger mt-2">
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
						<button @click.prevent="emit('cancelCreate')" class="btn btn-danger">
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

	const { t } = useI18n();
	const emit = defineEmits(['cancelCreate', 'saveInvoiceHeaderForm']);

	const rules = {
		own_companies_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		company_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		project_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		number: {
			required: helpers.withMessage(t("form.required"), required),
		},
		date: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		own_companies_id: "",
		company_id: "",
		project_id: "",
		number: "",
		date: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('saveInvoiceHeaderForm', formData);
		}
	};

	onMounted(async () => {
		// TODO here implements...
	});

</script>
