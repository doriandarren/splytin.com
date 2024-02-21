

<!-- own_companies = id code name address cif email website phone code_zip 

companies = id code name adress cif email website phone code_zip 

projects = id own_company_id company_id name total_hours current_hours started_at finished_at description  -->


<template>
    <div class="m-10 p-10 border rounded-lg">
        <h1>LOGIN</h1>

       

        <div class="w-full">
            <label class="block mb-1" for="correo">Correo</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="correo"
                v-model="correo" 
            />
        </div>


        <div class="w-full">
            <label class="block mb-1" for="password">Password</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="password" 
                id="password"
                v-model="password"
            />
        </div>

        <div class="mt-5 flex flex-row justify-center">
            <button
                class="h-10 px-5 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                @click="submit"
            >
                Sign In
            </button>
        </div>

        <div>
            {{ message }}
        </div>
        

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    

    const correo = ref('');
    const password = ref('');
    const message = ref('');
    const router = useRouter();

    

    const submit = () => {
        message.value = '';

        if(!correo.value || !password.value) {
            message.value = 'los dos campos son requeridos';
            return;
        }
        
        //Splytin2023
        let data = {
            email: correo.value,
            password: password.value
        }


        fetch('https://api.splytin.com/api/v1/login', {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((response) => {
            
            console.log(response.token);
        

            if( response.success && response.token) {
                // message.value = 'datos correctos';

                localStorage.setItem('splytin_token', response.token);
                router.push('/dashboard');
            }else {
                message.value = 'datos incorrectos';
            }


        });
    }

</script>

<style lang="scss" scoped>

</style>
