<template>
    
     <!-- BEGIN: Page Layout -->
  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 mt-8">
        <div class="intro-y flex items-center h-10">
          <h2 class="text-lg font-medium truncate mr-5">{{ $t("dashboard.title") }} 
            <span class="text-xl font-bold">-
            </span>
          </h2>
          <a href="" class="ml-auto flex items-center text-primary dark:text-light">
          </a>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex align-middle">
                  <div class="text-3xl font-medium leading-8 text-gray-500">-</div>
                  <div class="ml-auto">
                    <NavigationIcon class="report-box__icon text-gray-500" />
                  </div>
                </div>
                <div class="text-base text-slate-500 mt-3">{{ $t("trip_created") }}</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex align-middle">
                  <div class="text-3xl font-medium leading-8 text-orange-300">-</div>
                  <div class="ml-auto">
                    <AlertCircleIcon class="report-box__icon text-orange-300" />
                  </div>
                </div>
                <div class="text-base text-slate-500 mt-3">{{ $t("trip_pending") }}</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex align-middle">
                  <div class="text-3xl font-medium leading-8 text-blue-300">-</div>
                  <div class="ml-auto">
                    <ActivityIcon class="report-box__icon text-blue-300" />
                  </div>
                </div>
                <div class="text-base text-slate-500 mt-3">{{ $t("trip_progress") }}</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex align-middle">
                  <div class="text-3xl font-medium leading-8 text-green-300">-</div>
                  <div class="ml-auto">
                    <CheckIcon class="report-box__icon text-green-300" />
                  </div>
                </div>
                <div class="text-base text-slate-500 mt-3">{{ $t("trip_completed") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>

  

  </div>
  <!-- END: Page Layout -->


</template>

<script setup>

import { ref, reactive, onMounted } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import useDashboard from '@/composables/dashboard';
import Swal from 'sweetalert2';
import { useI18n } from 'vue-i18n';



//CREAMOS VARIABLES//
const table = ref(null); //reference to your table element
const tabulator = ref(null); //variable to hold your table
const tableData = reactive([]); //data for table to display
const dashboardId = ref(0);

const isCreate = ref(false);
const isEdit = ref(false);
const { dashboard, dashboards, dashboardErrors, getDashboards, storeDashboard, updateDashboard, destroyDashboard } = useDashboard();

const { t } = useI18n();














onMounted(async () => {


    await getDashboards();
    tableData.value = dashboards.value;


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