
<template>
    <div>
        <h1>desde dashboard</h1>

        <div class="intro-y box p-5 mt-5">




            <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
                <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
                    <div class="relative sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
                        <input id="tabulator-html-filter-value" v-model="filter.value" type="text"
                            class="w-full xl:w-[600px] form-control mt-2 sm:mt-0" :placeholder="$t('search')"
                            @keyup="onFilter" />
                        <button class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0 text-slate-400 hover:cursor-pointer"
                            @click.prevent="onResetFilter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z" />
                            </svg>
                        </button>
                    </div>
                </form>


                <div class="flex mt-5 sm:mt-0">
                    <button class="btn-primary w-1/2 sm:w-auto mr-2" @click="showCreateCompany">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 50 50">
                            <path fill="currentColor"
                                d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" />
                            <path fill="currentColor" d="M16 24h18v2H16z" />
                            <path fill="currentColor" d="M24 16h2v18h-2z" />
                        </svg>
                    </button>
                </div>

            </div>


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


import { ref, reactive, onMounted } from 'vue';

import { TabulatorFull as Tabulator } from 'tabulator-tables';

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
            { field: 'id', type: 'like', value: filter.value },
            { field: 'title', type: 'like', value: filter.value },
            { field: 'yt_id', type: 'like', value: filter.value },
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
        reactiveData: true, //enable data reactivity
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
                headerHozAlign: "left",
            },
            {
                title: "Titulo",
                minWidth: 200,
                responsive: 0,
                field: "title",
                vertAlign: "middle",
                headerHozAlign: "left",
            },

            {
                title: "Yt_id",
                minWidth: 200,
                responsive: 0,
                field: "yt_id",
                vertAlign: "middle",
                headerHozAlign: "left",
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
}</style>