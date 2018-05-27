<template>
<div>
  <button class="button" :class="btsType + btsRounded" :style="btsStyle">  {{ message }} </button>
</div>
</template>

<script>
export default {
  props: {
    btsStyle: null,
    message: String,
    btsRounded: {
      type: null,
      default: this.btsRounded ? 'is-rounded' : ''
    },
    btsType: String
  }
}
</script>

<style scoped>

</style>
