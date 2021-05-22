<template>
  <main>
    <HomeHeader />
    <ItemsContainer :items="bootcamps" title="Bootcamps in Brussels" />
    <ItemsContainer :items="jobs" title="Find a job" />
    <ItemsContainer :items="tutorials" title="JavaScript tutorials" />
  </main>
</template>

<script>
import data from "../../data"
import HomeHeader from "../../components/sections/HomeHeader"
import ItemsContainer from "../../components/sections/ItemsContainer"

export default {
  components: { HomeHeader, ItemsContainer },
  data() {
    return {
      bootcamps: data.bootcamps,
      jobs: data.jobs,
      tutorials: data.tutorials,
    }
  },
}
</script>
