import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';


export const useAuthenticationStore = defineStore('authentication', () => {

  const token = ref(null);
  const user = ref(null);
  const authErrors = ref([]);
  const loading = ref(false);

  const router = useRouter();


  //const doubleCount = computed(() => count.value * 2);


  async function login(email, password) {
    this.user = '';
    this.authErrors = [];

    await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}auth/login`, {
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
          this.user = data.user;
          localStorage.setItem('splytin_token', data.token);
        } else {
          this.authErrors = data.errors;
        }
      })
      .catch((e) => {
        console.log("Error:", e);
      })

  }



  async function currentUser() {
  

    let response;

    await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}auth/user`, {
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

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
        }
      });
      const response = await res.json();

      if (response.success) {

        this.token = null;
        this.user = null;
        localStorage.removeItem('splytin_token');

      } else {
        this.authErrors = response.errors;
      }

    } catch (e) {
      console.log(e);
      this.authErrors = e;
      this.token = null;
      this.user = null;
    }

  }

  return {
    token,
    user,
    loading,
    login,
    currentUser,
    logout
  }

})