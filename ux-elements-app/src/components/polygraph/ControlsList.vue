<template>
  <div class="controls-list__w">
    <ControlItem
      @stat-removed="statRemoved"
      @stat-changed="statChanged"
      v-for="stat in stats"
      :key="stat.label"
      :stat="stat"
    />
  </div>
</template>

<script>
import ControlItem from './ControlItem.vue'
export default {
  name: 'ControlsList',
  components: { ControlItem },
  emits: ['statRemoved', 'statChanged'],
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
  methods: {
    statRemoved(stat) {
      if (this.stats.length > 3) {
        this.$emit('statRemoved', stat)
      } else {
        alert('You can NOT delete more stats !')
      }
    },

    statChanged(stat) {
      this.$emit('statChanged', stat)
    },
  },
}
</script>

<style scoped>
.controls-list__w {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 21px;
  margin: 1em auto;
}

.controls-list__w:hover {
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
}
</style>
