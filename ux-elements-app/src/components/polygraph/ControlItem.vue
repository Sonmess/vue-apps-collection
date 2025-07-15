<template>
  <div class="control-item__w">
    <label>{{ stat.label }}</label>
    <input @input="changed($event)" type="range" min="0" max="100" :value="stat.value" />
    <span class="control-value">{{ stat.value }}</span>
    <button @click="remove()" class="control-remove">X</button>
  </div>
</template>

<script>
class ControlStat {
  constructor(label, value) {
    this.label = label
    this.value = value
  }
}

export default {
  name: 'ControlItem',
  emits: ['statRemoved', 'statChanged'],
  props: {
    stat: {
      type: ControlStat,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit('statRemoved', this.stat)
    },

    changed(e) {
      this.$emit('statChanged', { label: this.stat.label, value: e.currentTarget.value })
    },
  },
}
</script>

<style scoped>
.control-item__w {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

label {
  min-width: 60px;
  font-weight: bold;
}

input[type='range'] {
  flex-grow: 1;
}

.control-value {
  width: 30px;
  text-align: center;
}

button {
  border-radius: 6px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  align-self: flex-end;
}
</style>
