import { createStore } from 'vuex';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// eslint-disable-next-line no-unused-vars
import { db, fs } from './../firebase.js';
import { collection, getDocs, limit, query } from 'firebase/firestore';

import router from './../router';

// setting the initial state of the user and error, so we can be sure that the user has to log in everytime for first visit
const initialState = () => {
  return {
    user: null,
    error: null,
    db,
    customers: [],
  };
};

export default createStore({
  state: initialState(),
  // mutation for changing state of the user - everytime the user is changed (log in, log of, etc the payload object is representing the new values - changing the initialState of the user, or previous state of the user)
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setCustomers(state, payload) {
      state.customers = payload;
    },
  },
  // getters showing the actual state of the user
  getters: {
    // get the actual state of the user, thanks to this getter, the app know which user is logged in
    getUser(state) {
      return state.user;
    },
    // checking is any user is logged in - !! - means the return can be only true or false
    isUserAuth(state) {
      return !!state.user;
    },
    getCustomers(state) {
      //console.log('getter get customers spuštěn');
      return state.customers;
    },
  },
  actions: {
    //log in action, that logs in user with email and password write in the form
    // commit means that is put the response user to the vuex state with the help of mutation function setUser
    // eslint-disable-next-line no-unused-vars
    logInAction({ commit }, payload) {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((response) => {
          // Signed in
          console.log(response.user);
          commit('setUser', response.user);
          router.push('/dashboard');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    },
    // log out action for log out button, to be sure that user without log in can't stay on the restricted page the router redirect the user to the home page with log in form

    // eslint-disable-next-line no-unused-vars
    logOutAction({ commit }) {
      const auth = getAuth();
      return signOut(auth)
        .then(() => {
          console.log('odhlášen');
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // authentication action that commit the change everytime the user state is changed and store new details in vuex state
    authAction({ commit }) {
      const auth = getAuth();
      return auth.onAuthStateChanged((user) => {
        if (user) {
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user);
          commit('setUser', user);

          // ...
        } else {
          console.log('musí být přihlášen');
          commit('setUser', null);

          // User is signed out
          // ...
        }
      });
    },

    async getAllCustomersAction({ commit }) {
      // Vymyslet, jak udělat, aby se při každé návštěve stránky "zákazníků" nedublovali záznamy v this.state.customers, ale aktualizovali se jen nové záznamy - pak můžu následující řádek dát pryč, takto je to myslím blbě, jelikož pokaždé nulovat state je asi blbost
      this.state.customers = [];
      // Tady omezuju počet načtených zákazníků na 25, aby mi to nenačítalo celou databázi najednou, řešil bych to listováním a abecedními filtry, jen to musím nastudovat.
      const q = query(collection(db, 'zakaznici'), limit(25));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        const customer = doc.data().customer;
        customer.id = doc.id;
        this.state.customers.push(customer);
        const customers = this.state.customers;
        // console.log(this.state.customers);
        commit('setCustomers', customers);
      });
    },
  },
  modules: {},
});
