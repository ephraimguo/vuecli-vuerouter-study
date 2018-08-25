<template>
    <div>
        <p>{{msg}} -- {{$route.params.foo1}} -- {{$route.params.foo2}}</p>
    </div>
</template>

<script>
export default {
    name: "hi1",
    data () {
        return {
            msg: 'Hi, this is Epharim H2'
        }
    }
}
</script>

<style>

</style>
