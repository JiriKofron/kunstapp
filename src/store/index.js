import { createStore } from 'vuex';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import router from './../router';

const initialState = () => {
  return {
    user: null,
  };
};

export default createStore({
  state: initialState(),
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
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
    // eslint-disable-next-line no-unused-vars
    logOutAction({ commit }) {
      const auth = getAuth();
      return signOut(auth)
        .then(() => {
          console.log('odhlášen');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // Tohle nefunguje správně!!!!
    // eslint-disable-next-line no-unused-vars
    authAction({ commit }) {
      return onAuthStateChanged((user) => {
        if (user) {
          // https://firebase.google.com/docs/reference/js/firebase.User
          commit('setUser', user);
          console.log(user);
          // ...
        } else {
          commit('setUser', null);
          console.log('musí být přihlášen');
          // User is signed out
          // ...
        }
      });
    },
  },
  modules: {},
});
