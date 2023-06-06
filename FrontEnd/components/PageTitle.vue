<template>
    <head>
        <title>{{ title }}</title>
    </head>
</template>

<script>
    export default {
        props:{
            title:{
                type: String,
                required:true
            }
        }
    }
</script>