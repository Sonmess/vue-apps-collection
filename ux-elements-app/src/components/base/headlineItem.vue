<template>
  <component :is="tag" class="section-headline">
    <span class="before">~</span>
    <slot />
    <span class="after">~</span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h2',
    },
  },
}
</script>

<style scoped>
.section-headline {
  text-align: center;
  font-style: italic;
  transition: border 0.5s ease-in;
  padding-bottom: 1px;
}

h1.section-headline {
  font-size: 3em;
  line-height: 3.4em;
}

h2.section-headline {
  font-size: 2em;
  line-height: 2.4em;
}

h3.section-headline {
  font-size: 1.5em;
  line-height: 2em;
}

.section-headline:hover {
  border-bottom: 1px solid #fff;
  padding-bottom: 0;
}

.section-headline .before,
.section-headline .after {
  display: inline-block;
  transition: transform 0.5s ease-in;
}

.section-headline .before {
  padding-right: 0.5em;
}

.section-headline .after {
  padding-left: 0.5em;
}

.section-headline:hover .before {
  transform: rotate(360deg);
}

.section-headline:hover .after {
  transform: rotate(-360deg);
}
</style>
