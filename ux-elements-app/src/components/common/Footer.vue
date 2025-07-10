<template>
  <footer>
    <p>&copy; {{ appInfo.name }}</p>
    <p>
      Created by <a :href="appInfo.github">{{ appInfo.author }}</a>
    </p>
    <p>Powered by <a href="https://vuejs.org/">Vue.js</a></p>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
const appInfo = inject('appInfo')
</script>
