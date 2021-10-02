<template>
  <section>
    <router-link to="/customers/add">
      <button>Nový zákazník</button>
    </router-link>
    <ZakazniciList />
  </section>
</template>
<script>
import ZakazniciList from './ZakazniciList.vue';

export default {
  name: 'Zakaznici',
  components: { ZakazniciList },
  data() {
    return {};
  },
};
</script>
