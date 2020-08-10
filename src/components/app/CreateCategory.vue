<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__form">
        <input type="text" v-model="categoryTitle" placeholder="Название категории"><br>
        <div class="btn__wrapper">
          <button @click="cancelCreatingCategory" class="btn">Отмена</button>
          <button @click="createCategory" class="btn">Создать категорию</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreateCategory',
  data: () => ({
    categoryTitle: '',
    categoryId: '',
    categoryTodos: []
  }),
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  methods: {
    cancelCreatingCategory() {
      this.$store.state.categoryCreating = false
    },
    createCategory() {
      const formData = {
        title: this.categoryTitle,
        todos: this.categoryTodos,
        id: Date.now()
      }
      this.$store.dispatch('CREATE_CATEGORY', formData)
      this.categoryTitle = '',
      this.$store.state.categoryCreating = false
    }
  }
}
</script>