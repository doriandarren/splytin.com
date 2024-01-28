
<template>
    <div>
        <h1>desde dashboard</h1>

        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>YT_ID</th>
                </tr>

                <tr v-for="item of data" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.yt_id }}</td>
                </tr>
            </table>
        </div>

        <div>
            
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([]);

// data.value.push({
//     id: 1,
//     title: 'titulo 1',
//     yt_id: 'jgdfgkbvjk',
// });



fetch('https://api.splytin.com/api/v1/youtube-videos/list', {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
})
.then((res) => res.json())
.then((response) => {
    // console.log(response)
    data.value = response.data;
});



</script>

<style  scoped>

table{
    border: black 1px solid;
}

td, th{
    border: black 1px solid;
}


</style>