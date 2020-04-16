<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>TODH!</h1>

    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      {{ page.node.Name}}
      {{ page.node.ImgUrl}}
      <img v-bind:src="'https://unsplash.com/photos/' + page.node.ImgUrl" /> 
      {{ page.node.Id}}
    </div>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
  
</template>
<page-query>
  query {
    allGoogleSheet {
      edges {
        node {
          Id
          Name
          ImgUrl
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
