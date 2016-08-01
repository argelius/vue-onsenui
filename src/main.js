import Vue from 'vue';
import 'onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import VueOnsen from 'vue-onsenui';
import {App,
  Tabbar,
  Home
} from './components';

Vue.use(VueOnsen, {
	components: {Tabbar, Home}
});

new Vue({
  el: 'body',
  components: {App}
});
