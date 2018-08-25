<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Nav-bar:
        <router-link to="/">Home</router-link> |
        <router-link to="/hi">Hi</router-link> |
        <router-link to="/params/111/ephraimIsVueMaster">VueMaster</router-link> |
        <router-link :to="{name:'hi1',params:{username:'ephraimguo',id:8989}}">Hi/Subhi1</router-link> |
        <router-link :to="{name:'hi2',params:{foo1:'foo1', foo2:1111}}">Hi/Subhi2</router-link> |
        <router-link to="/goHome">Go Home</router-link>
        <router-link to="/goParams/999/I will get this done">Go Params</router-link>
        <router-link to="/hi1">HiPageSubHi1</router-link>
        <router-link to="/roar">Roar</router-link>
    </p>
    <transition name="fade" mode="out-in" >
        <router-view/>
        <router-view class="comp" name="left"/>
        <router-view class="comp" name="right"/>
    </transition>
    



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
.comp{
  float: left;
  width: 50%;
  height: 300px;
  background-color: #ccc;
  box-sizing: border-box;
  border: 2px solid #aaa;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
