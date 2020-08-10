<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__form">
        <input type="text" v-model="todoTitle" placeholder="Название задачи">
        <input type="text" v-model="todoDescription" placeholder="Описание задачи">
        <div class="btn__wrapper">
          <button @click="cancelCreatingTodo" class="btn">Сбросить</button>
          <button @click="createTodo" class="btn">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreateTodo',
  data: () => ({
    todoTitle: '', 
    todoDescription: ''
  }),
  computed: {
    ...mapGetters([
      'TODOS'
    ])
  },
  methods: {
    cancelCreatingTodo() {
      this.$store.state.todoCreating = false
    },
    createTodo() {
      const formData = {
        description: this.todoDescription,
        title: this.todoTitle,
        id: Date.now(),
        category: this.$store.state.currentCategory,
        done: false
      }
      this.$store.dispatch('CREATE_TODO', formData)
      this.categoryTitle = '',
      this.$store.state.todoCreating = false
      if(this.$route.path == '/categories') {
        this.$router.push(`/todos/:t${this.$store.state.currentCategory.id}`) 
      }  
    }
  }
}
</script>