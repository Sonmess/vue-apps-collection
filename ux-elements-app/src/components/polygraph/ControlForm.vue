<template>
  <form id="control-add" class="control-add__w">
    <div class="control-form-group">
      <label for="control-name">Add new stat name</label>
      <input type="text" name="control-name" id="control-name" v-model="stat.label" />
    </div>

    <div class="control-form-group">
      <label for="control-value">Add new stat range</label>
      <input type="range" name="control-value" v-model="stat.value" />
      <input
        type="number"
        @input="controlNumber($event)"
        name="control-value-number"
        id="control-value"
        v-model="stat.value"
      />
    </div>

    <div class="control-form-group">
      <button @click.prevent="controlClear()" class="clear">Clear</button>
      <button @click.prevent="controlAdd()" class="add">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ControlForm',
  emits: ['statAdded'],
  data() {
    return {
      stat: {
        label: '',
        value: 0,
      },
    }
  },
  methods: {
    controlNumber(e) {
      this.stat.value = Number(e.currentTarget.value)
    },

    controlAdd() {
      if (this.stat.label) {
        this.$emit('statAdded', this.stat)
        this.controlClear()
      }
    },

    controlClear() {
      this.stat.label = ''
      this.stat.value = 0
    },
  },
}
</script>

<style scoped>
.control-add__w {
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 21px;
  gap: 10px;
}

.control-add__w:hover {
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
}

.control-form-group {
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
}

.control-form-group label {
  flex-grow: 1;
  flex-basis: 100%;
  font-weight: bold;
  font-size: 1.2em;
  color: #fff;
}

.control-form-group input {
  flex-grow: 1;
  height: 2em;
  border-radius: 6px;
  border: 0 none;
  padding: 0 10px;
  font-size: 16px;
}

.control-form-group input[type='number'] {
  width: 70px;
  flex-grow: 0;
}

.control-form-group input[type='range'] {
  padding: 0;
}

.control-form-group button {
  flex-grow: 1;
  border-radius: 6px;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  border: 0 none;
  text-transform: uppercase;
}

button.clear {
  background-color: #ffb731;
}

button.clear:hover {
  background-color: #ffa620;
}

button.add {
  background-color: #42b983;
}

button.add:hover {
  background-color: #42ca94;
}
</style>
