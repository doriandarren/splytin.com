<template>
    <div class="m-10 p-10 border rounded-lg">
        <h1>{{ $t("login_form.title") }}</h1>

        <div class="w-full mb-5">
            <label class="block mb-1" for="correo">{{ $t("login_form.email") }}</label>
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" id="correo" v-model="correo" />
        </div>


        <div class="w-full">

            <label class="block mb-1" for="correo">{{ $t("login_form.password") }}</label>

            <div class="relative">
                <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    :type="showPassword ? 'text' : 'password'" id="password" v-model="password" />
                <div class="absolute inset-y-0 right-0 flex items-center px-2">
                    <button type="button" @click="togglePasswordVisibility">
                        ver
                        <!-- <img 
                      :src="showPassword ? 'path/to/eye-closed-icon.svg' : 'path/to/eye-open-icon.svg'" 
                      alt="Show/Hide password"
                  /> -->
                    </button>
                </div>
            </div>

        </div>

        <div class="mt-5 flex flex-row justify-center">
            <button
                class="h-10 px-5 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                @click="submit">
                {{ $t("login_form.sign_in") }}
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

const showPassword = ref(false);

function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
}

const submit = () => {
    message.value = '';

    if (!correo.value || !password.value) {
        message.value = 'los dos campos son requeridos';
        return;
    }

    //Splytin2023
    let data = {
        email: correo.value,
        password: password.value
    }


    fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => res.json())
        .then((response) => {

            console.log(response.token);


            if (response.success && response.token) {
                // message.value = 'datos correctos';

                localStorage.setItem('splytin_token', response.token);
                router.push('/dashboard');
            } else {
                message.value = 'datos incorrectos';
            }


        });
}

</script>

<style lang="scss" scoped></style>
