import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    allTodos: [],
    categoryCreating: false,
    todoCreating: false,
    currentCategory: {},
    showAllTodos: false,
    showDoneTodos: false,
    showNotDoneTodos: false,
    searchByString: ''
  },
  mutations: {
    CREATE_CATEGORY: (state, category) => { state.categories.push(category) },
    DELETE_CATEGORY: (state , category) => {
      state.categories = state.categories.filter(cat => cat.title !== category)
    },
    CREATE_TODO: (state, todo) => {
      state.currentCategory.todos.push(todo)
      state.allTodos.push(todo)
    },
    DELETE_TODO: (state, todo) => {
      todo.category.todos = todo.category.todos.filter(t => t.id !== todo.id)
      state.allTodos = state.allTodos.filter(t => t.id !== todo.id)
    },
    CHANGE_TODO_DONE: (state, todo) => {todo.done == false ? todo.done = true : todo.done = false}  
  },
  actions: {
    CREATE_CATEGORY({ commit }, category) { commit('CREATE_CATEGORY', category) },
    DELETE_CATEGORY({ commit }, category) { commit('DELETE_CATEGORY', category) },
    CREATE_TODO({ commit }, todo) { commit('CREATE_TODO', todo) },
    DELETE_TODO({ commit }, todo) { commit('DELETE_TODO', todo) },
    CHANGE_TODO_DONE({ commit }, todo) {commit('CHANGE_TODO_DONE', todo)}
  },
  getters: {
    CATEGORIES: state => state.categories,
    ALL_TODOS: state => state.allTodos,
    TODOS: state => state.currentCategory.todos,
    CATEGORY_CREATING: state => state.categoryCreating,
    TODO_CREATING: state => state.todoCreating,
    ALL_TODOS: state => state.allTodos,
    DONE_TODOS: state => [...state.allTodos].filter(todo => todo.done === true),
    NOT_DONE_TODOS: state => [...state.allTodos].filter(todo => todo.done === false)
  }
})
