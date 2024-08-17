<template>

	<!-- BEGIN: Card -->
	<div class="card">
		<!-- BEGIN: Form -->
		<form @submit.prevent="save">

			<!-- BEGIN: container -->
			<div class="grid grid-cols-12 gap-6">

				<div class="col-span-12 md:col-span-6 lg:col-span-4">
					<div class="input-form">
						<label for="file" class="form-label w-full">
							{{ $t("file") }} *
						</label>
						<input
							id="file"
							type="file"
							name="file"
							class="form-control"
							:class="{ 'border-danger': validate.file.$error }"
							@change="handleFileUpload"
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

	import { onMounted, reactive, render, toRefs } from 'vue';
	import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
	import { useVuelidate } from '@vuelidate/core';
	import { helpers } from '@vuelidate/validators';
	import { useI18n } from 'vue-i18n';

	const { t } = useI18n();
	const emit = defineEmits(['cancelCreate', 'saveGeneratorVideoForm']);

	const rules = {
		file: {
			//required: helpers.withMessage(t("form.required"), required),
		},
	};

	const formData = reactive({
		file: "",
	});

	const validate = useVuelidate(rules, toRefs(formData));



	const handleFileUpload = (event) => {
		const selectedFile = event.target.files[0];
  		formData.file = selectedFile; // Almacena el archivo directamente en formData.file

  		//validate.value.$touch(); // Activar la validación si es necesario
	};











	// const save = async () => {
	// 	validate.value.$touch();

	// 	if (validate.value.$invalid) {
	// 		console.log('Form is invalid');
	// 		return;
	// 	}

	// 	// Preparar el FormData para la subida
	// 	const payload = new FormData();
	// 	payload.append('file', formData.file);

	// 	// Enviar el archivo al servidor
	// 	try {
	// 		const response = await axios.post(`${import.meta.env.VITE_API_URL}generator-videos/store`, payload, {
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 		},
	// 		onUploadProgress: (progressEvent) => {
	// 			console.log(
	// 			`Upload progress: ${(progressEvent.loaded / progressEvent.total) * 100}%`
	// 			);
	// 		},
	// 		});
	// 		console.log('Archivo subido con éxito:', response.data);
	// 		emit('saveGeneratorVideoForm', response.data); // Emitir la respuesta del servidor
	// 	} catch (error) {
	// 		console.error('Error al subir el archivo:', error);
	// 	}
	// };




	const save = async () => {
		validate.value.$touch();

		if (validate.value.$invalid) {
			console.log('Form is invalid');
			return;
		}

		// Preparar el FormData para la subida
		const payload = new FormData();
		payload.append('file', formData.file);

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}generator-videos/store`, {
			method: 'POST',
			body: payload,
			headers: {
				// No establezcas `Content-Type` manualmente, dejar que `fetch` lo maneje
				"Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
			},
			});

			if (!response.ok) {
				throw new Error('Error al subir el archivo');
			}

			const data = await response.json();
			console.log('Archivo subido con éxito:', data);
			//emit('saveGeneratorVideoForm', data); // Emitir la respuesta del servidor
		} catch (error) {
			console.error('Error al subir el archivo:', error);
		}
	};



	// const save = () => {

	// 	validate.value.$touch();
	// 	if (validate.value.$invalid) {
	// 		//TODO
	// 	} else {

	// 		emit('saveGeneratorVideoForm', formData);
	// 	}
	// };

	onMounted(async () => {
		// TODO here implements...
	});

</script>
