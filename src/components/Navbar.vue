<template>
  <header>
    <div id="navbar">
      <div class="navbar-fixed" style="" >
          <nav class="main-pattern z-depth-0" style="">
              <div class="nav-wrapper">
                  <router-link to="/" class="brand-logo hide-on-med-and-down" style=""><div class="logo-img z-depth-3 main-pattern" ><img src="@/assets/img/logo.png" class="logo" style="width:10vw; height: auto;"></div></router-link>
                  <router-link to="/" class="brand-logo center hide-on-med-and-down"><div class="color-dark">St. George Orthodox Church</div></router-link>
                  <ul class="right hide-on-med-and-down">
                          <li><a class="color-dark hoverable waves-effect" href="#">News Letter</a></li>
                          <li><a class="color-dark hoverable waves-effect" href="#">Souviner</a></li>
                          <li><a class="color-dark hoverable waves-effect" href="#">Contact Us</a></li>
                          <li><a class="color-dark hoverable waves-effect" href="#" id="about">About</a></li>
                  </ul>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-large-only waves-effect"><i class="material-icons color-dark">menu</i></a>
                  <a href="#!" class="brand-logo center hide-on-large-only" style="margin:0; padding:0;"><h5 class="color-dark" style="margin:0; padding:0">St. George Orthodox Church</h5></a>
              </div>
            <div class="menu-container hide-on-med-and-down" style="top:25vh">
              <router-link to="/vicars" class="hoverable btn main-pattern color-dark menu-button waves-effect">Vicar</router-link>
              <router-link to="/management" class="hoverable btn main-pattern color-dark menu-button waves-effect">Management</router-link>
              <router-link to="/organisations" class="hoverable btn main-pattern color-dark menu-button waves-effect">Organisations</router-link>
            </div>
          </nav>
      </div>
      <ul class="sidenav main-pattern" id="mobile-demo">
          <li><div class="user-view">
              <a href="#user"><img class="" style="width: 50%" src="./../assets/img/logo-small.png"></a>
              <a href="#name"><span class="color-dark name" style="font-weight: bold; font-size: 1.4em">St. George Orthodox Church</span></a>
              <a href="#email"><span class="color-dark email">Dwarka</span></a>
          </div></li>
          <li><div class="divider"></div></li>
          <li><a href="#">News Letter</a></li>
          <li><a href="#">Souviner</a></li>
          <li><div class="divider"></div></li>
          <li><a href="">Vicars</a></li>
          <li><a href="">Management</a></li>
          <li><a href="">Organisations</a></li>
          <li><div class="divider"></div></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
function initMaterialCSS() {
  M.AutoInit();
}
function initialize() {
  initMaterialCSS();
  $("#about").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#about-div").offset().top
      },
      500
    );
  });
}

export default {
  name: "Navbar",
  mounted: function() {
    initialize();
  }
};
</script>

<style scoped>
nav {
  z-index: 100;
}
.brand-logo {
  font-family: "Passion One", cursive;
  font-size: 3em;
}
.logo {
  height: 20vh;
}

.mobile-logo {
  position: relative;
  height: 90%;
}
.logo-img {
  vertical-align: middle;
  padding: 4vh 1vw 0vw 1vw;
  margin-left: 1vw;
  margin-right: 0;
  border-bottom-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
}

.logo-img-right {
  vertical-align: middle;
  padding: 4vh 1vw 0vw 1vw;
  margin-right: 1vw;
  border-bottom-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
}
.logo-img-bottom {
  vertical-align: middle;
  padding: 4vh 1vw 0vw 1vw;
  margin-right: 1vw;
  border-bottom-right-radius: 5vh;
  border-bottom-left-radius: 5vh;
  bottom: 0;
}
.menu-container {
  position: absolute;
  right: 0;
  z-index: 100;
}
.menu-button {
  position: relative;
  display: block;
  margin: 10px 0;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  width: 12vw;
}

.menu-button-mobile {
  position: relative;
  display: block;
  margin: 10px 0;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  width: 10vh;
}
</style>
