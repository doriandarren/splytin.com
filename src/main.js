import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

//Animate
import 'animate.css';

//Directives
import { animateDirective } from './directives/animateDirective';



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('animate', animateDirective);

app.mount('#app')


