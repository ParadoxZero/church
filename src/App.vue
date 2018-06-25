<template>
  <div id="app" class="main-pattern">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  created: function () {
  }
}
</script>

<style>
.patternBG {
  background-image: url("@/../assets/img/spring.png");
}

.main-pattern {
  background-image: url("@/../assets/img/straws.png");
}
</style>
