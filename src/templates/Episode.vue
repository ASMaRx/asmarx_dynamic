import episode

<template>
  <Layout>

    <MarxHeadSmall />
    <h1 v-html="$page.episode.title" />

    <div v-html="$page.episode.date" />
    
    <p v-html="$page.episode.description" />

    </p>

    <span v-for="thing in $page.episode.stuff">
      <div v-if="thing.type==='audio'">
          <br><br>
          {{thing.text}}
          <audio controls>
          <source :src="thing.url" type="audio/mpeg">
          Your browser does not support the audio tag.
          </audio>
          <div id="download"><a :href="thing.url">download</a></div>
          </div>
      </div> 
      <div v-if="thing.type=='link'">
          <div><a :href="thing.url">{{thing.text}}</a><br></div>
      </div> 
    </span>

    


    
  </Layout>
</template>

<page-query>
query ($id: ID!) {
    episode(id: $id) {
        title,
        description,
        date, 
        stuff {
          type,
          url,
          text
        }
    }
}
</page-query>

<script>
import MarxHeadSmall from '~/components/MarxHeadSmall.vue'

export default {
  components: {
      MarxHeadSmall
  }
}

</script>