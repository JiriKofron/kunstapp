<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span v-if="isUserAuth"
        ><router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/customers">Zákazníci</router-link> |
        <button @click="logOut">Log out</button>
        <p>{{ getUser.email }}</p>
      </span>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
// import maps of actions and getters from vuex
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    // get the states from vuex about who is the logged in user(getUser) and if any user is even logged in (isUserAuth)
    ...mapGetters(['getUser', 'isUserAuth']),
  },
  mounted() {
    // check the state of user - if any user is logged or not
    this.authAction();
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
