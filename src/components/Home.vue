<template>
  <ons-page>
    <ons-toolbar>
      <div class="center">Home</div>
    </ons-toolbar>

    <ons-list>
      <ons-list-header>
        Components
      </ons-list-header>
      <ons-list-item
        tappable
        @click="$push({component: 'pull-hook'})">
        <div class="center">
          Pull to refresh
        </div>
      </ons-list-item>
    </ons-list>
  </ons-page>
</template>

<script>
	export default {
	};
</script>
