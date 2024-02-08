import { ref } from "vue"



export default function useDashboard() {


    const dashboard = ref();
    const dashboards = ref([]);
    const dashboardErrors = ref([]);

    const getDashboards = async () => {
        await fetch('https://api.splytin.com/api/v1/youtube-videos/list', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((response) => {
                // console.log(response)
                dashboards.value = response.data;
            });
    }

    return {
        dashboard,
        dashboards,
        dashboardErrors,
        getDashboards,
    }

}