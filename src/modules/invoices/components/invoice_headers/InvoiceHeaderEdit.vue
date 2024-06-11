<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form class="validate-form" @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="invoice_counter_id" class="form-label w-full">
							{{ $t("invoice_counter_id") }} *
						</label>
						<input
							v-model.trim="validate.invoice_counter_id.$model"
							id="invoice_counter_id"
							type="text"
							name="invoice_counter_id"
							class="form-control"
							:class="{ 'border-danger': validate.invoice_counter_id.$error }"
						/>
						<template v-if="validate.invoice_counter_id.$error">
							<div v-for="(error, index) in validate.invoice_counter_id.$errors" :key="index" class="text-danger mt-2">
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
						<input
							v-model.trim="validate.own_company_id.$model"
							id="own_company_id"
							type="text"
							name="own_company_id"
							class="form-control"
							:class="{ 'border-danger': validate.own_company_id.$error }"
						/>
						<template v-if="validate.own_company_id.$error">
							<div v-for="(error, index) in validate.own_company_id.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="company_id" class="form-label w-full">
							{{ $t("country") }} *
						</label>
						<select 
							v-model.trim="validate.company_id.$model"
							id="company_id"
							type="text"
							name="company_id"
							class="form-control"
							:class="{ 'border-danger': validate.company_id.$error }"
						>
							<option value="">{{ $t("form.select") }}</option>
							
							<option 
								v-for="country in countries" 
								:key="country.id" 
								:value="country.id"
							>
								{{ country.common_name }}
							</option>
						</select>
						<template v-if="validate.company_id.$error">
							<div v-for="(error, index) in validate.company_id.$errors" :key="index" class="text-danger mt-2">
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


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="due_date" class="form-label w-full">
							{{ $t("due_date") }} *
						</label>
						<input
							v-model.trim="validate.due_date.$model"
							id="due_date"
							type="date"
							name="due_date"
							class="form-control"
							:class="{ 'border-danger': validate.due_date.$error }"
						/>
						<template v-if="validate.due_date.$error">
							<div v-for="(error, index) in validate.due_date.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="month" class="form-label w-full">
							{{ $t("month") }} *
						</label>
						<input
							v-model.trim="validate.month.$model"
							id="month"
							type="text"
							name="month"
							class="form-control"
							:class="{ 'border-danger': validate.month.$error }"
						/>
						<template v-if="validate.month.$error">
							<div v-for="(error, index) in validate.month.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="year" class="form-label w-full">
							{{ $t("year") }} *
						</label>
						<input
							v-model.trim="validate.year.$model"
							id="year"
							type="text"
							name="year"
							class="form-control"
							:class="{ 'border-danger': validate.year.$error }"
						/>
						<template v-if="validate.year.$error">
							<div v-for="(error, index) in validate.year.$errors" :key="index" class="text-danger mt-2">
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


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="vat_quote" class="form-label w-full">
							{{ $t("vat_quote") }} *
						</label>
						<input
							v-model.trim="validate.vat_quote.$model"
							id="vat_quote"
							type="text"
							name="vat_quote"
							class="form-control"
							:class="{ 'border-danger': validate.vat_quote.$error }"
						/>
						<template v-if="validate.vat_quote.$error">
							<div v-for="(error, index) in validate.vat_quote.$errors" :key="index" class="text-danger mt-2">
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
						<input
							v-model.trim="validate.total_without_vat.$model"
							id="total_without_vat"
							type="text"
							name="total_without_vat"
							class="form-control"
							:class="{ 'border-danger': validate.total_without_vat.$error }"
						/>
						<template v-if="validate.total_without_vat.$error">
							<div v-for="(error, index) in validate.total_without_vat.$errors" :key="index" class="text-danger mt-2">
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
						<input
							v-model.trim="validate.total_with_vat.$model"
							id="total_with_vat"
							type="text"
							name="total_with_vat"
							class="form-control"
							:class="{ 'border-danger': validate.total_with_vat.$error }"
						/>
						<template v-if="validate.total_with_vat.$error">
							<div v-for="(error, index) in validate.total_with_vat.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="has_paid" class="form-label w-full">
							{{ $t("has_paid") }} *
						</label>
						<input
							v-model.trim="validate.has_paid.$model"
							id="has_paid"
							type="text"
							name="has_paid"
							class="form-control"
							:class="{ 'border-danger': validate.has_paid.$error }"
						/>
						<template v-if="validate.has_paid.$error">
							<div v-for="(error, index) in validate.has_paid.$errors" :key="index" class="text-danger mt-2">
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
	import useCompany from "../../composables/companies";
	import useCountry from "../../composables/countries";
	import useInvoiceHeaders from '../../composables/invoice_headers';

	const { invoiceHeader, getInvoiceHeader } = useInvoiceHeaders();
	const { t } = useI18n();
	const props = defineProps(['invoiceHeaderId']);
	const emit = defineEmits(['cancelEdit', 'updateInvoiceHeaderForm']);

	const {companies, getCompanies} = useCompany();
	const {countries, getCountries} = useCountry();


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
		number: {
			required: helpers.withMessage(t("form.required"), required),
		},
		date: {
			required: helpers.withMessage(t("form.required"), required),
		},
		due_date: {
			required: helpers.withMessage(t("form.required"), required),
		},
		month: {
			required: helpers.withMessage(t("form.required"), required),
		},
		year: {
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
		has_paid: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		invoice_counter_id: "",
		own_company_id: "",
		company_id: "",
		number: "",
		date: "",
		due_date: "",
		month: "",
		year: "",
		description: "",
		vat_quote: "",
		total_without_vat: "",
		total_with_vat: "",
		has_paid: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('updateInvoiceHeaderForm', invoiceHeader.value.id, formData);
		}
	};

	onMounted(async () => {
		await getInvoiceHeader(props.invoiceHeaderId);
		formData.invoice_counter_id = invoiceHeader.value.invoice_counter_id;
		formData.own_company_id = invoiceHeader.value.own_company_id;
		formData.company_id = invoiceHeader.value.company_id;
		formData.number = invoiceHeader.value.number;
		formData.date = invoiceHeader.value.date.split(' ')[0];
		formData.due_date = invoiceHeader.value.due_date.split(' ')[0];
		formData.month = invoiceHeader.value.month;
		formData.year = invoiceHeader.value.year;
		formData.description = invoiceHeader.value.description;
		formData.vat_quote = invoiceHeader.value.vat_quote;
		formData.total_without_vat = invoiceHeader.value.total_without_vat;
		formData.total_with_vat = invoiceHeader.value.total_with_vat;
		formData.has_paid = invoiceHeader.value.has_paid;

		await getCountries();

	});

</script>
