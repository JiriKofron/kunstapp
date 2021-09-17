<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Login to Your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="logIn">Log in</button></p>
  </div>
</template>

<script>
// var firebase = require('firebase/compat/app');
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['logInAction']),
    logIn() {
      this.logInAction({ email: this.email, password: this.password });
    },
  },
};
</script>
