<template>
  <div>
    <h1>LOGIN</h1>
    <form @keyup.enter="registerUser">
      <input v-model="name" placeholder="Name" />
      <br />
      <br />
      <input v-model="email" placeholder="Email" />
      <br />
      <br />
      <input v-model="password" placeholder="Password" type="password" />
      <input v-model="confirmPassword" placeholder="Confirm Password" type="password" />
      <br />
      <br />
      <button type="button" @click="registerUser">registerUser</button>
    </form>
    <div class="quick-links">
        <router-link to="/login" class="nav-link">Login account?</router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'Register',
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
     async registerUser () {
        // try {
        //   this.$v.$touch()
        //   if(!this.$v.$invalid) {
        //     this.loader = true;
        //     let registerForm = {
        //       email: this.email,
        //       name: this.username,
        //       password: this.password,
        //       password_confirmation: this.confirmPassword
        //     }
        //     await this.$store.dispatch('register', registerForm);
        //     await this.$store.dispatch('login', registerForm);
        //     if(this.getRegisterMessage === '') {
        //       await this.$router.push('/')
        //     }
        //     this.loader = false;
        //   }
        // } catch (e) {
        //   console.log(e);
        // }
        try {
          let registerForm = {
              email: this.email,
              name: this.name,
              password: this.password,
              password_confirmation: this.confirmPassword
            }
            await this.$store.dispatch('register', registerForm);
            await this.$store.dispatch('login', registerForm);
            if(this.getRegisterMessage === '') {
              await this.$router.push('/')
            }
        }
        catch(e) {
          console.log(e)
        }
      },
  },
  computed: {
    ...mapGetters(['getRegisterMessage']),
  }
}
</script>

<style>

</style>