<script setup>
import Footer from './components/common/Footer.vue'
import Polygraph from './pages/PolygraphPage.vue'
</script>

<template>
  <header>
    <h1>UX Elements App</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <Polygraph />
  </main>
  <Footer />
</template>

<style scoped></style>
