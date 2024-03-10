<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form class="validate-form" @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="invoice_header_id" class="form-label w-full">
							{{ $t("invoice_header_id") }} *
						</label>
						<input
							v-model.trim="validate.invoice_header_id.$model"
							id="invoice_header_id"
							type="text"
							name="invoice_header_id"
							class="form-control"
							:class="{ 'border-danger': validate.invoice_header_id.$error }"
						/>
						<template v-if="validate.invoice_header_id.$error">
							<div v-for="(error, index) in validate.invoice_header_id.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="vat" class="form-label w-full">
							{{ $t("vat") }} *
						</label>
						<input
							v-model.trim="validate.vat.$model"
							id="vat"
							type="text"
							name="vat"
							class="form-control"
							:class="{ 'border-danger': validate.vat.$error }"
						/>
						<template v-if="validate.vat.$error">
							<div v-for="(error, index) in validate.vat.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="unit_prices" class="form-label w-full">
							{{ $t("unit_prices") }} *
						</label>
						<input
							v-model.trim="validate.unit_prices.$model"
							id="unit_prices"
							type="text"
							name="unit_prices"
							class="form-control"
							:class="{ 'border-danger': validate.unit_prices.$error }"
						/>
						<template v-if="validate.unit_prices.$error">
							<div v-for="(error, index) in validate.unit_prices.$errors" :key="index" class="text-danger mt-2">
						{{ error.$message }}
							</div>
						</template>
					</div>
				</div>


				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="total" class="form-label w-full">
							{{ $t("total") }} *
						</label>
						<input
							v-model.trim="validate.total.$model"
							id="total"
							type="text"
							name="total"
							class="form-control"
							:class="{ 'border-danger': validate.total.$error }"
						/>
						<template v-if="validate.total.$error">
							<div v-for="(error, index) in validate.total.$errors" :key="index" class="text-danger mt-2">
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
	import useInvoiceLines from '@/composables/invoice_lines';
	import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
	import { useVuelidate } from '@vuelidate/core';
	import { helpers } from '@vuelidate/validators';
	import { useI18n } from 'vue-i18n';

	const { invoiceLine, getInvoiceLine } = useInvoiceLines();
	const { t } = useI18n();
	const props = defineProps(['invoiceLineId']);
	const emit = defineEmits(['cancelEdit', 'updateInvoiceLineForm']);

	const rules = {
		invoice_header_id: {
			required: helpers.withMessage(t("form.required"), required),
		},
		vat: {
			required: helpers.withMessage(t("form.required"), required),
		},
		unit_prices: {
			required: helpers.withMessage(t("form.required"), required),
		},
		total: {
			required: helpers.withMessage(t("form.required"), required),
		},
		description: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		invoice_header_id: "",
		vat: "",
		unit_prices: "",
		total: "",
		description: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('updateInvoiceLineForm', invoiceLine.value.id, formData);
		}
	};

	onMounted(async () => {
		await getInvoiceLine(props.invoiceLineId);
		formData.invoice_header_id = invoiceLine.value.invoice_header_id;
		formData.vat = invoiceLine.value.vat;
		formData.unit_prices = invoiceLine.value.unit_prices;
		formData.total = invoiceLine.value.total;
		formData.description = invoiceLine.value.description;
	});

</script>
