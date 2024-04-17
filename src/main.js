import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

//Animate
import 'animate.css';

//Directives
import { animateDirective } from './directives/animateDirective';


//sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


//i18n
import i18n from './i18n';


//Table
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css';



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueSweetalert2)

app.use(i18n())

app.use(VueGoodTablePlugin)

app.directive('animate', animateDirective);

app.mount('#app')


