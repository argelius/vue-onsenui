import Vue from 'vue';
import 'onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import VueOnsen from 'vue-onsenui';
import {
  App,
  Tabbar,
  Home,
  PullHook
} from './components';

Vue.use(VueOnsen, {
	components: {
    Tabbar,
    Home,
    PullHook
  }
});

new Vue({
  el: 'body',
  components: {App}
});
