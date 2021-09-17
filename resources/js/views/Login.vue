<template>
  <div>
    <div class="wrapper p-t-150">
      <div class="left-side w-60">
        <h1 class="title main-title text-left">LOGIN</h1>
        <p class="main-text main-text-home m-b-20">
          Login into your account. Sign in with your email and password.
        </p>
        <form @keyup.enter="loginUser" class="form w-50 m-b-20">
          <div class="form-title">
            <h2>Sign In</h2>
          </div>
          <div class="form-group d-flex-column">
            <label class="form-label">Email</label>
            <input v-model="email" class="form-input" placeholder="Email" />
          </div>
          <div class="form-group d-flex-column">
            <label class="form-label">Password</label>
            <input v-model="password" class="form-input" type="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <button type="button" class="form-button" @click="loginUser">Sign In</button>
          </div>
        </form>
      </div>
      <div class="right-side w-40">
          <div class="image-savings"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(['getLoginMessage', 'user']),
  },
  methods: {
      async loginUser () {
      try {
        let loginForm = {
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch('login', loginForm);
        //SREDITI OVAJ FLOW SA FORMOM, napraviti komponentice za Input polja i styles i button polja
        console.log(this.getLoginMessage, 'loginMsg')
        if(this.getLoginMessage === '') {
          await this.$router.push('/dashboard')
        }
      } catch (e) {
        console.log(e);
      }
    },
  }
}
</script>
<style>
</style>