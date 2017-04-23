import Vue from 'vue';
import AppComponent from './component/app-component.js';

Vue.component('my-component', {
  template: '<h2>A custom component!</h2>'
})

new Vue({
    el: '#app',
    components: {
        'app-component': AppComponent
    }
});
