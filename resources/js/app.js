require('./bootstrap');
//registrovanje komponenti
// Vue.component('my-component-name', { /* ... */ })

import Vue from 'vue'
import App from '@/js/App.vue'
import router from '@/js/router/index.js'
import axios from 'axios'
import store from './store';
// import AppLayout from '@/js/layouts/AppLayout'

// Vue.component('app-layout', AppLayout)

Vue.config.productionTip = false;

const rootUrl = document.location.protocol +"//" + document.location.hostname + ":" +document.location.port;
axios.defaults.baseURL = rootUrl + '/api/';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};

const app =  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    components: { App }
});

export default app;
