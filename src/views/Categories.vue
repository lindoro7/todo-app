<template>
  <div>
    <CreateTodo v-if="TODO_CREATING"/>
    <CreateCategory v-if="CATEGORY_CREATING"/>
    <div v-else>
      <Header />
      <div class="btn__wrapper container">
        <router-link to="/" class="btn">Домой</router-link>
        <button @click="categoryCreate" class="btn">Создать категорию</button>
      </div>
      <p v-if="!CATEGORIES.length" class="center">Нет ни одной категории</p>
      <div v-else class="categories container">
        <Category />
      </div>
    </div>
  </div>
  
</template>
<script>
import {mapGetters} from 'vuex'
import Category from '@/components/Category.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Categories',
  data: () => ({
   
  }),
  computed: {
    ...mapGetters([
      'CATEGORIES', 'CATEGORY_CREATING', 'TODO_CREATING', 'ALL_TODOS'
    ])
  },
  methods: {
    categoryCreate() {
      this.$store.state.categoryCreating = true
    },
  },
  components: {
    Category, Header
  }
}
</script>
