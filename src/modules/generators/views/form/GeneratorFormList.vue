<template>
    <div v-animate>

        <div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">Generator en CARPETA Splytin (SE GUARDA EN STORAGE)</div>
			


			<div class="form-group mb-6 mt-5">
				<label class="block tracking-wide text-gray-700 text-xs font-bold mb-3" for="destination_path">
					<span class="uppercase">Ruta Destino Laravel</span>
				</label>

				<span
						class="inline-flex items-center cursor-pointer justify-center px-4 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 hover:bg-blue-500 rounded-full"
						onclick="changePill(this)"
				>
						/var/www/harineras-api.globalfleet.es
					</span>

				<span
						class="inline-flex items-center cursor-pointer justify-center px-4 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 hover:bg-blue-500 rounded-full"
						onclick="changePill(this)"
				>
						/var/www/php84/api.splytin.com
					</span>

				<span
						class="inline-flex items-center cursor-pointer justify-center px-4 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 hover:bg-blue-500 rounded-full"
						onclick="changePill(this)"
				>
						/var/www/erp-api.globalfleet.es
					</span>

				<span
						class="inline-flex items-center cursor-pointer justify-center px-4 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 hover:bg-blue-500 rounded-full"
						onclick="changePill(this)"
				>
						/var/www/portuarios.globalfleet.es
					</span>


				<input
						type="text"
						class="appearance-none mt-2 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="destination_path"
				>
			</div>



			<div class="form-group mb-6 mt-5">
				<label class="block tracking-wide text-gray-700 text-xs font-bold mb-3" for="destination_path_vuejs">
					<span class="uppercase">Ruta Destino VueJs</span>
				</label>

				<span
						class="inline-flex items-center cursor-pointer justify-center px-4 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 hover:bg-blue-500 rounded-full"
						onclick="changePillVuejs(this)"
				>
						/home/dorian/VueJsProjects/splytin.com
					</span>

				<span
						class="inline-flex items-center cursor-pointer justify-center px-4 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 hover:bg-blue-500 rounded-full"
						onclick="changePillVuejs(this)"
				>
						/otro
					</span>

				<input
						type="text"
						class="appearance-none mt-2 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="destination_path_vuejs"
				>
			</div>




			<div class="grid grid-cols-3 gap-4 mt-10">
				<div class="col-span-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
						Tipo
					</label>
				</div>
				<div class="col-span-3">
					<div>
						<label for="all_ck">Todos</label>
						<input type="checkbox" name="all_ck" id="all_ck" checked>
					</div>
				</div>
				<div class="col-span-3">
					<div class="grid grid-cols-3">
						<div class="col-span-1">
							<div class="flex flex-col">
								<div class="mb-3">
									<label for="list_ck">List</label>
									<input type="checkbox" name="list_ck" id="list_ck" checked>
								</div>
								<div class="mb-3">
									<label for="show_ck">Show</label>
									<input type="checkbox" name="show_ck" id="show_ck" checked>
								</div>
								<div class="mb-3">
									<label for="store_ck">Store</label>
									<input type="checkbox" name="store_ck" id="store_ck" checked>
								</div>
								<div class="mb-3">
									<label for="update_ck">Update</label>
									<input type="checkbox" name="update_ck" id="update_ck" checked>
								</div>
								<div class="mb-3">
									<label for="destroy_ck">Destroy</label>
									<input type="checkbox" name="destroy_ck" id="destroy_ck" checked>
								</div>
							</div>
						</div>
						<div class="col-span-1">
							<div class="flex flex-col">
								<div class="mb-3">
									<label for="model_ck">Model</label>
									<input type="checkbox" name="model_ck" id="model_ck" checked>
								</div>
								<div class="mb-3">
									<label for="repository_ck">Repository</label>
									<input type="checkbox" name="repository_ck" id="repository_ck" checked>
								</div>
								<div class="mb-3">
									<label for="route_ck">Route</label>
									<input type="checkbox" name="route_ck" id="route_ck" checked>
								</div>
							</div>
						</div>
						<div class="col-span-1">
							<div class="flex flex-col">
								<div class="mb-3">
									<label for="migration_ck">Migration</label>
									<input type="checkbox" name="migration_ck" id="migration_ck" checked>
								</div>
								<div class="mb-3">
									<label for="seeder_ck">Seeder</label>
									<input type="checkbox" name="seeder_ck" id="seeder_ck" checked>
								</div>
								<div class="mb-3">
									<label for="factory_ck">Factory</label>
									<input type="checkbox" name="factory_ck" id="factory_ck" checked>
								</div>
								<div class="mb-3">
									<label for="migration_ck">TestUnit</label>
									<input type="checkbox" name="testunit_ck" id="testunit_ck" checked>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4 mt-10">
				<div class="form-group mb-6">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="template_type">
						Plantilla
					</label>
					<div class="relative">
						<select
							id="template_type"
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						>
							<option value="1">Principal</option>
							<option value="2">App v1</option>
							<option value="3" selected>Vuexy v1</option>
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
				<div class="form-group mb-6">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
						Tabla Singular
					</label>
					<input
						type="text"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="table_singular"
						value="telepassElconSpain"
					>
				</div>
				<div class="form-group mb-6">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
						Tabla Plural
					</label>
					<input
						type="text"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="table_plural"
						value="telepassElconSpains"
					>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4 mb-6">
				<div class="form-group mb-6">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
						Nombre espacio / Bounded
					</label>
					<input
						type="text"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="name_space"
						value="INVOICES"
					>
				</div>
				<div class="form-group mb-6">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="relation_type_id">
						Tipo de Relación
					</label>
					<div class="relative">
						<select
							id="relation_type_id"
							class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						>
							<option value="1">hasMany</option>
							<option value="2">belongTo</option>
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
				<div class="form-group mb-6">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="relation_class_id">
						Clase Relacional
					</label>
					<input
						type="text"
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="relation_class_id"
						value="ClassRelacion"
					>
				</div>
			</div>

			<hr>

			<div class="grid grid-cols-12 gap-2 mb-6">
				<div class="col-span-10">
					<div class="form-group mb-5">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
							Nombres de Columnas
						</label>
						<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="input_format"
								type="text"
						>
					</div>
				</div>

				<div class="col-span-2">
					<div class="mt-6">
						<button
								class="px-3 py-3 text-sm bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								id="btn_format"
								@click="agregarColumnas"
						>
							Agregar columnas
						</button>
					</div>
				</div>
			</div>

			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
						Columnas
					</label>
					<div id="div_column"></div>
				</div>
			</div>
		</div>
		<div class="px-6 pt-4 pb-5 text-center">
			<button
				class="px-3 py-3 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				id="save"
				@click="generar"
			>
				Generar
			</button>
		</div>
	

    </div>
</template>

<script setup>

const agregarColumnas = () => {
	console.log('Agregar columnas')
}

const generar = () => {
	console.log('generar')
}
</script>

<style lang="scss" scoped>

</style>