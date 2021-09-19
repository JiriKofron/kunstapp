<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="!isUserAuth">
      <h1>Login to Your Account</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="logIn">Log in</button></p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    // the same as for app vue - using vuex getters to retrieve who is logged in (getUser) and if any user is logged in (isUserAuth)
    ...mapGetters(['getUser', 'isUserAuth']),
  },
  methods: {
    ...mapActions(['logInAction']),
    // logIn function that is using vuex action - email and password is retrieved from the login form
    logIn() {
      this.logInAction({ email: this.email, password: this.password });
    },
  },
};
</script>
