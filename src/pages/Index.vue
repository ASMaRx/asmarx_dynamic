<template>
  <Layout>

    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <MarxHead />
    <h1>A S M a R x</h1>
    
    <p>
    A podcast of calming (almost ASMR) readings and discussions of various marxist, critical theory, and general philosophy texts.
    </p>

    <!-- https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app -->
    <div class="txt">
        <div v-for="ep in $page.eps.episodes"><{{ep.node.date}}> <g-link :to="episodeLink(ep.node.id)">{{ep.node.title}}</g-link><br></div>
    </div>

    <br><br><br><br>

    <div class="kofi"><a href="https://ko-fi.com/asmarx">buy me a "coffee" 🍺</a></div>

  </Layout>
</template>


<page-query>
query {
	 eps: allEpisode(sort: [{ by: "id" } ]) {
    episodes: edges {
      node {
        id,
        title,
        date
      }
    }
  }
}
</page-query>


<script>



import MarxHead from '~/components/MarxHead.vue'

export default {
  components: {
      MarxHead
  },
  metaInfo: {
    title: ''
  },
  data() {
    return {}
  },
  methods: {
    episodeLink : function (no) {
      return "episode/" + no
    }
  }
}
</script>

<style scoped>

.kofi {
  text-align: center;
  font-size: 0.6em;
}


</style>


<style>


.home-links a {
  margin-right: 1rem;
}
</style>
