<template>
    <div class="container mt-4 alert alert-primary">
        <b-img thumbnail fluid v-bind="mainProps" rounded="circle" alt="Circle image" :src="picture"></b-img>
        <h1>{{first +" "+ last}}</h1>
        <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold bg-gradient-dark"
        active-tab-class="font-weight-bold ">
            <b-tab title="Gender" cactive><div>My gender is<p>{{gender}}</p></div></b-tab>
            <b-tab title="Email"><div>My email is:<p>{{email}}</p></div></b-tab>
            <b-tab title="Phone"><div>My phone is:<p>{{phone}}</p></div></b-tab>
            <b-tab title="Cell"><div>My cell is: <p>{{cell}}</p></div></b-tab>

        </b-tabs>
       

    </div>
</template>

<script>
    export default {
        props: {
            picture: String,
            first: String,
            last: String,
            gender: String,
            email:String,
            phone:String,
            cell:String
        },
    }
</script>

<style lang="scss" scoped>
p, h1{
    color:rgb(76, 116, 129);
}
</style>