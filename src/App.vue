<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
              this.$router.replace('/login')
          }
}
</script>

<style>
#app {
    background: #18c8f6;
    height: 100%;
    background:url("./assets/img/login-background.jpg") no-repeat center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: rgba(255,255,255,.95);
    padding:1px;
}
</style>
