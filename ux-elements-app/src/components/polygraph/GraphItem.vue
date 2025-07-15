<template>
  <div class="graph-item__w">
    <svg width="200" height="200">
      <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axis-label
          v-for="(stat, index) in stats"
          :key="index"
          :stat="stat"
          :index="index"
          :total="stats.length"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import AxisLabel from './AxisLabel.vue'
import { valueToPoint } from './utils'

export default {
  name: 'GraphItem',
  components: { AxisLabel },
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
  computed: {
    points() {
      const total = this.stats.length
      return this.stats
        .map((stat, i) => {
          const { x, y } = valueToPoint(stat.value, i, total)
          return `${x},${y}`
        })
        .join(' ')
    },
  },
}
</script>

<style scoped>
.graph-item__w {
  display: flex;
  justify-content: center;
}

polygon {
  fill: #42b983;
  opacity: 0.8;
}

circle {
  fill: transparent;
  stroke: #999;
}
</style>
