<template>
    <div id="app">
        <header>
            <app-header></app-header>
        </header>
        <main>
            <transition name="fade" mode="out-in" duration="300">
                <router-view></router-view>
            </transition>
        </main>
        <bottom></bottom>
    </div>
</template>

<script>
    import bottom from './components/Footer.vue';
    import top from './components/Header.vue';

    export default {
        components: {
            bottom,
            appHeader: top,
        }
    }
</script>

<style scoped>

    #app {
        overflow-x: hidden;
    }
    .flyout {
        display:flex;
        flex-direction: column;
        min-height:100vh;
        justify-content: space-between;
    }
</style>