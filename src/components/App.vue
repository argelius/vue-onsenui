<template>
  <ons-tabbar
    :index="index"
    :tabs="tabs"
    @change="onChange">
  </ons-tabbar>
</template>

<script>
	import {OnsTabbar} from 'vue-onsenui';

	export default {
    data() {
      return {
        index: 0,

        tabs: [
          {
            label: 'Home',
            component: 'home'
          },
          {
            label: 'Settings',
            component: 'settings'
          }
        ]
      };
    },

    methods: {
      onChange({index}) {
        this.index = index;
      }
    },

		components: {OnsTabbar}
	};
</script>

<style>
</style>
