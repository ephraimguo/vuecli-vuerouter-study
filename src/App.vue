<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Nav-bar:
        <router-link to="/">Home</router-link> |
        <router-link to="/hi">Hi</router-link> |
        <router-link :to="{name:'hi1',params:{username:'ephraimguo',id:8989}}">Hi/Subhi1</router-link> |
        <router-link :to="{name:'hi2'}">Hi/Subhi2</router-link>
    </p>
    <router-view/>

    <p> {{ $route.name }}</p>
    <!-- <router-view name="left"/>
    <router-view name="right"/> -->


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
