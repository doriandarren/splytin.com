<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form class="validate-form" @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="file" class="form-label w-full">
							{{ $t("file") }} *
						</label>
						<input
							v-model.trim="validate.file.$model"
							id="file"
							type="text"
							name="file"
							class="form-control"
							:class="{ 'border-danger': validate.file.$error }"
						/>
						<template v-if="validate.file.$error">
							<div v-for="(error, index) in validate.file.$errors" :key="index" class="text-danger mt-2">
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
	import useGeneratorVideos from '../../composables/generator_videos';
	import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
	import { useVuelidate } from '@vuelidate/core';
	import { helpers } from '@vuelidate/validators';
	import { useI18n } from 'vue-i18n';

	const { generatorVideo, getGeneratorVideo } = useGeneratorVideos();
	const { t } = useI18n();
	const props = defineProps(['generatorVideoId']);
	const emit = defineEmits(['cancelEdit', 'updateGeneratorVideoForm']);

	const rules = {
		file: {
			required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		file: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));

	const save = () => {
		validate.value.$touch();
		if (validate.value.$invalid) {
			//TODO
		} else {
			emit('updateGeneratorVideoForm', generatorVideo.value.id, formData);
		}
	};

	onMounted(async () => {
		await getGeneratorVideo(props.generatorVideoId);
		formData.file = generatorVideo.value.file;
	});

</script>
