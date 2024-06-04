<template>
  <div class="cookie-consent">
    <div class="flex flex-row justify-center">
      <div>
        <p>Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.</p>
      </div>

      <div class="ml-5 mt-3">
        <button class="outline outline-2 outline-offset-2 rounded-md p-2 text-red-200"
          @click="rejectCookies">Rechazar</button>
        <button class="outline outline-2 outline-offset-2 rounded-md p-2 text-blue-200"
          @click="acceptCookies">Aceptar</button>
      </div>

    </div>
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
  cookies.set('cookie_consent', 'accepted', { expires: '1d' });
  showCookieConsent.value = false;
};

const rejectCookies = () => {
  cookies.set('cookie_consent', 'rejected', { expires: '1d' });
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