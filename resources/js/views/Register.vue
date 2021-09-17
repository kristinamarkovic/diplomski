<template>
  <div>
    <div class="wrapper p-t-150">
      <div class="left-side w-60">
        <h1 class="title main-title text-left">REGISTER</h1>
        <p class="main-text main-text-home m-b-20">
          Welcome! Create an account to get started.
        </p>
        <form @keyup.enter="registerUser" class="form w-50 m-b-20">
          <div class="form-title">
            <h2>Create Account</h2>
          </div>
          <div class="form-group d-flex-column">
            <label class="form-label">Name</label>
            <input v-model="name" class="form-input" placeholder="Name" />
          </div>
          <div class="form-group d-flex-column">
            <label class="form-label">Email</label>
            <input v-model="email" class="form-input" placeholder="Email" />
          </div>
          <div class="form-group d-flex-column">
            <label class="form-label">Password</label>
            <input v-model="password" class="form-input" type="password" placeholder="Password" />
          </div>
          <div class="form-group d-flex-column">
            <label class="form-label">Confirm Password</label>
            <input v-model="confirmPassword" class="form-input" type="password" placeholder="Confirm Password" />
          </div>
          <div class="form-group">
            <button type="button" class="form-button" @click="registerUser">Sign Up</button>
          </div>
          <div class="form-group">
            <router-link to="/login" class="quick-link">Already have an account?</router-link>
          </div>
        </form>
      </div>
      <div class="right-side w-40">
          <div class="image-savings-4"></div>
      </div>
    </div>
    <!-- <h1>REGISTER</h1>
    <form @keyup.enter="registerUser">
      <input v-model="name" placeholder="Name" />
      <br />
      <br />
      <input v-model="email" placeholder="Email" />
      <br />
      <br /><router-link to="/login" class="nav-link">Login account?</router-link>
      <input v-model="password" placeholder="Password" type="password" />
      <input v-model="confirmPassword" placeholder="Confirm Password" type="password" />
      <br />
      <br />
      <button type="button" @click="registerUser">registerUser</button>
    </form>
    <div class="quick-links">
        <router-link to="/login" class="nav-link">Login account?</router-link>
    </div> -->
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