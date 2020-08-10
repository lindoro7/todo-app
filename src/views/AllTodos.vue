<template>
  <div class="container">
    <CreateTodo v-if="TODO_CREATING"/>
    <div>
      <Header />
      <div class="btn__wrapper">
          <button @click="allTodosToFalse" class="btn">К категориям</button>
          <button @click="showAllTodos" class="btn">Все задачи</button>
          <button @click="showDoneTodos" class="btn">Выполненные</button>
          <button @click="showNotDoneTodos" class="btn">Не выполненные</button>
      </div>
      <div class="search">
        <div class="search__tasks">
          <input 
            type="text" 
            placeholder="Поиск по карточкам"
            v-model.trim="searchString"
          />
        </div> 
      </div>
      <Todo />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Todo from '@/components/Todo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AllTodos',
  data: () => ({
    searchString: ''
  }),
  methods: {
    showAllTodos(){
      this.$store.state.showDoneTodos = false
      this.$store.state.showNotDoneTodos = false
      this.$store.state.searchByString = ''
      this.searchString = ''
      this.$store.state.showAllTodos = true
    },
    allTodosToFalse() {
      this.$store.state.showDoneTodos = false
      this.$store.state.showNotDoneTodos = false
      this.$store.state.showAllTodos = false
      this.$store.state.searchByString = ''
      this.searchString = ''
      this.$router.push('/categories')
    },
    showDoneTodos() {
      this.$store.state.showNotDoneTodos = false
      this.$store.state.showAllTodos = false
      this.$store.state.searchByString = ''
      this.searchString = ''
      this.$store.state.showDoneTodos = true
    },
    showNotDoneTodos() {
      this.$store.state.showAllTodos = false
      this.$store.state.showDoneTodos = false
      this.$store.state.searchByString = ''
      this.searchString = ''
      this.$store.state.showNotDoneTodos = true
    },
  },
  computed: {
    ...mapGetters([
      'TODO_CREATING'
    ]),

  },
  components: {
    Header, Todo
  },
  watch: {
    searchString: function() {
      if(this.searchString) {
        this.$store.state.showAllTodos = false
        this.$store.state.showDoneTodos = false
        this.$store.state.showNotDoneTodos = false
        this.$store.state.searchByString = this.searchString
      } else if (!this.searchString) {
        this.$store.state.searchByString = ''
      }
    }
  }
}
</script>