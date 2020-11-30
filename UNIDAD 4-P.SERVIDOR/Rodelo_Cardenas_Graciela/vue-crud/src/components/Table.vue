<template>
    <div>
        
        <b-table striped bordered :items="items" :fields="fields"/>
    </div>
</template>

<script>
    export default {
        name:'Table',
        props:{
            items: {
                type: Array
            },
            fields: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>