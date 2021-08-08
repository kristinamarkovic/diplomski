<template>
    <div id="app">
        <AppLayout>
            <router-view></router-view>
        </AppLayout>
    </div>
</template>
<script>
    import AppLayout from '@/js/layouts/AppLayout'
    export default {
        name: 'App',
        components: { AppLayout }
    }
</script>
<style lang="scss">
@import "@/sass/app.scss"
</style>
