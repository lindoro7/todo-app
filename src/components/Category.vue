<template>
  <div>
    <div class="category" v-for="category in CATEGORIES" :key="category.id">
      <p class="category__title">{{ category.title }}</p>
      <div class="btn__wrapper">
        <button @click="createTodo(category)" class="btn">Новая задача</button>
        <button  @click="toTodos(category)" class="btn">К задачам</button>
        <button @click="deleteCategory(category.title)" class="btn">Удалить категорию</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Category',
  computed: {
    ...mapGetters ([
      'CATEGORIES'
    ])
  },
  methods: {
    deleteCategory(cat) {
      this.$store.dispatch('DELETE_CATEGORY', cat)
    },
    createTodo(cat) {
      this.$store.state.todoCreating = true
      this.$store.state.currentCategory = cat
    },
    toTodos(cat) {
      this.$store.state.currentCategory = cat
      this.$router.push(`/todos/:${cat.id}`)
    }
  }
}
</script>