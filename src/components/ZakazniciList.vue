<template>
  <section class="customerList">
    <table class="customerList__table">
      <tr class="customerList__table__headers">
        <th>Id</th>
        <th>Název společnosti</th>
        <th>Adresa</th>
        <th>Město</th>
        <th>Stát</th>
      </tr>
      <tr
        class="customerList__table__row"
        v-for="customer in getCustomers"
        :key="customer.id"
        @click="showCustomerDetails()"
      >
        <td>{{ customer.id }}</td>
        <td>{{ customer.company }}</td>
        <td>{{ customer.address }}</td>
        <td>{{ customer.city }}</td>
        <td>{{ customer.country }}</td>
      </tr>
    </table>
  </section>
</template>

<style lang="scss" scoped>
.customerList {
  // border: 1px solid red;
  height: 60vh;
  &__table {
    width: 80%;
    text-align: left;

    &__row,
    &__headers {
      // border: 1px solid green;
      display: flex;
      width: 100%;
    }

    th {
      width: 15rem;
      font-family: Cinzel;
      padding: 1rem 0;
    }

    td {
      padding: 0.5rem 0;
      width: 15rem;
      font-family: WorkSans;
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
    //
    showCustomerDetails() {
      console.log('clicked table row');
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
