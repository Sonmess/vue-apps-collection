<script setup>
const props = defineProps(['level', 'job', 'race', 'bio'])
</script>

<template>
  <p>
    Race:
    <span>{{ props.race.charAt(0).toUpperCase() + props.race.slice(1) }}</span>
  </p>
  <p>
    Bio:
    <span> {{ props.bio }} </span>
  </p>
</template>
