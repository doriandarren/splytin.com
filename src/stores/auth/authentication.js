import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from 'vue-router';


export const useAuthenticationStore = defineStore('authentication', () => {

  const token = ref(null);
  const user = ref(null);
  const loginResponse = ref(null);
  const authErrors = ref([]);

  const router = useRouter();

  //const doubleCount = computed(() => count.value * 2);


  async function login(email, password) {
    user.value = '';
    authErrors.value = [];

    await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (localStorage.getItem('splytin_token')) {
          localStorage.removeItem('splytin_token');
        }
        
        

        if (data.success) {
          loginResponse.value = data;
          localStorage.setItem('splytin_token', data.token);
        } else {
          authErrors.value = data.errors;
        }
      })
      .catch((e) => {
        console.log("Error:", e);
        authErrors.value = e;
      })

  }



  async function currentUser() {
    
    user.value = '';
    authErrors.value = [];

    let response;

    await fetch(`${import.meta.env.VITE_API_URL}auth/user`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('splytin_token')}`
      },
    })
      .then(data => data.json())
      .then(data => {
        response = data;
      })
      .catch((e) => {
        router.push('/login');
        console.log("Error:", e);
      });

    return response;

  }

  async function logout() {

    user.value = '';
    authErrors.value = [];

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
        }
      });
      const response = await res.json();

      if (response.success) {

        token.value = null;
        user.value = null;
        localStorage.removeItem('splytin_token');

        router.push('/login');

      } else {
        authErrors.value = response.errors;
      }

    } catch (e) {
      authErrors.value = e;
      token.value = null;
      user.value = null;
      router.push('/login');
    }

  }

  return {
    token,
    user,
    loginResponse,
    authErrors,
    login,
    currentUser,
    logout
  }

})