<script setup>
const props = defineProps(['name', 'level', 'job'])
const getImagePath = (job) => {
  return `../../src/assets/class_${job.toLowerCase()}.png`
}
</script>

<template>
  <header>
    <section>
      <h1>{{ props.name }}</h1>
    </section>
    <section class="level_and_class">
      <h2>{{ props.level }}</h2>
      <img class="class_logo" :src="getImagePath(props.job)" />
    </section>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 25px;
}

header .level_and_class {
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 8px;
}

.class_logo {
  height: 50px;
  margin-top: -10px;
}
</style>
