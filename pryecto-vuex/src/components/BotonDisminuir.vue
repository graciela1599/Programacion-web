<template>
    <button @click="accionDisminuir()">-</button>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'BotonDisminuir',
    methods:{
        ...mapActions(['accionDisminuir'])
    }
}
</script>