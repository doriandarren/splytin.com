<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="code" class="form-label w-full">
							{{ $t("code") }} *
						</label>
						<input
							v-model.trim="validate.code.$model"
							id="code"
							type="text"
							name="code"
							class="form-control"
							:class="{ 'border-danger': validate.code.$error }"
						/>
						<template v-if="validate.code.$error">
							<div v-for="(error, index) in validate.code.$errors" :key="index" class="text-danger mt-2">
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
						<label for="address" class="form-label w-full">
							{{ $t("address") }} *
						</label>
						<input
							v-model.trim="validate.address.$model"
							id="address"
							type="text"
							name="address"
							class="form-control"
							:class="{ 'border-danger': validate.address.$error }"
						/>
						<template v-if="validate.address.$error">
							<div v-for="(error, index) in validate.address.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="cif" class="form-label w-full">
							{{ $t("cif") }} *
						</label>
						<input
							v-model.trim="validate.cif.$model"
							id="cif"
							type="text"
							name="cif"
							class="form-control"
							:class="{ 'border-danger': validate.cif.$error }"
						/>
						<template v-if="validate.cif.$error">
							<div v-for="(error, index) in validate.cif.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="email" class="form-label w-full">
							{{ $t("email") }} *
						</label>
						<input
							v-model.trim="validate.email.$model"
							id="email"
							type="text"
							name="email"
							class="form-control"
							:class="{ 'border-danger': validate.email.$error }"
						/>
						<template v-if="validate.email.$error">
							<div v-for="(error, index) in validate.email.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="website" class="form-label w-full">
							{{ $t("website") }} *
						</label>
						<input
							v-model.trim="validate.website.$model"
							id="website"
							type="text"
							name="website"
							class="form-control"
							:class="{ 'border-danger': validate.website.$error }"
						/>
						<template v-if="validate.website.$error">
							<div v-for="(error, index) in validate.website.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="phone" class="form-label w-full">
							{{ $t("phone") }} *
						</label>
						<input
							v-model.trim="validate.phone.$model"
							id="phone"
							type="text"
							name="phone"
							class="form-control"
							:class="{ 'border-danger': validate.phone.$error }"
						/>
						<template v-if="validate.phone.$error">
							<div v-for="(error, index) in validate.phone.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="code_zip" class="form-label w-full">
							{{ $t("code_zip") }} *
						</label>
						<input
							v-model.trim="validate.code_zip.$model"
							id="code_zip"
							type="text"
							name="code_zip"
							class="form-control"
							:class="{ 'border-danger': validate.code_zip.$error }"
						/>
						<template v-if="validate.code_zip.$error">
							<div v-for="(error, index) in validate.code_zip.$errors" :key="index" class="text-danger mt-2">
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
	const emit = defineEmits(['cancelCreate', 'saveOwnCompanyForm']);

	const rules = {
		code: {
			required: helpers.withMessage(t("form.required"), required),
		},
		name: {
			required: helpers.withMessage(t("form.required"), required),
		},
		address: {
			required: helpers.withMessage(t("form.required"), required),
		},
		cif: {
			required: helpers.withMessage(t("form.required"), required),
		},
		email: {
			required: helpers.withMessage(t("form.required"), required),
		},
		website: {
			required: helpers.withMessage(t("form.required"), required),
		},
		phone: {
			required: helpers.withMessage(t("form.required"), required),
		},
		code_zip: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		code: "",
		name: "",
		address: "",
		cif: "",
		email: "",
		website: "",
		phone: "",
		code_zip: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('saveOwnCompanyForm', formData);
		}
	};

	onMounted(async () => {
		// TODO here implements...
	});

</script>
