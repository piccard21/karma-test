<template>
    <div class="testinger">
       <h1>I'm an example component!</h1>
    </div>
</template>

<script>
    export default {
	    created() {
		    console.log('################################# Component created.')
	    },
        mounted() {
            console.log('################################# Component mounted.')
        }
    }
</script>
