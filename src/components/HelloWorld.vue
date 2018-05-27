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
  <br>
  <!-- select -->
  <bts-select :bts-data="data" bts-value="name"></bts-select>
</div>
</template>

<script>
import BtsButton from './button'
import BtsSelect from './select'
export default {
  data () {
    return {
      data: [
        { name: 'Primary' },
        { name: 'Info' },
        { name: 'Success' },
        { name: 'Warning' },
        { name: 'Danger' }
      ],
      text: ''
    }
  },
  components: {
    BtsButton,
    BtsSelect
  }
}
</script>

<style scoped>

</style>
