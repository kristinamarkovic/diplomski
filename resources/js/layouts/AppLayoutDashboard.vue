<template>
  <div>
    <div class="layout layout-dashobard">
      <header class="header">
        <a class="nav-link" @click="logoutUser" v-if="isLogged">Logout</a>
        <year-picker></year-picker>
      </header>
      <slot />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import YearPicker from '../common/components/forms/YearPicker.vue'
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
  },
  components: {
    YearPicker
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: red;
}
</style>