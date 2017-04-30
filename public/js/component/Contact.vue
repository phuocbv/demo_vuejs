<template>
    Contact
</template>
<script>
    export default {
        data: () => ({
            return {
                quote: ''
            }
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
