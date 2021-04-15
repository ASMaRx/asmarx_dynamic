import episode

<template>
  <Layout>

    <MarxHead />
    <h1 v-html="$page.episode.title" />

    <div v-html="$page.episode.date" />
    
    <p v-html="$page.episode.description" />

    </p>

    <audio controls>
        <source :src="$page.episode.audio" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
    <div id="download"><a :href="$page.episode.audio">download</a></div>
    </div>


    
  </Layout>
</template>

<page-query>
query ($id: ID!) {
    episode(id: $id) {
        title,
        description,
        date, 
        audio
    }
}
</page-query>

<script>
import MarxHead from '~/components/MarxHead.vue'

export default {
  components: {
      MarxHead
  }
}

</script>