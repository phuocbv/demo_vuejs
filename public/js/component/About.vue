<template>
    <div class="col-sm-6 col-sm-offset-3">
        about
    </div>
</template>
<script>
    export default {
        data: () => ({
            quote: ''
        }),
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
