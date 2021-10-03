<template>
  <section class="userList">
    <ul class=" userList__tab">
      <li class="userList__tab__description">
        <div class="userList__tab__description__container">
          <div class="userList__tab__description__field">Název společnosti</div>
          <div class="userList__tab__description__field">Adresa</div>
          <div class="userList__tab__description__field">Stát</div>
        </div>
      </li>
      <li
        class="userList__tab__row"
        v-for="customer in getCustomers"
        :key="customer.id"
      >
        <div class="userList__tab__row__container">
          <span>{{ customer.company }}</span>
          <span>{{ customer.address }}</span>
          <span>{{ customer.city }}</span>
          <span>{{ customer.state }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.userList {
  &__tab {
    width: 70%;
    display: flex;
    flex-direction: column;
    &__description {
      width: 100%;
      display: flex;

      &__field {
        border: 1px solid red;
      }
      &__container {
        justify-content: space-evenly;
        width: 100%;
        display: flex;
      }
    }
    &__row {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      &__container {
        display: flex;
      }
    }
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ZakazniciList',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getAllCustomersAction']),
    getAllCustomers() {
      this.getAllCustomersAction();
    },
  },
  mounted() {
    this.getAllCustomers();
  },
  computed: {
    ...mapGetters(['getCustomers']),
  },
};
</script>
