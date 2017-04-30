import Vue from 'vue';
import AppComponent from './component/app-component.js';
import Home from './component/Home.vue';

Vue.component('my-component', {
  template: '<h2>A custom component!</h2>'
})

new Vue({
    el: '#app',
    components: {
        'app-component': Home
    }
});
