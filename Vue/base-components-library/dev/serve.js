import Vue from 'vue';
import Dev from './serve.vue';
import vuetify from './plugins/vuetify'
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import BaseComponentsLibrary from '@/entry.esm';
import BaseButton from '@/entry.esm';
Vue.use(BaseComponentsLibrary);
Vue.use(BaseButton);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
