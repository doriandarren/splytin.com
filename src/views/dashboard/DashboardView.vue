
<template>
    <div>
        <h1>desde dashboard</h1>

        <div class="intro-y box p-5 mt-5">

            <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
                <div class="relative sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
                    <input id="tabulator-html-filter-value" v-model="filter.value" type="text"
                        class="w-full xl:w-[600px] form-control mt-2 sm:mt-0" :placeholder="$t('search')"
                        @keyup="onFilter" />
                    <XCircleIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0 text-slate-400 hover:cursor-pointer"
                        @click="onResetFilter" />
                </div>
            </form>


            <div class="overflow-x-auto scrollbar-hidden">
                <div id="tabulator" ref="table" class="mt-5 table-report table-report--tabulator">
                </div>

            </div>

        </div>


        

        <div>

        </div>

    </div>
</template>

<script setup>


import {ref, reactive, onMounted} from 'vue';

import {TabulatorFull as Tabulator} from 'tabulator-tables';

// const data = ref([]);

const filter = reactive({
  field: "name",
  type: "like",
  value: "",
});



const onFilter = () => {
  //tabulator.value.setFilter(filter.field, filter.type, filter.value);
  tabulator.value.setFilter([
    [
      {field: 'id', type: 'like', value: filter.value},
      {field: 'title', type: 'like', value: filter.value},
      {field: 'yt_id', type: 'like', value: filter.value},
    ]
  ]);
};


const table = ref(null); //reference to your table element
const tabulator = ref(null); //variable to hold your table
const tableData = reactive([]); //data for table to display

// data.value.push({
//     id: 1,
//     title: 'titulo 1',
//     yt_id: 'jgdfgkbvjk',
// });



const initTabulator = async () => {


    console.log(tableData.value)

  tabulator.value = new Tabulator(table.value, {
      pagination: "local",
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 100],
        layout: "fitColumns",
        responsiveLayout: "collapse",
      data: tableData.value, //link data to table
      //data: data, //link data to table
      reactiveData:true, //enable data reactivity
      columns: [
        {
					formatter: "responsiveCollapse",
					width: 40,
					minWidth: 30,
					hozAlign: "center",
					resizable: false,
					headerSort: false,
				},
                {
					title: "ID",
					minWidth: 200,
					responsive: 0,
					field: "id",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
				{
					title: "Titulo",
					minWidth: 200,
					responsive: 0,
					field: "title",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
        
        {
					title: "Yt_id",
					minWidth: 200,
					responsive: 0,
					field: "yt_id",
					vertAlign: "middle",
					headerHozAlign:"left",
				},

               
      ], //define table columns
    });

}


onMounted(async () => {

    await fetch('https://api.splytin.com/api/v1/youtube-videos/list', {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
    .then((res) => res.json())
    .then((response) => {
        // console.log(response)
        tableData.value = response.data;
    });


    // tableData.value = data;

    // console.log(tableData.value)


    await initTabulator();

})










</script>

<style  scoped>
table {
    border: black 1px solid;
}

td,
th {
    border: black 1px solid;
}
</style>