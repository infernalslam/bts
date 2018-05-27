<template>
<div>
  components BTS x Bulma <br>
  <!-- button -->
    <bts-button btsStyle="color: red;" message="BTS"></bts-button>
    <bts-button message="primary" bts-type="is-primary"></bts-button>
    <bts-button message="info" bts-type="is-info" :btsOutlined="true"></bts-button>
    <bts-button message="success" bts-type="is-success" btsSize="medium"></bts-button>
    <bts-button message="warning" bts-type="is-warning" btsSize="small"></bts-button>
    <bts-button message="danger" bts-type="is-danger" btsSize="large"></bts-button>
  <!-- button -->
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
