<template>
  <header>
    <div id="navbar">
      <div class="valign-wrapper" style="" >
          <nav class="main-pattern z-depth-0" style="">
              <div class="nav-wrapper">
                  <a href="#!" class="brand-logo hide-on-med-and-down" style="position: fixed"><div class="logo-img z-depth-3 main-pattern" ><img src="@/assets/img/logo.png" class="logo" style="width:10vw; height: auto;"></div></a>
                  <a href="#!" class="brand-logo center hide-on-med-and-down"><div class="color-dark">St. George Orthodox Church</div></a>
                  <ul class="right hide-on-med-and-down">
                          <li><a class="color-dark hoverable waves-effect" href="#">News Letter</a></li>
                          <li><a class="color-dark hoverable waves-effect" href="#">Souviner</a></li>
                          <li><a class="color-dark hoverable waves-effect" href="#">Contact Us</a></li>
                          <li><a class="color-dark hoverable waves-effect" href="#" id="about">About</a></li>
                  </ul>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-large-only waves-effect"><i class="material-icons color-dark">menu</i></a>
                  <a href="#!" class="brand-logo center hide-on-large-only" style="width:45%"><h6 class="color-dark">St. George Orthodox Church</h6></a>
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
    <div class="menu-container hide-on-med-and-down" style="top:25%">
      <a class="hoverable btn main-pattern color-dark menu-button waves-effect">Vicar</a>
      <a class="hoverable btn main-pattern color-dark menu-button waves-effect">Management</a>
      <a class="hoverable btn main-pattern color-dark menu-button waves-effect">Organisations</a>
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
.brand-logo {
  font-family: "Passion One", cursive;
  font-size: 3em;
}
.logo {
  height: 20vh;
}

.color-dark {
  color: black;
}
.color-dark-accent {
  color: #555;
}

.transparentBG {
  background-color: rgba(0, 0, 0, 0.349);
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

.patternBG {
  background-image: url("./../assets/img/spring.png");
}

.main-pattern {
  background-image: url("./../assets/img/straws.png");
}
.menu-container {
  position: absolute;
  right: 0;
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
