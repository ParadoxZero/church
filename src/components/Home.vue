<template>
  <main class="main-pattern" style="">
    <div id="home">
      <div class="parallax-container" style="height: 80vh;z-index:10">
        <div class="parallax">
          <img class="" src="./../assets/img/420014.jpg">
        </div>
      </div>
      <div class="">
        <div class="container" id="about-div">
          <h3>{{title}}</h3>
          <blockquote v-if="blockquote">
              {{blockquote}}
          </blockquote>
          <span v-html="body"></span>
          <h4>{{title}}</h4>
          <blockquote v-if="blockquote">
              {{blockquote}}
          </blockquote>
          <span v-html="body"></span>
        </div>
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

