<template>
  <div class="select">
    <select>
      <option v-for="(item, index) in setData" :key="index"> {{ item }} </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    btsData: {
      type: Array,
      default: () => []
    },
    btsValue: String
  },
  computed: {
    setData () {
      return this.btsData.map(i => i[this.btsValue])
    }
  }
}
</script>

<style scoped>

</style>
