<template>
  <div>
    <header class="header" />
      <a class="nav-link" @click="logoutUser" v-if="isLogged">Logout</a>
    <slot />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "AppLayoutDashboard",
  computed: {
      ...mapGetters([
          'isLogged'
      ]),
  },
  methods: {
        async logoutUser () {
            await this.$store.dispatch('logout');
            if(this.$router.currentRoute.path !== '/') {
              await this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: red;
}
</style>