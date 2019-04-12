<template>

    <article class="blog-post-wrapper" data-wow-delay="0.3s" style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
        <header class="author-info">
            <div class="blog-post-title"><a>{{ title }}</a></div>
            <div class="tag-posted-in">
                <ul class="list-unstyled" id="items" style="padding:0; margin-bottom: 1rem;">
                    <!--<li><i class="fa fa fa-calendar"></i> <a href="#">Jully 17, 2020</a></li>-->
                    <li><i class="fa fa fa-calendar"></i> <a href="#">{{ publish_date }}</a></li>
                    <li><i class="fa fa-user"></i><a>Jacky</a></li>
                    <li><i class="fa fa-pencil"></i><a>Business</a></li>
                    <li><i class="fa fa-eye"></i><a>{{ views }} views</a></li>
                </ul>
            </div>
        </header>
        <section class="featured-wrapper">
            <a>
                <!--<img src="./images/blog_images1.jpg" class="w-100">-->
                <img :src="imageUrl" class="w-100">
            </a>
        </section>


        <section class="blog-post-content">
            <div class="blog-post">
                <p>{{ main_context }}</p>
                <!--<div>-->
                <!--<b-embed-->
                <!--type="iframe"-->
                <!--aspect="16by9"-->
                <!--src="https://sportzonline.to/channels/hd/hd1.php"-->
                <!--allowfullscreen-->
                <!--&gt;</b-embed>-->
                <!--</div>-->
            </div>
        </section>
        <!--<div class="blog-post-footer clearfix">-->
        <!--<a-->
        <!--href="#"-->
        <!--@mouseover="btn='outline-primary'"-->
        <!--@mouseleave="btn='primary'"-->
        <!--:class='"pull-left btn-xs btn btn-"+btn'>-->
        <!--Read More &rarr;-->
        <!--</a>-->
        <!--</div>-->
    </article>

</template>

<script>
    export default {
        name: "Blog",
        props:['title','main_context','publish_date','imgName','views'],
        data() {
            return{
                active: false,
                btn: 'primary',
                paragraph: 'A desire to help our clients in cargo safety.'
            }
        },
        computed:{
            imageUrl: function () {
                return require('./images/'+ this.imgName + '.jpg');
            }
        },
        methods: {
            mouseOver: function(){
                this.active = !this.active;
            }
        }
    }
</script>

<style scoped>
    .blog-post-wrapper {
        margin-bottom: 50px;
    }

    .blog-post-title {
        font-size: 26px;
        font-weight: 600;
        line-height: 26px;
        text-transform: capitalize;
        margin-bottom: 20px;
    }
    .blog-post-title a{
        color: #d10c0d;
    }
    .tag-posted-in li a {
        color: #8F8F8F;
    }
    .tag-posted-in li i.fa {
        color: #8F8F8F;
        padding-right: 3px;
    }
    ul#items > li {

        padding-right: 6px;
        font-size: small;
        display: inline-block;
        /* You can also add some margins here to make it look prettier */
        zoom:1;
        *display:inline;
        /* this fix is needed for IE7- */}

    .blog-post blockquote {
        margin: 40px 0;
    }
    .blog-post h3 {
        margin-top: 30px;
    }
    .blog-post > p {
        padding-top: 20px;
        line-height: 29px;
    }

    .blog-post ul li {
        font-size: 15px;
        padding: 6px 0;
        font-weight: 600;
    }
    .blog-post ol li {
        font-size: 15px;
        padding: 6px 0;
        font-weight: 600;
    }



    .blog-post-footer {
        margin-bottom: 10px;
        /*background-color: #fff;*/
    }

    article{
        padding-bottom: 30px;
        border-bottom: 1px solid #eee;
    }
</style>