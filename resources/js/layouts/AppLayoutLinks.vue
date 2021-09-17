
<template>
  <div>
    <div class="nav">
      <div class="logo">
        <span class="logo-text">Debico</span>
        <span class="logo-image"></span>
      </div>
      <div class="links">
        <router-link class="link-nav" to="/">Home</router-link>
        <router-link class="link-nav" to="/login">Sign In</router-link>
        <router-link class="link-nav button-signup" to="/register">Sign Up, Its Free</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppLayoutLinks"
  }
</script>