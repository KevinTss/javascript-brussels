<template>
  <main>
    <HomeHeader />
    <ItemsContainer
      id="bootcamps"
      :items="bootcamps"
      title="Bootcamps in Brussels"
    />
    <ItemsContainer id="jobs" :items="jobs" title="Find a job" />
    <ItemsContainer
      id="youtube"
      :items="youtubeLinks"
      title="Youtube resources"
    />
    <ItemsContainer
      id="tutorials"
      :items="tutorials"
      title="JavaScript tutorials"
    />
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
      youtubeLinks: data.youtubeLinks,
    }
  },
}
</script>
