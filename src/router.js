import VueRouter from 'vue-router';
import Connector from './views/Connector.vue';
import Hero from './views/Hero.vue';

export default new VueRouter({
	routes: [{
		path: '/',
		component: Hero,
	}, {
		path: '/connector',
		component: Connector,
	}]
});
