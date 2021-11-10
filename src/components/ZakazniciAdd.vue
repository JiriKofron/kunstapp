<template>
  <section class="customer">
    <h2>Nový zákazník</h2>
    <form class="customer__form">
      <span class="customer__form__fields">
        <label for="company">Company:</label>
        <input id="company" v-model="customer.company" />
      </span>
      <span class="customer__form__fields">
        <label for="FirstName">Jméno</label>
        <input type="text" id="FirstName" v-model="customer.firstName" />
      </span>
      <span class="customer__form__fields"
        ><label for="LastName">Příjmení</label>
        <input type="text" id="LastName" v-model="customer.lastName" />
      </span>
      <span class="customer__form__fields"
        ><label for="Address">Adresa:</label>
        <input type="text" id="Address" v-model="customer.address"
      /></span>
      <span class="customer__form__fields">
        <label for="Address">Adresa2:</label>
        <input type="text" id="Address" v-model="customer.address2"
      /></span>
      <span class="customer__form__fields"
        ><label for="City">Město</label>
        <input type="text" id="City" v-model="customer.city"
      /></span>
      <span class="customer__form__fields"
        ><label for="State">Stát</label>
        <input type="text" id="State" v-model="customer.state"
      /></span>
      <span class="customer__form__fields"
        ><label for="Country">Země</label>
        <input type="text" id="Country" v-model="customer.country"
      /></span>
      <span class="customer__form__fields"
        ><label for="ZIP">ZIP</label>
        <input type="text" id="ZIP" v-model="customer.ZIP"
      /></span>
      <span class="customer__form__fields"
        ><label for="IC">IČO</label>
        <input type="text" id="IC" v-model="customer.IC"
      /></span>
      <span class="customer__form__fields"
        ><label for="VAT">VAT</label>
        <input type="text" id="VAT" v-model="customer.VAT"
      /></span>
      <button @click.prevent="addCustomer()">Přidat</button>
    </form>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { fs, db } from './../firebase.js';
// eslint-disable-next-line no-unused-vars
import { collection, addDoc } from 'firebase/firestore';

export default {
  name: 'ZakazniciAdd',
  data() {
    return {
      customer: {
        company: '',
        firstName: '',
        lastName: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        ZIP: '',
        VAT: '',
        IC: '',
      },
    };
  },
  methods: {
    // function that add customer to the firestore database
    async addCustomer() {
      //this.customer is not available inside await addDoc function, so we declare helping variable "customer", that store the data from "this.customer" form
      let customer = this.customer;
      // calling await function that write the form data to the database collection "zakaznici" - details are in variable "customer"
      const addedCustomer = await addDoc(collection(db, 'zakaznici'), {
        customer,
      });
      console.log(addedCustomer);
      //empty the form
      // bug to solve!!! When the customer is send, it is necessary to "restart" the form, so the new customer can be add directly. Right now, there is an error !!!!!
      this.customer = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.customer {
  display: flex;
  flex-direction: column;
  &__form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    &__fields {
      display: flex;
      width: 15rem;
      margin: 0.5rem 0;
      justify-content: space-between;
      label {
        margin: 0.5rem;
      }
    }
  }
}
</style>
