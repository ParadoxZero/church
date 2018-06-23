<template>
  <div id="app" class="main-pattern">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created: function () {
  }
}
</script>

<style>
</style>
