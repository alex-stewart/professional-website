import Vue from 'vue'
import {BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import Home from './components/Home'
import CV from './components/CV'
import NotFound from './components/NotFound'

const PAGE_TITLE_PREFIX = "Alex Stewart | ";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: Home, meta: {title: PAGE_TITLE_PREFIX + "Software Engineer"}},
        {path: '/cv', name: 'cv', component: CV, meta: {title: PAGE_TITLE_PREFIX + "CV"}},
        {path: '*', name: 'not found', component: NotFound, meta: {title: PAGE_TITLE_PREFIX + "Not found"}}
    ]
});

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title;
    });
});

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
