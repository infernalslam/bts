<template>
	<div>
		<button class="button" :style="btsType">  {{ message }} </button>
	</div>
</template>

<script>
	export default {
		props: {
     btsStyle: String,
     message: null,
     btsRounded: {
       type: Boolean,
       default: false
     },
    btsType: String
  }
}
</script>

<style scoped>

</style>
