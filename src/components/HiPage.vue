<template>
    <div class="hi-page-container">
        <hr>
        <p>{{msg}}</p>
        <hr>
        <router-view></router-view>
        <p>{{ $route.name }}</p>
    </div>
</template>

<script>
export default { 
    name: 'hi',
    data () {
        return {
            msg: 'Hi this is Ephraim Hi Main Page'
        }
    }
}   
</script>

<style scoped>
    .hi-page-container{
        min-height: 300px;
        border: 1px solid red;
        border-radius: 5px;
    }
</style>
