<template>
    <div class="container mt-4">
        <b-card :title="titulo" :sub-title="director">
            <b-card-text>
           <span class="italic grey">Año:</span> {{anio}}
            </b-card-text>
            <b-card-text class="card-link"><span class="italic grey">Género:</span> {{genero}}</b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: {
            id:Number,
            titulo: String,
            director: String,
            anio: String,
            genero: String,
            data: Object
        },   
    }
</script>

<style lang="scss" scoped>
.italic{
    font-style: italic;
}
.grey{
    color:silver;
}
</style>