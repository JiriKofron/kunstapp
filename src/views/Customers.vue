<template>
  <section>
    <h2>Zákazníci</h2>
    <Zakaznici />
  </section>
</template>
<script>
import Zakaznici from './../components/Zakaznici.vue';

export default {
  name: 'Customers',
  components: { Zakaznici },
  data() {
    return {};
  },
};
</script>
