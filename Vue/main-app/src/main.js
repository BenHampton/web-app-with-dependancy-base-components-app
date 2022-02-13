import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// the published repo url https://www.npmjs.com/package/base-components-library
import { BaseButton } from 'base-components-library'

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
