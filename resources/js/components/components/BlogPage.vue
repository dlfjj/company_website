<template>
    <div style="margin: 40px; padding-bottom: 50px">
        <div class="title-box text-center">
            <h2>Blog</h2>
            <p>{{ paragraph }}</p>
        </div>
        <hr style="margin:30px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Blog :title='Blog1.title' :publish_date="Blog1.publish_date" :main_context="Blog1.context" :imgName="Blog1.imageName" :views="Blog1.views"></Blog>
                    <Blog :title='Blog2.title' :publish_date="Blog2.publish_date" :main_context="Blog2.context" :imgName="Blog2.imageName" :views="Blog2.views"></Blog>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Blog from './Blog'
    export default {
        name: "BlogPage",
        metaInfo: {
            title: 'Blog',
            titleTemplate: '%s | American Dunnage Inc',
            meta: [
                {name: 'description', content: 'Company Blog | American Dunnage Home'}
            ]
        },
        data() {
            return{
                paragraph: 'A desire to help our clients in cargo safety.',
                Blog1:{
                    title: 'American Dunnage Inc is officially open',
                    context: 'The factory is in the final stage of setup. The Machine are ready for production.',
                    publish_date: 'October 13, 2018',
                    imageName: 'blog_images1',
                    views: '66'
                },
                Blog2:{
                    title: 'What is Dunnage Airbag?',
                    context: 'The purpose of a dunnage air bag is to secure the cargo and create a build head during transit.',
                    publish_date: 'March 13, 2019',
                    imageName: 'banner1',
                    views: '24'
                },
            }
        },
        components:{
            Blog
        },

        methods: {
        }
    }
</script>

<style scoped>

</style>