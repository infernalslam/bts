<template>
<div>
  Hello components BTS x Bulma
  <bts-button :message="Bts"></bts-button>
</div>
</template>

<script>
import BtsButton from './button/index'
export default {
  components: {
    BtsButton
  }
}
</script>

<style scoped>

</style>
