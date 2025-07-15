<template>
  <section class="polygraph-page__c">
    <HeadlineItem :tag="'h2'">Polygraph</HeadlineItem>
    <GraphItem :stats="stats" />
    <ControlsList @stat-removed="statRemoved" @stat-changed="statChanged" :stats="stats" />
    <ControlForm @stat-added="statAdded" />
    <pre id="raw-data">{{ stats }}</pre>
  </section>
</template>

<script>
import HeadlineItem from '@/components/base/headlineItem.vue'
import ControlForm from '@/components/polygraph/ControlForm.vue'
import ControlsList from '@/components/polygraph/controlsList.vue'
import GraphItem from '@/components/polygraph/GraphItem.vue'

export default {
  components: { HeadlineItem, ControlsList, ControlForm, GraphItem },
  data() {
    return {
      headline: 'Polygraph',
      stats: [
        { label: 'A', value: 0 },
        { label: 'BBB', value: 100 },
        { label: 'CCCCC', value: 50 },
      ],
    }
  },
  methods: {
    statAdded(stat) {
      const findElement = this.stats.find((i) => {
        return i.label === stat.label
      })

      if (!findElement) {
        this.stats.push({ ...stat })
      } else {
        alert(`Element with label ${stat.label} already exists!`)
      }
    },

    statRemoved(stat) {
      this.stats.splice(this.stats.indexOf(stat), 1)
    },

    statChanged(stat) {
      console.log(stat)

      const index = this.stats.findIndex((i) => {
        return i.label == stat.label
      })

      this.stats[index] = stat
    },
  },
}
</script>

<style scoped></style>
