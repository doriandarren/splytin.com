<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="invoice_counter_id" class="form-label w-full">
							{{ $t("invoice_counter_id") }} *
						</label>
						<!-- <input v-model.trim="validate.invoice_counter_id.$model" id="invoice_counter_id" type="text"
							name="invoice_counter_id" class="form-control"
							:class="{ 'border-danger': validate.invoice_counter_id.$error }" /> -->

							<select
							v-model.trim="validate.invoice_counter_id.$model"
                            id="invoice_counter_id"
                            name="invoice_counter_id"
                            class="form-control"
                            :class="{ 'border-danger': validate.invoice_counter_id.$error }"
						>
							<option value="">{{ $t("form.select") }}</option>
							<option 
                				v-for="item in invoiceCounters" 
                				:key="item.id" 
                				:value="item.id"
              				>
                				{{ item.name }}
							</option>

						</select>

						<template v-if="validate.invoice_counter_id.$error">
							<div v-for="(error, index) in validate.invoice_counter_id.$errors" :key="index"
								class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="own_company_id" class="form-label w-full">
							{{ $t("own_company_id") }} *
						</label>

						<!-- <input
                            v-model.trim="validate.own_company_id.$model"
                            id="own_company_id"
                            type="text"
                            name="own_company_id"
                            class="form-control"
                            :class="{ 'border-danger': validate.own_company_id.$error }"
                        /> -->
						<select
							v-model.trim="validate.own_company_id.$model"
                            id="own_company_id"
                            name="own_company_id"
                            class="form-control"
                            :class="{ 'border-danger': validate.own_company_id.$error }"
						>
							<option value="">{{ $t("form.select") }}</option>
							<option 
                				v-for="item in ownCompanies" 
                				:key="item.id" 
                				:value="item.id"
              				>
                				{{ item.name }}
							</option>

						</select>


						<template v-if="validate.own_company_id.$error">
							<div v-for="(error, index) in validate.own_company_id.$errors" :key="index"
								class="text-danger mt-2">
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
						
						<select
							v-model.trim="validate.company_id.$model" id="company_id" name="company_id"
							class="form-control" :class="{ 'border-danger': validate.company_id.$error }"
						>

							<option value="">{{ $t("form.select") }}</option>

							<option v-for="item in companies" :key="item.id" :value="item.id">
								{{ item.name }}
							</option>

						</select>

						<template v-if="validate.company_id.$error">
							<div v-for="(error, index) in validate.company_id.$errors" :key="index"
								class="text-danger mt-2">
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
						<input v-model.trim="validate.date.$model" id="date" type="date" name="date"
							class="form-control" :class="{ 'border-danger': validate.date.$error }" />
						<template v-if="validate.date.$error">
							<div v-for="(error, index) in validate.date.$errors" :key="index" class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="due_date" class="form-label w-full">
							{{ $t("due_date") }} *
						</label>
						<input v-model.trim="validate.due_date.$model" id="due_date" type="date" name="due_date"
							class="form-control" :class="{ 'border-danger': validate.due_date.$error }" />
					

						<template v-if="validate.due_date.$error">
							<div v-for="(error, index) in validate.due_date.$errors" :key="index"
								class="text-danger mt-2">
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
						<input v-model.trim="validate.description.$model" id="description" type="text"
							name="description" class="form-control"
							:class="{ 'border-danger': validate.description.$error }" />
						<template v-if="validate.description.$error">
							<div v-for="(error, index) in validate.description.$errors" :key="index"
								class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="vat_quote" class="form-label w-full">
							{{ $t("vat_quote") }} *
						</label>
						<input v-model.trim="validate.vat_quote.$model" id="vat_quote" type="text" name="vat_quote"
							class="form-control" :class="{ 'border-danger': validate.vat_quote.$error }" />
						<template v-if="validate.vat_quote.$error">
							<div v-for="(error, index) in validate.vat_quote.$errors" :key="index"
								class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="total_without_vat" class="form-label w-full">
							{{ $t("total_without_vat") }} *
						</label>
						<input v-model.trim="validate.total_without_vat.$model" id="total_without_vat" type="text"
							name="total_without_vat" class="form-control"
							:class="{ 'border-danger': validate.total_without_vat.$error }" />
						<template v-if="validate.total_without_vat.$error">
							<div v-for="(error, index) in validate.total_without_vat.$errors" :key="index"
								class="text-danger mt-2">
								{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="total_with_vat" class="form-label w-full">
							{{ $t("total_with_vat") }} *
						</label>
						<input v-model.trim="validate.total_with_vat.$model" id="total_with_vat" type="text"
							name="total_with_vat" class="form-control"
							:class="{ 'border-danger': validate.total_with_vat.$error }" />
						<template v-if="validate.total_with_vat.$error">
							<div v-for="(error, index) in validate.total_with_vat.$errors" :key="index"
								class="text-danger mt-2">
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
import useCompany from "../../composables/companies";
import useOwnCompany from "../../composables/own_companies";
import useInvoinceCounter from "../../composables/invoice_counters";



const { t } = useI18n();
const emit = defineEmits(['cancelCreate', 'saveInvoiceHeaderForm']);

const { companies, getCompanies } = useCompany();
const { ownCompanies, getOwnCompanies } = useOwnCompany();
const { invoiceCounters, getInvoiceCounters } = useInvoinceCounter();

const rules = {
	invoice_counter_id: {
		required: helpers.withMessage(t("form.required"), required),
	},
	own_company_id: {
		required: helpers.withMessage(t("form.required"), required),
	},
	company_id: {
		required: helpers.withMessage(t("form.required"), required),
	},

	date: {
		required: helpers.withMessage(t("form.required"), required),
	},
	due_date: {
		required: helpers.withMessage(t("form.required"), required),
	},

	description: {
		required: helpers.withMessage(t("form.required"), required),
	},
	vat_quote: {
		required: helpers.withMessage(t("form.required"), required),
	},
	total_without_vat: {
		required: helpers.withMessage(t("form.required"), required),
	},
	total_with_vat: {
		required: helpers.withMessage(t("form.required"), required),
	},
};

const formData = reactive({
	invoice_counter_id: "",
	own_company_id: "",
	company_id: "",
	date: "",
	due_date: "",
	description: "",
	vat_quote: "",
	total_without_vat: "",
	total_with_vat: "",
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
	await getCompanies();
	await getOwnCompanies();
	await getInvoiceCounters();
	console.log(invoiceCounters.value)
});

</script>
