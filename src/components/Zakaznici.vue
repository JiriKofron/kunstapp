<template>
  <section class="customer">
    <router-link class="customer__button" to="/customers/add">
      <button class="customer__button--add">Nový zákazník</button>
    </router-link>
    <div class="customer__component">
      <ZakazniciList class="customer__component__container" />
      <ZakazniciDetails class="customer__component__container" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.customer {
  display: flex;
  flex-direction: column;

  &__button {
    width: 100%;
    flex-basis: 100%;
  }

  &__component {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

hr {
  width: 100%;
  height: 0;
  flex-basis: 100%;
  flex-wrap: wrap;
}
</style>

<script>
import ZakazniciList from './ZakazniciList.vue';
import ZakazniciDetails from './ZakazniciDetails.vue';

export default {
  name: 'Zakaznici',
  components: { ZakazniciList, ZakazniciDetails },
  data() {
    return {};
  },
};
</script>
