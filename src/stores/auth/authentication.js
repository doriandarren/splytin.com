import { defineStore } from "pinia";
import { computed, ref } from "vue";
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
        if (localStorage.getItem('token_admin_gf')) {
          localStorage.removeItem('token_admin_gf');
        }

        if (data.success) {
          this.user = data.user;
          localStorage.setItem('token_admin_gf', data.token);
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
    let errors;

    await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}auth/user`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token_admin_gf')}`
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



  // async function currentUser() {
  
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}office/auth/user`, {
  //         method: "GET",
  //         headers: {
  //           'Content-Type': "application/json",
  //           'Authorization': `Bearer ${localStorage.getItem('token_admin_gf')}`
  //         },
  //       });
  
  //       if (!response.success) {
  //         // Manejar errores de HTTP
  //         reject(new Error(`Error al consultar la API: ${response.statusText}`));
  //         return;
  //       }
  
  //       const datos = await response.json();
  //       resolve(datos);
  //     } catch (error) {
  //       reject(new Error(`Error al consultar la API: ${error.message}`));
  //     }
  //   });
  
  // }

  








  async function logout() {

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token_admin_gf')}`
        }
      });
      const response = await res.json();

      if (response.success) {
        this.token = null;
        this.user = null;
      } else {
        this.errors = response.errors;
      }

    } catch (error) {
      console.log(e);
      this.errors = e;
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