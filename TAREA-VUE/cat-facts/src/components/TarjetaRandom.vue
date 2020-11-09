<template>
    <div>
        <h1>{{Type}}</h1>
        <div class="des">
            {{Text}}
            <p :style="isVerified">{{Status?"verificado":"not verificado"}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TarjetaRandom',
        props:{
            Type:String,
            Text:String,
            Status:Boolean
        },
        computed:{
            isVerified: function(){
                if(this.Status){
                    return {color:'#70c274'};
                }else{
                    return {color:'red'};
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.des{
    text-align: center;
}


</style>