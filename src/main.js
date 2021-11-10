import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { auth } from './firebase.js';

// eslint-disable-next-line no-unused-vars

// router guard to be sure, that the user is authenticated on the routes that requires authentication (with meta authRequired)

router.beforeEach((to, from, next) => {
  console.log(auth.currentUser);
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      console.log(`Je příhlášen ${auth.currentUser.email}`);
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

// export default // const analytics = getAnalytics(app);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
