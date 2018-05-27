<template>
  <div class="button " :class="`${btsType}  ${btsRounded} ${btsOutlined} ${size}`" :style="btsStyle">  {{ message }} </div>
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
    btsType: {
      type: String,
      default: this.btsStyle ? this.btsStyle : ''
    },
    btsOutlined: {
      type: null,
      default: this.btsOutlined ? this.btsOutlined : ''
    },
    btsSize: {
      type: String,
      default: this.btsSize ? this.btsSize : ''
    }
  },
  computed: {
    size () {
      let size = this.btsSize.toLowerCase()
      switch (size) {
        case 'small' : return 'is-small'
        case 'medium' : return 'is-medium'
        case 'large': return 'is-large'
        default : return ''
      }
    }
  }
}
</script>

<style scoped>

.is-primary {
  background-color: #2074ff !important;
}
 /* optional hover color */
/* .is-primary:hover {
  box-shadow: 0 9px 28px -9px #2074ff !important;
} */

.is-success {
  background-color: #45c93a !important;
}
.is-warning {
  background-color: #ffba00 !important;
}
.is-danger {
  background-color: #ff4657 !important;
}

</style>
