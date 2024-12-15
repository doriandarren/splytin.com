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

						<select 
							v-model.trim="validate.company_id.$model"
							id="company_id"
							name="company_id"
							class="form-control"
							:class="{ 'border-danger': validate.company_id.$error }"
						>

							<option value="">{{ $t("form.select") }}</option>
							<option 
								v-for="item in companies" 
								:key="item.id" 
								:value="item.id"
								>
								{{ item.name }}
							</option>


						</select>

						<!-- <input
							v-model.trim="validate.company_id.$model"
							id="company_id"
							type="text"
							name="company_id"
							class="form-control"
							:class="{ 'border-danger': validate.company_id.$error }"
						/> -->
						<template v-if="validate.company_id.$error">
							<div v-for="(error, index) in validate.company_id.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="service_id" class="form-label w-full">
							{{ $t("service_id") }} *
						</label>
						<!-- <input
							v-model.trim="validate.service_id.$model"
							id="service_id"
							type="text"
							name="service_id"
							class="form-control"
							:class="{ 'border-danger': validate.service_id.$error }"
						/> -->
						<select v-model.trim="validate.service_id.$model"
							id="service_id"
							name="service_id"
							class="form-control"
							:class="{ 'border-danger': validate.service_id.$error }"
						>

							<option value="">{{ $t("form.select") }}</option>
							<option 
								v-for="item in services" 
								:key="item.id" 
								:value="item.id"
								>
								{{ item.name }}
							</option>

						</select>


						<template v-if="validate.service_id.$error">
							<div v-for="(error, index) in validate.service_id.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


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
	import useCustomers from '../../composables/customers';
	import useCompany from "../../composables/companies";
	import useService from "../../composables/countries";


	const {services, getServices} = useService();
	const { companies, getCompanies} = useCompany();
	const { customer, getCustomer } = useCustomers();
	const { t } = useI18n();
	const props = defineProps(['customerId']);
	const emit = defineEmits(['cancelEdit', 'updateCustomerForm']);

	const rules = {
		company_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		service_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		code: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		company_id: "",
		service_id: "",
		code: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('updateCustomerForm', customer.value.id, formData);
		}
	};

	onMounted(async () => {
		await getServices();
		await getCompanies();
		
		await getCustomer(props.customerId);
		formData.company_id = customer.value.company_id;
		formData.service_id = customer.value.service_id;
		formData.code = customer.value.code;
	});

</script>
