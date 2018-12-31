<template>
  <div>
    <sub-vue></sub-vue>
    <button @click="listen">ting</button>
  </div>
</template>

<script>
  import connect from '../connector.js';

export default {
  name: 'app',
  components: {
   
  },
  methods:{
    listen: function(){
      connect.$on('phone',function(){
        // console.log(msg);
      });
    }
  }
}
</script>

<style>

</style>
