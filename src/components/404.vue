<template>
  <div>
    <div class="row valign-wrapper not_found_bg">
      <div class="col s12 semi-transparent white-text">
        <h4>Error 404: Does not Exist</h4>
        <p>The page you were looking for does not exist.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
.row{
  height: 80vh;
  padding: 0;
  margin: 0;
}
.col{
  text-align: center;
  display: inline;
}
.not_found_bg{
  background-image: url("./../assets/img/lost.jpg");
  background-size: cover;
}
.not_found_img{
  position: static;
  height: 40vh;
}

.semi-transparent{
  background-color: rgba(0, 0, 0, 0.459)
}
</style>

