
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "vue-material-design-icons/styles.css";
import VueAnalytics from 'vue-analytics';
import vSelect from 'vue-select';
import VueTypedJs from 'vue-typed-js';


Vue.use(VueTypedJs);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.component('v-select', vSelect);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    router,
    created(){
        AOS.init();
    },
    components: {
        App
    },
    render: h => h(App)
});
