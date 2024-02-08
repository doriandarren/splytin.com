import { ref } from 'vue';
import { useI18n } from 'vue-i18n';


export default function useMsftPrice() {

	const msftPrice = ref();
	const msftPrices = ref([]);
	const msftPriceErrors = ref([]);
	const { t } = useI18n();



    // const getMsftPricesMile = async () => {
    //     await fetch('https://api.splytin.com/api/v1/b-msft-prices/list', {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    // })
    //     .then((res) => res.json())
    //     .then((response) => {
    //         // console.log(response.data);
    //         msftPrices.value = response.data;
    //     });
    // }


	const getMsftPrices = async () => {
		msftPriceErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/b-msft-prices/list`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				msftPriceErrors.value = res.errors;
			}else{
				msftPrices.value = res.data;
			}
		})
		.catch((e) => {
			msftPriceErrors.value.push(t("errors.error_internal"));
		});
	}


	const getMsftPrice = async (id) => {
		msftPriceErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/b-msft-prices/show/${id}`,{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				msftPriceErrors.value = res.errors;
			}else{
				msftPrice.value = res.data;
			}
		})
		.catch((e) => {
			msftPriceErrors.value.push(t("errors.error_internal"));
		});
	}


	const storeMsftPrice = async (data) => {
		msftPriceErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/b-msft-prices/store`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				msftPriceErrors.value = res.errors;
			}else{
				msftPrice.value = res.data;
			}
		})
		.catch((e) => {
			msftPriceErrors.value.push(t("errors.error_internal"));
		});
	}


	const updateMsftPrice = async (id, data) => {
		msftPriceErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/b-msft-prices/update/${id}`,{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				msftPriceErrors.value = res.errors;
			}else{
				msftPrice.value = res.data;
			}
		})
		.catch((e) => {
			msftPriceErrors.value.push(t("errors.error_internal"));
		});
	}


	const destroyMsftPrice = async (id) => {
		msftPriceErrors.value = [];
		await fetch(`https://api.splytin.com/api/v1/b-msft-prices/delete/${id}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				//"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
		})
		.then(res => res.json())
		.then((res) => {
			if (!res.success) {
				msftPriceErrors.value = res.errors;
			}else{
				msftPrice.value = res.data;
			}
		})
		.catch((e) => {
			msftPriceErrors.value.push(t("errors.error_internal"));
		});
	}


	return {
		msftPriceErrors,
		msftPrice,
		msftPrices,
		getMsftPrice,
		getMsftPrices,
		storeMsftPrice,
		updateMsftPrice,
		destroyMsftPrice,
	}

}
