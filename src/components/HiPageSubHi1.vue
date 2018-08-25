<template>
    <div>
        <p>{{msg}} -- {{ $route.params.username }} -- {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    name: "hi1",
    data () {
        return {
            msg: 'Hi, this is Epharim H1'
        }
    }
}
</script>

<style scoped>

</style>
