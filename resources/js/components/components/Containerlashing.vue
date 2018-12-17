<template>
    <main class="mt-6 pt-4" style="padding-bottom: 50px">

        <a href="#/Product"><b-button class="btn-white shadow-none border border-dark" style="margin-left: 1.7%"><i class="far fa-arrow-alt-circle-left fa-2x"></i></b-button></a>

        <div class="container dark-grey-text mt-5">

            <!--Grid row-->
            <div class="row wow fadeIn" style="visibility: visible; animation-name: fadeIn;">

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <div class="image-container border border-light shadow rounded" style="margin-bottom: 5%">

                        <div v-if="counter == 1 || counter == 0">
                            <img src="./images/cl1.png"   class="img-fluid lashing_image1" alt="Containerlashing image">
                        </div>
                        <div v-else-if="counter == 2">
                            <img src="./images/contlashingimage.jpg" class="img-fluid lashing_image2" alt="Containerlashing image">
                        </div>
                        <div v-else-if="counter == 3">
                            <iframe width="100%" height="350" class="embed-responsive-item" src="https://www.youtube.com/embed/7fJBspFuvLA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="containerlashing video"></iframe>
                        </div>

                    </div>

                    <b-button-group size="lg">
                        <b-button class="btn-white" v-on:click="counter = 1"><img src="./images/cl1.png"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 2"><img :src="containerlashing2"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 3"><i class="far fa-play-circle fa-2x"></i></b-button>
                    </b-button-group>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <!--Content-->
                    <div class="p-4">

                        <div class="mb-3">
                            <!--<a>-->
                                <!--<span class="badge blue mr-1"></span>-->
                            <!--</a>-->
                            <a>
                                <span class="badge red mr-1">Popular</span>
                            </a>
                        </div>

                        <p class="lead">
                            <span class="mr-1">
                                <h2>Container lashing systems</h2>
                            </span>
                        </p>

                        <p class="lead font-weight-bold" >Description</p>

                        <p> Container lashing has never been easier than with our container lashing ready-made belt system.
                            It provides very fast and effective load securing inside a container.
                            The cargo is protected against damage during transport, and when opening the container doors.
                            There is no risk or danger of injury for the receiver when unloading the container.
                        </p>
                    </div>
                    <!--Content-->

                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <hr class="between-sections" style="margin:20px">

            <h4 style="margin-top:70px"><strong>Product Detail</strong></h4>

            <b-container class="border border-dark rounded container2 shadow-none" style="line-height: 200%">
                <b-row class="text">
                    <b-col>
                        <h5><i class="fas fa-check" style="margin-right: 1%"></i>Advantages</h5>
                        <ul>
                            <li>The alternative to complex timber constructions</li>
                            <li>Ready-made belt system</li>
                            <li>The fast and inexpensive solution for good cargo securing inside a container</li>
                            <li>Easy to hook the four vertical straps into the existing container attachment points ( eyes )</li>
                            <li>Belt width available as 32mm and 50mm</li>
                            <li>Horizontal belts are movable or at fixed position</li>
                            <li>Available for standard and HQ container</li>
                            <li>Container lashing with 2, 3 or 4 horizontal belts</li>
                            <li>Closure with buckles or fixed ratchets</li>
                        </ul>
                        <a href="http://shop.oemserv.com/category/39/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>
                    </b-col>
                </b-row>
            </b-container>

        </div>
    </main>
</template>

<script>
    export default {
        name: "Containerlashing",
        data(){
            return{
                counter: 0,
                containerlashing1: "/static/img/cointainerlashing1.a10bff2.png",
                containerlashing2: "/static/img/contlashingimage.7930e88.jpg",
            }
        },
        metaInfo: {
            title: 'Container Lashing',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'Hold your cargo tight'}
            ]
        }
    }
</script>

<style scoped>
    .container2{
        padding: 20px 20px;
    }
    .text{
        padding: 30px;
    }
    h5{
        font-weight: bolder;
    }
    .bag-size{
        font-size:13px;
        font-weight: bold;
    }
    .button-image{
        width: 60px;
    }
    .infater-image{

        width: 120%;
    }
    .image-container{

        padding: 10px;
    }
    .lashing_image1{
        padding:10%;
    }
    .lashing_image2{
        /*padding:1%;*/
        margin-top:19.5%;
        margin-bottom:19.5%;
    }
</style>