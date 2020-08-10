<template>
  <div>
    <CreateTodo v-if="TODO_CREATING"/>
    <div v-else class="container">
      <Header />
      <div class="btn__wrapper">
        <router-link to="/categories" class="btn">К категориям</router-link>
        <button @click="showAllTodos" class="btn">Все задачи</button>
        <button @click="createTodo" class="btn">Новая задача</button>
      </div>
      <div class="todos">
        <Todo />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Todo from '@/components/Todo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Todos',
  data: () => ({

  }),
  computed: {
    ...mapGetters([
     'TODO_CREATING', 'CATEGORIES'
    ])
  },

  methods: {
    createTodo() {
      this.$store.state.todoCreating = true
    },
    showAllTodos() {
      this.$store.state.showAllTodos = true
      this.$router.push('/alltodos')
    },
    checkCategories() {
      if(!this.CATEGORIES.length) {
        this.$router.push('/categories')
      }
    },
    checkShowAllTodos() {
      if(this.$store.state.showAllTodos = true) {
        this.$store.state.showAllTodos = false
      }
    },
    checkShowDoneTodos() {
      if(this.$store.state.checkShowDoneTodos = true) {
        this.$store.state.checkShowDoneTodos = false
      }
    },
    checkShowNotDoneTodos() {
      if(this.$store.state.checkShowNotDoneTodos = true) {
        this.$store.state.checkShowNotDoneTodos = false
      }
    }
  },
  mounted() {
    this.checkCategories(),
    this.checkShowDoneTodos(),
    this.checkShowNotDoneTodos(),
    this.checkShowAllTodos()
  },

  components: {
    Todo, Header
  }
}
</script>
