<template>
  <div class="uk-position-relative church-bg" style="height:100vh">
    <div class="uk-position-top-right">
      <vk-navbar transparent>
        <vk-navbar-nav>
          <vk-navbar-nav-item title="Active" active></vk-navbar-nav-item>
          <vk-navbar-nav-item title="Item"></vk-navbar-nav-item>
          <vk-navbar-nav-dropdown title="Parent">
            <vk-navbar-nav-dropdown-nav>
              <vk-nav-item title="Active" active></vk-nav-item>
              <vk-nav-item title="Item"></vk-nav-item>
              <vk-nav-item-header title="Header"></vk-nav-item-header>
              <vk-nav-item title="Item"></vk-nav-item>
              <vk-nav-item title="Item"></vk-nav-item>
              <vk-nav-item-divider></vk-nav-item-divider>
              <vk-nav-item title="Item"></vk-nav-item>
            </vk-navbar-nav-dropdown-nav>
          </vk-navbar-nav-dropdown>
        </vk-navbar-nav>
      </vk-navbar>
    </div>
    <h1 class="zero-margin zero-padding" style="color:#fff">St. George Orthodox Church</h1>
    <h3>Dwarka</h3>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
header {
  position: absolute;
  top:0;
}
.church-bg {
  background-image: url("./../assets/img/420014.jpg");
  height:100%;
  background-position: center;
  background-size: cover;
}
</style>
