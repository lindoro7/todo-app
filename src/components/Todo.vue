<template>
<div>
  <div 
    class="todo" 
    v-for="todo in filtered" 
    :key="todo.id"
    :class="{done: todo.done}"
  >
    <div>
      <p class="todo__title">{{ todo.title }}</p><br>
      <p class="todo__description">{{ todo.description }}</p>
      <p>Категория: {{ todo.category.title }}</p>
    </div>
    <div>
      <button @click="changeTodo(todo)" class="btn">{{ todo.done == false ? "Не готово" : "Готово" }}</button>
      <button @click="deleteTodo(todo)" class="btn">&times;</button>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Todo',
  data: () => ({
    
  }),
  computed: {
    ...mapGetters ([
      'TODOS', 'ALL_TODOS', 'DONE_TODOS', 'NOT_DONE_TODOS'
    ]),

    filtered() {
      if(this.$store.state.showAllTodos === true) {
        return this.ALL_TODOS
      } else if (this.$store.state.showDoneTodos === true) {
        return this.DONE_TODOS
      } else if (this.$store.state.showNotDoneTodos === true) {
        return this.NOT_DONE_TODOS
      } else if (this.$store.state.searchByString) {
        return [...this.ALL_TODOS].filter((todo) => {return todo.title.toLowerCase().indexOf(this.$store.state.searchByString.toLowerCase()) > -1})
      }
      return this.TODOS
    }
  },
  methods: {
    deleteTodo(todo) {
      this.$store.dispatch('DELETE_TODO', todo)
    },
    changeTodo(todo) {
      this.$store.dispatch('CHANGE_TODO_DONE', todo)
    }
  }
}
</script>
<style lang = "sass"scoped>
  button + button
    margin-left: 10px

  .todo
    background-color: #fa7d7d

  .done
    background-color: #61ba6a
</style>