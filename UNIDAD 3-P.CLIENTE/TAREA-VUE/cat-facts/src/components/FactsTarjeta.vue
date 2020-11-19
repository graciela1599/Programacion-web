<template>
    <div class="contain">
        <div class="texto">
            {{texto}}
            <div class="id">
                {{id}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'FactsTarjeta',
        props: {
            texto: String,
            id: String
        }
    }
</script>

<style>
.texto{
    padding:0;
    color: #3a87f6;
    font-weight: 600;
    font-size: 14px;
    padding:15px;
}
.contain{
    margin:12px auto;
    border:1px solid #eeeeee;
}
.id{
    color:#606975;
    font-weight: 200;
}
</style>