<template>
    <div>
        <h1>Hola desde msft</h1>
    </div>

    <div class="intro-y box p-5 mt-5">

    <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
    <div class="relative sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
        <input id="tabulator-html-filter-value" v-model="filter.value" type="text"
            class="w-full xl:w-[600px] form-control mt-2 sm:mt-0" :placeholder="$t('search')"
            @keyup="onFilter" />
        <XCircleIcon
            class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0 text-slate-400 hover:cursor-pointer"
            @click="onResetFilter" />
    </div>
    </form>


    <div class="overflow-x-auto scrollbar-hidden">
    <div
        id="tabulator"
        ref="table"
        class="mt-5 table-report table-report--tabulator"
    >
    </div>

    </div>

</div>


    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>SYMBOL</th>
                <th>PRICE_USD</th>
                <th>CREATED_AT</th>
            </tr>

            <tr v-for="item of data" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.symbol }}</td>
                <td>{{ item.price_usd }}</td>
                <td>{{ item.created_at }}</td>
            </tr>
        </table>
    </div>

    <div>

    </div>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue';
import {TabulatorFull as Tabulator} from 'tabulator-tables'; //import Tabulator library

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
      {field: 'symbol', type: 'like', value: filter.value},
      {field: 'price_usd', type: 'like', value: filter.value},
    ]
  ]);
};

const table = ref(null); //reference to your table element
const tabulator = ref(null); //variable to hold your table
const tableData = reactive([]); //data for table to display


// var data = [
//   {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
//   {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
//   {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
//   {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
//   {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
// ];



const initTabulator = async () => {

  tabulator.value = new Tabulator(table.value, {
      pagination: "local",
			paginationSize: 10,
			paginationSizeSelector: [10, 20, 30, 40],
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
					title: "Symbol",
					minWidth: 200,
					responsive: 0,
					field: "symbol",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
        {
					title: "Price_",
					minWidth: 200,
					responsive: 0,
					field: "price_usd",
					vertAlign: "middle",
					headerHozAlign:"left",
				},
      ], //define table columns
    });

}

onMounted(async () => {

    await fetch('https://api.splytin.com/api/v1/b-msft-prices/list', {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((response) => {

        //console.log(response.data);

        tableData.value = response.data;

    });

    await initTabulator();

})





</script>

<style  scoped>

table{
    border: black 1px solid;
}

td, th {
    border: black 1px solid;
}

</style>