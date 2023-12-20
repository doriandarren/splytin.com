import './assets/main.css';

// importing AOS css style globally
import 'aos/dist/aos.css';


import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';





const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
