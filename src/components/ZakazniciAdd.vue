<template>
  <section class="customer">
    <h2>Nový zákazník</h2>
    <form class="customer__form">
      <span class="customer__form__fields">
        <label for="company">Company:</label>
        <input id="company" v-model="company" />
      </span>
      <span class="customer__form__fields">
        <label for="FirstName">Jméno</label>
        <input type="text" id="FirstName" v-model="firstName" />
      </span>
      <span class="customer__form__fields"
        ><label for="LastName">Příjmení</label>
        <input type="text" id="LastName" v-model="lastName" />
      </span>
      <span class="customer__form__fields"
        ><label for="Address">Adresa:</label>
        <input type="text" id="Address" v-model="address"
      /></span>
      <span class="customer__form__fields">
        <label for="Address">Adresa2:</label>
        <input type="text" id="Address" v-model="address2"
      /></span>
      <span class="customer__form__fields"
        ><label for="City">Město</label>
        <input type="text" id="City" v-model="city"
      /></span>
      <span class="customer__form__fields"
        ><label for="State">Stát</label>
        <input type="text" id="State" v-model="state"
      /></span>
      <span class="customer__form__fields"
        ><label for="Country">Země</label>
        <input type="text" id="Country" v-model="country"
      /></span>
      <span class="customer__form__fields"
        ><label for="ZIP">ZIP</label> <input type="text" id="ZIP" v-model="ZIP"
      /></span>
      <span class="customer__form__fields"
        ><label for="IC">IČO</label> <input type="text" id="IC" v-model="IC"
      /></span>
      <span class="customer__form__fields"
        ><label for="VAT">VAT</label> <input type="text" id="VAT" v-model="VAT"
      /></span>
      <button>Přidat</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ZakazniciAdd',
  data() {
    return {
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
    };
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
