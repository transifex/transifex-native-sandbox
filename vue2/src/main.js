import Vue from 'vue';
import App from './App.vue';
import { tx } from '@transifex/native';
import { TransifexVue } from '@transifex/vue2';

tx.init({
  token: '1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504',
});

Vue.config.productionTip = false;
Vue.use(TransifexVue);

new Vue({
  render: (h) => h(App),
}).$mount('#root');
