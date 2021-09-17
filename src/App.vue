<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <button @click="logOut">Log out</button>
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
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    this.authAction();
  },
  methods: {
    ...mapActions(['logOutAction']),
    ...mapActions(['authAction']),
    logOut() {
      this.logOutAction();
    },
  },
};
</script>
