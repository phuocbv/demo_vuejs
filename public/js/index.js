import Vue from 'vue'
import App from './component/App.vue'
import About from './component/About.vue'
import Login from './component/Login.vue'
import Home from './component/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '*', component: Home},
        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/login', component: Login },
        { path: '/signup', component: About }
    ]
})

new Vue({
    el: '#app',
    components: {
        'app-component': App
    },
    router,
});

// const app = new Vue({router}).$mount('#app');
