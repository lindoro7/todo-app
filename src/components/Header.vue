<template>
  <header>
    <div  class="container">
      <div class="header__wrapper padding-app">
        <div class="logo">
          <p>ToDo</p>
        </div>
        <!-- <div class="search">
          <div class="search__tasks">
            <input 
              type="text" 
              placeholder="Поиск по карточкам"
              v-model="searchString"
             />
          </div> 
          <div class="search__status">
            <label><input type="radio" checked value="all" name="dva"/>Все</label><br>
            <label><input type="radio" name="dva"/>Выполненные</label><br>
            <label><input type="radio" name="dva"/>Не выполненные</label>
          </div>
        </div> -->
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    searchString: ''
  }),
  computed: {
    ...mapGetters([
      'ALL_TODOS'
    ]),
    filtered() {
      switch(searchString){
        case this.searchString: return [...this.ALL_TODOS].filter((todo) => {return todo.title.toLowerCase()})
        default: return this.ALL_TODOS
      }
    },
  }
}
</script>