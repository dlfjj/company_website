<template>
    <div style="margin: 60px; padding-bottom: 50px">
        <h2 class="page-title">Major Events</h2>
        <div class="pt-4 container-fluid">
            <h3 class="lead">14-17 October 2018</h3>
            <p>{{ eventMessage }}</p>
            <a href="https://www.packexpointernational.com/" target="_blank" title="Chicago Pack Expo">
                <img src="./images/pack_expo_banner.png" class="img-thumbnail w-75">
            </a>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Events",
        metaInfo: {
            title: 'Event',
            titleTemplate: '%s | American Dunnage Inc',
            meta: [
                {name: 'description', content: 'Meet Us in Person'}
            ]
        },
        data(){
            return{
                eventMessage: 'Come and meet us in Chicago at our partner company\'s booth Redback Industries , Hall-E booth # 8961'
            }
        }
    }
</script>

<style scoped>
    h3{
        font-weight: 400;
    }

</style>