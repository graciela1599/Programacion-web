<template>
  <div>
      <label :for="id">{{label}}</label>
      <!--Para agarrar lo escrito en la vista se pone @input="$emit('input',$event.target.value)"-->
      <input :id="id" :type="type" class="form-control" :maxlength="maxlength" :value="value" :disabled="disabled" :placeholder="placeholder" @input="$emit('input',$event.target.value)" />
  </div>
</template>

<script>
export default {
    name:'Input',
    props:{
        id:{
            type:[String, Number],
            default: ''
        },
        label:{
            type: String,
            default:''
        },
        type: {
            type:String,
            default:'text'
        },
        maxlength:{
            type:[String, Number],
            default: 100
        },
        value:{
            type: [String, Number],
            default:''
        },
        disabled:{
            type: Boolean,
            default: false
        },
        placeholder:{
            type:String,
            default:'Ingrese campo'
        }
    }
}
</script>

<style>

</style>