<template>
    <div v-animate>

        <div class="flex mb-2">
		<div class="w-full bg-blue-700 h-12"></div>
	</div>
	<div class="rounded overflow-hidden shadow-lg m-20">
		<div class="px-6 py-4">
			<div class="font-bold text-2xl mb-5">Generator XML</div>

			<div class="grid grid-cols-12 gap-2">

				<div class="col-span-6 md:col-span-6 lg:col-span-6">
					<div class="input-form">
						<label for="trip_id" class="form-label w-full">
							Selecciona un archivo
						</label>
						<input
								type="file"
								id="file"
								class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
						/>
					</div>
				</div>


				<div class="col-span-6 md:col-span-6 lg:col-span-6">
					<button
							class="mt-3 py-2 px-4 bg-blue-600 text-white leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							id="btn_upload"
							@click.prevent="subirFichero"
					>
						Subir fichero
					</button>
				</div>

			</div>

		</div>


		<div class="px-6 pt-4 pb-5">

			<div class="text-2xl">
				Tablas y Columnas:
			</div>

			<div id="div_tables_columns" class="bg-gray-200"></div>

		</div>

		<hr>

		<div class="px-6 pt-4 pb-5">

			<div class="text-2xl">
				Ficheros:
			</div>

			<div id="div_list_files"></div>

		</div>

	</div>

        
    </div>
</template>

<script setup>


const subirFichero = () => {
	console.log('Subir Fichero')
}

</script>

<style lang="scss" scoped>

</style>