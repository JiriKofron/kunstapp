<template>
  <section>
    <h1>Nabídky</h1>
    <button>Nová nabídka</button>
    <NabidkyList />
  </section>
</template>
<script>
import NabidkyList from './NabidkyList.vue';

export default {
  name: 'Nabidky',
  components: { NabidkyList },
  data() {
    return {};
  },
};
</script>
