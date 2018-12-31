import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue'
import sub from './components/Sub.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.component('SubVue',sub);

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
