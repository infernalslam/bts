<template>
<div>
  components BTS x Bulma <br>
  <!-- button -->
    <bts-button btsStyle="color: red;" message="BTS"></bts-button>
    <bts-button message="Primary" bts-type="is-primary"></bts-button>
    <bts-button message="Info" bts-type="is-info" :btsOutlined="true"></bts-button>
    <bts-button message="Success" bts-type="is-success" btsSize="medium"></bts-button>
    <bts-button message="Warning" bts-type="is-warning" btsSize="small"></bts-button>
    <bts-button message="Danger" bts-type="is-danger" btsSize="large"></bts-button>
  <!-- button -->
</div>
</template>

<script>
import BtsButton from './button'
export default {
  components: {
    BtsButton
  }
}
</script>

<style scoped>

</style>
