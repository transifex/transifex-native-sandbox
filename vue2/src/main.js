import Vue from 'vue';
import App from './App.vue';
import { tx } from '@transifex/native';
import { TransifexVue } from '@transifex/vue2';

tx.init({
  token: '1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1',
});

Vue.config.productionTip = false;
Vue.use(TransifexVue);

new Vue({
  render: (h) => h(App),
}).$mount('#root');
