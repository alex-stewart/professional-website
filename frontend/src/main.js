import Vue from 'vue'
import {BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/global.css';
import App from './App.vue'
import Home from './components/Home'
import NotFound from './components/NotFound'

const PAGE_TITLE = 'Alex Stewart | Software Engineer';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: Home, meta: {title: PAGE_TITLE}},
        {path: '*', name: 'not found', component: NotFound, meta: {title: 'Not found'}}
    ],
    scrollBehavior: function(to) {
        console.log(to);
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
});

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title;
    });
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
