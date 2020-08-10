<template>
  <div>
    <Header />
    <HelloWorld  msg="Добро пожаловать в ToDo"/>
  </div>  
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters} from 'vuex'
import Header from '@/components/Header.vue'


export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'CATEGORY_CREATING'
    ])
  },
  components: {
    HelloWorld, Header
  }
}
</script>
