<template>
  <ons-tabbar
    :index="index"
    :tabs="tabs"
  ></ons-tabbar>
</template>

<script>
	import {OnsTabbar} from 'vue-onsenui';

	export default {
    data() {
      return {
        index: 0,
        tabs: [
          {
            component: 'home',
            label: 'Home',
            icon: 'ion-ios-home-outline'
          }
        ],
      };
    },

		components: {OnsTabbar}
	};
</script>

<style>
</style>
