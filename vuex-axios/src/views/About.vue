<template>
<div>
  <div v-for="todo in doneTodos" :key="todo.id">
    {{todo.title}}
    <p>{{todo.completed}}</p>
    <hr>
  </div>
</div>
  
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  computed:{
    ...mapGetters(['doneTodos'])
  }
}
</script>