<template>
  <section>
    <router-link to="/customers/add">
      <button>Nový zákazník</button>
    </router-link>
    <ul>
      <li>Zákazník 1</li>
      <li>Zákazník 2</li>
      <li>Zákazník 3</li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Zakaznici',
  data() {
    return {};
  },
};
</script>
