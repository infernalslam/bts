<template>
<div>
  Hello components BTS x Bulma
  <!-- custom style -->
  <bts-button btsStyle="color: red;" message="BTS"></bts-button>
  <bts-button message="primary" bts-type="is-primary"></bts-button>
  <bts-button message="info" bts-type="is-info"></bts-button>
  <bts-button message="success" bts-type="is-success"></bts-button>
  <bts-button message="warning" bts-type="is-warning"></bts-button>
  <bts-button message="danger" bts-type="is-danger"></bts-button>
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
