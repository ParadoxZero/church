<template>
  <div class="white">
      <div class="container">
        <h1 class="zero" style="padding:20px">Vicars</h1>
      <ul class="collapsible main-pattern">
        <li class="active">
          <div class="collapsible-header"><i class="material-icons">info</i>Present</div>
          <div class="collapsible-body">
            <div class="row valign-wrapper">
              <div class="col s4">
                <img src="./../assets/profile/profile1.jpeg" alt="" class="responsive-img" style=""> <!-- notice the "circle" class -->
              </div>
              <div class="col s8">
                <h3>Fr. Jackson R. Daniel</h3>
                <strong class="black-text">
                  From 2016 to Present
                </strong>
                <p>
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">info</i>From 2012 to 2016</div>
          <div class="collapsible-body">
            <div class="row valign-wrapper">
              <div class="col s4">
                <img src="./../assets/profile/profile1.jpeg" alt="" class="responsive-img" style=""> <!-- notice the "circle" class -->
              </div>
              <div class="col s8">
                <h3>Fr. Jackson R. Daniel</h3>
                <span class="black-text">
                  From 2016 to Present
                </span>
                <p>
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">info</i>From 2008 to 2012</div>
          <div class="collapsible-body">
            <div class="row valign-wrapper">
              <div class="col s4">
                <img src="./../assets/profile/profile1.jpeg" alt="" class="responsive-img" style=""> <!-- notice the "circle" class -->
              </div>
              <div class="col s8">
                <h3>Fr. Jackson R. Daniel</h3>
                <span class="black-text">
                  From 2016 to Present
                </span>
                <p>
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                  Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah Lorel lipsum Blah Blah
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
function init(){
  var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
}
export default {
  name: "Vicars",
  mounted: init
}
</script>

<style scoped>

</style>
