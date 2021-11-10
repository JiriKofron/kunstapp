<template>
  <div>
    <div class="nav" id="nav">
      <router-link class="nav__link" to="/">Home</router-link> |
      <router-link class="nav__link" to="/about">About</router-link> |
      <span v-if="isUserAuth"
        ><router-link class="nav__link" to="/dashboard">Dashboard</router-link>
        |
        <router-link class="nav__link" to="/customers">zákazníci</router-link> |
        <button @click="logOut">Log out</button>
        <p>{{ getUser.email }}</p>
      </span>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Cinzel';
  src: url('./assets/Cinzel/Cinzel-VariableFont_wght.ttf') format('truetype');
}

@font-face {
  font-family: 'WorkSans';
  src: url('./assets/Work_Sans/WorkSans-VariableFont_wght.ttf')
    format('truetype');
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 15px;
}

.nav {
  padding: 30px;

  &__link {
    font-family: Cinzel;
    color: $primary-blue;
    font-size: 2rem;
  }
}
</style>

<script>
// import maps of actions and getters from vuex
import { mapActions, mapGetters } from 'vuex';
// eslint-disable-next-line no-unused-vars
import { db } from './firebase.js';

export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    // get the states from vuex about who is the logged in user(getUser) and if any user is even logged in (isUserAuth)
    ...mapGetters(['getUser', 'isUserAuth']),
  },
  created() {
    // check the state of user - if any user is logged or not
    this.authAction();
    console.log(this.$store.state.db);
  },
  methods: {
    // using map of the actions from vuex - log out action to log out the user, and the action for authenticate state of user - in mounted lifecycle hook
    ...mapActions(['logOutAction', 'authAction']),
    // log out function for the user to log of - store the state to the vuex with help of log out action
    logOut() {
      this.logOutAction();
    },
  },
};
</script>
