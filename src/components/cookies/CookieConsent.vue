<template>
    <div v-if="showCookieConsent" class="cookie-consent">
      <p>Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.</p>
      <button @click="acceptCookies">Aceptar</button>
      <button @click="rejectCookies">Rechazar</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useCookies } from 'vue3-cookies';
  
  const { cookies } = useCookies();
  const showCookieConsent = ref(false);
  
  onMounted(() => {
    if (!cookies.isKey('cookie_consent')) {
      showCookieConsent.value = true;
    }
  });
  
  const acceptCookies = () => {
    cookies.set('cookie_consent', 'accepted', { expires: '365d' });
    showCookieConsent.value = false;
  };
  
  const rejectCookies = () => {
    cookies.set('cookie_consent', 'rejected', { expires: '365d' });
    showCookieConsent.value = false;
  };
  </script>
  
  <style scoped>
  .cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    padding: 1em;
    text-align: center;
    z-index: 1000;
  }
  .cookie-consent button {
    margin: 0 0.5em;
  }
  </style>
  