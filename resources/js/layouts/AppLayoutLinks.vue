
<template>
  <div>
    <div class="nav">
      <div class="logo">
        <span class="logo-text">Debico</span>
        <span class="logo-image"></span>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppLayoutLinks"
  }
</script>

<style scoped>

</style>