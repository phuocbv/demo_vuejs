<template>
    <div class="col-sm-6 col-sm-offset-3">
        home
         <router-link to="/about">About</router-link>
    </div>
 </template>

 <script>
    import axios from 'axios';
    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            getQuote() {
                axios.get('http://localhost:8000/')
                .then(response => {
                    console.log(response.data);
                    //this.quote = response.data
                }).catch(e => {
                    console.log(e);
                })
            }
        }
    }
 </script>
