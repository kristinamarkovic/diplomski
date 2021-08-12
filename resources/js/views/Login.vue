<template>
  <div>
    <h1>LOGIN</h1>
    <form @keyup.enter="loginUser">
      <input v-model="email" placeholder="Email" />
      <br />
      <br />
      <input v-model="password" placeholder="Password" type="password" />
      <br />
      <br />
      <button type="button" @click="loginUser">Login</button>
    </form>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from "vuex";
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