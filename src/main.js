import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import './assets/scss/main.scss';
import routes from './router/routes.js';
import App from './App.vue';

const router = createRouter({
	history: createWebHistory(),
	routes
});

createApp(App).use(createPinia()).use(router).mount('#app');
