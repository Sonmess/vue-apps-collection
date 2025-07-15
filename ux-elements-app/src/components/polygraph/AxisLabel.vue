<template>
  <text :x="point.x" :y="point.y">{{ stat.label }}</text>
</template>

<script>
import { valueToPoint } from './utils'

export default {
  name: 'AxisLabel',
  props: {
    stat: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    point() {
      return valueToPoint(Number(this.stat.value) + 4, this.index, this.total)
    },
  },
}
</script>

<style scoped>
text {
  font-size: 12px;
  fill: #fff;
}
</style>
