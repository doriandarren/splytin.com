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




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueSweetalert2)

app.directive('animate', animateDirective);

app.mount('#app')


