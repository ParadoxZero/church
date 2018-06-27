<template>
  <ul class="collection with-header curved-border" style="max-height:35vh; width:200px">
    <li class="collection-header"><h6>Notifications</h6></li>
    <li class="collection-item"><a href="#">Notification 1 is a very long notification for the sake of testing</a></li>
    <li class="collection-item"><a href="#">Notification 1</a></li>
    <li class="collection-item"><a href="#">Notification 1</a></li>
    <li class="collection-item"><a href="#">Notification 1</a></li>
    <li class="collection-item"><a href="#">Notification 1 is a very long notification for the sake of testing</a></li>
    <li class="collection-item"><a href="#">Notification 1 is a very long notification for the sake of testing</a></li>
    <li class="collection-item"><a href="#">Notification 1 is a very long notification for the sake of testing</a></li>
  </ul>
</template>

<script>
function init(){
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
  console.log("init");
}
export default {
  name: "Notice",
  mounted: init
}
</script>

<style>
.collection{
  border-radius: 15px;
  overflow: scroll;
}

.collection-item{
  margin:5px;
}

.semi-transparent{
  background-color: rgba(255, 255, 255, 0.438)
}

.curved-border{
  border-radius: 15px;
}
</style>


