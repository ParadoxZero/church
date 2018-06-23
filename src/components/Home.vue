<template>
<main class="">
  <div id="home">
      <div class="parallax-container" style="height: 60vh;">
          <div class="parallax">
              <img class="" src="./../assets/img/420014.jpg">
              <h5>What up</h5>
          </div>
      </div>
      <div class="container" id="about-div">
          <h2>{{title}}</h2>
          <blockquote>
              {{blockquote}}
          </blockquote>
          <span v-html="body"></span>
      </div>
  </div>
</main>
</template>

<script>
import data from '@/../data.json'

var about = data.about;
function initMaterialCSS() {
  M.AutoInit();
}
export default {
  name: "Home",
  data: function() {
    return {
      title: about.title,
      blockquote: about.blockquote,
      body: about.body
    }
  },
  mounted: function() {
    initMaterialCSS();
  }
}
</script>

<style scoped>

</style>

