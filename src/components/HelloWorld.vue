<template>
  <div class="hello">
    <h2 class="center"><router-link to="/categories">{{ msg }}</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

