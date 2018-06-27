<template>
  <main class="main-pattern" style="">
    <div id="home">
      <div class="slider">
        <ul class="slides">
          <li>
            <img src="./../assets/img/bible1.jpg"> <!-- random image -->
            <div class="caption center-align semi-transparent" style="padding:5px 30px; border-radius:20px">
              <h3>St. George Orthodox Church</h3>
              <h5 class="light grey-text text-lighten-3">Dwarka</h5>
            </div>
          </li>
          <li>
            <img src="./../assets/img/bible2.jpg"> <!-- random image -->
            <div class="caption right-align semi-transparent" style="padding:5px 30px; border-radius:20px">
              <h3 class="grey-text text-lighten-4">"He who seeks shall find"</h3>
              <h5 class="light grey-text text-lighten-4">John 15:2</h5>
            </div>
          </li>
          <li>
            <img src="./../assets/img/cross.jpg"> <!-- random image -->
            <div class="caption center-align semi-transparent" style="padding:5px 30px; border-radius:20px">
              <h3>He died for us.</h3>
              <h5 class="light grey-text text-lighten-3">What are we doing for him?</h5>
            </div>
          </li>
        </ul>
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
  //M.AutoInit();
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
      indicators: true,
      height: 600,
      });
    console.log(instances);
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
  },
  updated: initMaterialCSS,
  components:{}
}
</script>

<style scoped>
.semi-transparent{
  background-color: rgba(0, 0, 0, 0.459)
}
</style>

