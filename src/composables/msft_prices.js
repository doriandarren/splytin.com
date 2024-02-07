import { ref } from "vue"





export default function useMsftPrice() {

    const msftPrice = ref();
    const msftPrices = ref([]);
    const msftPriceErrors = ref([]);



    const getMsftPrices = async () => {

        await fetch('https://api.splytin.com/api/v1/b-msft-prices/list', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => res.json())
        .then((response) => {

            // console.log(response.data);

            msftPrices.value = response.data;

        });
    }


    const getMsftPrice = async (id) => {

        await fetch(`https://api.splytin.com/api/v1/b-msft-prices/show/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => res.json())
        .then((response) => {

            // console.log(response.data);

            msftPrice.value = response.data;

        });
    }
    

    return{
        msftPrice, 
        msftPrices,
        msftPriceErrors,
        getMsftPrices,
        getMsftPrice

    }
}

