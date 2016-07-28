import Vue from 'vue';
import 'onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import VueOnsen from 'vue-onsenui';
import App from './App.vue';

Vue.use(VueOnsen, {
	components: {}
});

new Vue({
  el: 'body',
  components: {App}
});
