<template>
<div>
  Hello components BTS x Bulma
  <!-- custom style -->
  <bts-button btsStyle="color: red;" message="BTS"></bts-button>
  <bts-button message="BTS" bts-type="is-primary"></bts-button>
  <bts-button message="BTS" bts-type="is-info"></bts-button>
  <bts-button message="BTS" bts-type="is-success"></bts-button>
  <bts-button message="BTS" bts-type="is-warning"></bts-button>
  <bts-button message="BTS" bts-type="is-danger"></bts-button>
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
