<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <Nabidky />
    <OP />
  </div>
</template>
<script>
import Nabidky from './../components/Nabidky.vue';
import OP from './../components/OP.vue';

export default {
  name: 'Dashboard',
  components: { Nabidky, OP },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.dashboard {
  background: $secondary-blue-bg;
}
</style>
