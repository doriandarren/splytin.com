<template>

    <Preloader v-if="loading" />

    <div class="flex min-h-full flex-1 mt-10" v-animate>
      <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ $t("login_form.title") }}</h2>
          </div>
          
  
          <div class="mt-10">
            <div>
              <form action="#" method="POST" class="space-y-6">

                <!-- Email -->
                <div>
                  <label for="email_input" class="block text-sm font-medium leading-6 text-gray-900">{{ $t("login_form.email") }}</label>
                  <div class="mt-2">
                    <input 
                      type="text" 
                      id="email_input" 
                      v-model="email_input" 
                      autocomplete="email" 
                      required="" 
                      class="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    />
                  </div>
                </div>

                <!-- Password -->
                <div>
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">{{ $t("login_form.password") }}</label>
                  <div class="relative">
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        :type="showPassword ? 'text' : 'password'" id="password" v-model="password" />
                      <div class="absolute inset-y-0 right-0 flex items-center px-2">
                          <button type="button" @click="togglePasswordVisibility">
                              <img 
                                  class="w-6 h-6"
                                  :src="showPassword ? '/eye_off.svg' : '/eye_on.svg'"
                                  alt="Show/Hide password" 
                              />
                          </button>
                      </div>
                  </div>
                </div>

                

  
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">{{ $t("login_form.remember_me") }}</label>
                  </div>
  
                  <div class="text-sm leading-6">
                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">{{ $t("login_form.forgot_password") }}</a>
                  </div>
                </div>
  
                <div>
                  <button 
                    @click.prevent="submit"
                    type="submit" 
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                  >
                    {{ $t("login_form.sign_in") }}
                  </button>
                </div>
              </form>
            </div>
  
            <!-- <div class="mt-10">
              <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-200" />
                </div>
                <div class="relative flex justify-center text-sm font-medium leading-6">
                  <span class="bg-white px-6 text-gray-900">Continuar con</span>
                </div>
              </div>
  
              <div class="mt-6 grid grid-cols-2 gap-4">
                <a href="#" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                  <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                    <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                    <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                    <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
                  </svg>
                  <span class="text-sm font-semibold leading-6">Google</span>
                </a>
  
                <a href="#" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                  <svg class="h-5 w-5 fill-[#24292F]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm font-semibold leading-6">GitHub</span>
                </a>
              </div>
            </div> -->


          </div>
        </div>
      </div>
      <div class="relative hidden w-0 flex-1 lg:block">
        <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
      </div>
    </div>
  </template>






<!-- <template>

    <Preloader v-if="loading" />

    <div v-animate class="m-10 p-10 border rounded-lg">
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
                        <img 
                            class="w-6 h-6"
                            :src="showPassword ? '/eye_off.svg' : '/eye_on.svg'"
                            alt="Show/Hide password" 
                        />
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
</template> -->

<script setup>
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import Preloader from '@/components/preloader/Preloader.vue';
import { useAuthenticationStore } from '@/stores/auth/authentication';
import { email } from '@vuelidate/validators';


//init
const loading = ref(false);


const email_input = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();

const authStore = useAuthenticationStore();
const {login} = authStore;
const { loginResponse, authErrors } = storeToRefs(authStore);


const showPassword = ref(false);

function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
}

const submit = async () => {

    message.value = '';
    //set value
    loading.value = true; 

    if (!email_input.value || !password.value) {
        message.value = 'los dos campos son requeridos';
        return;
    }


    await login(email_input.value, password.value);
    
    if (loginResponse.value.success) {
        loading.value = false;
        //router.push('/dashboard');
        router.push({name: 'main_screen'});
    }
    
    loading.value = false;

}

</script>

<style lang="scss" scoped></style>
