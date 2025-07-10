<script setup>
import { ref } from 'vue'
import CardHeader from './components/CardHeader.vue'
import CardStats from './components/CardStats.vue'
import EditForm from './components/EditForm.vue'

//starter data
const data = {
  name: 'River',
  level: 2,
  job: 'ranger',
  race: 'elf',
  bio: 'With unwavering determination and unmatched swordsmanship, they carve a path through chaos, leaving a trail of defeated foes in their wake.',
}

//data
const name = ref(data.name)
const level = ref(data.level)
const job = ref(data.job)
const race = ref(data.race)
const bio = ref(data.bio)

//respawn function
const respawn = () => {
  name.value = data.name
  level.value = data.level
  job.value = data.job
  race.value = data.race
  bio.value = data.bio
}
</script>

<template>
  <section id="character_card">
    <CardHeader :name="name" :level="level" :job="job" />
    <CardStats :race="race" :bio="bio" />
    <button @click="respawn">Respawn?</button>
  </section>
  <EditForm
    v-model:name.trim.cap="name"
    v-model:bio="bio"
    v-model:level.number="level"
    v-model:race="race"
    v-model:job="job"
  />
</template>

<style scoped>
#character_card {
  background: white;
  padding: 25px;
  max-width: 800px;
  transform: rotate(1deg);
  box-shadow: #00000022 5px 5px 2px;
  border: double #a68d67 3px;
  margin-bottom: 70px;
  padding-bottom: 30px;
}
#character_card button {
  background-color: #a68d67;
  border: 0;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s;
}
#character_card button:hover {
  transform: scale(1.1);
}
</style>
