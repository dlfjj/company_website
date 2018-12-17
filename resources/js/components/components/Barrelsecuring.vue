<template>
    <div class="mt-6 pt-4" style="padding-bottom: 50px">

        <a href="#/Product"><b-button class="btn-white shadow-none border border-dark" style="margin-left: 1.7%"><i class="far fa-arrow-alt-circle-left fa-2x"></i></b-button></a>

        <div class="container dark-grey-text mt-5">

            <!--Grid row-->
            <div class="row wow fadeIn" style="visibility: visible; animation-name: fadeIn;">

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <div class="image-container border border-light shadow rounded" style="margin-bottom: 5%">

                        <div v-if="counter == 1 || counter == 0">
                            <img src="./images/barrelcover1.jpg"   class="img-fluid p-5 m-5" alt="Containerlashing image">
                        </div>
                        <div v-else-if="counter == 2">
                            <img src="./images/barrelcover2sm.jpg" class="img-fluid p-5 m-5" alt="Containerlashing image">
                        </div>
                        <div v-else-if="counter == 3">
                            <img src="./images/barrelcover3sm.jpg" class="img-fluid p-5 m-5" alt="Containerlashing image">
                        </div>
                        <div v-else-if="counter == 4">
                            <img src="./images/drumbracket01.jpg" class="img-fluid p-5 " alt="Containerlashing image">
                        </div>
                        <div v-else-if="counter == 5">
                            <img src="./images/bracketsgrp217x214.jpg" class="img-fluid p-5 m-5" alt="Containerlashing image">
                        </div>

                    </div>

                    <b-button-group size="lg">
                        <b-button class="btn-white" v-on:click="counter = 1"><img  src="./images/barrelcover1.jpg"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 2"><img src="./images/barrelcover2sm.jpg" class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 3"><img src="./images/barrelcover3sm.jpg" class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 4"><img src="./images/drumbracket01.jpg" class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 5"><img src="./images/bracketsgrp217x214.jpg" class="button-image"></b-button>
                    </b-button-group>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <!--Content-->
                    <div class="p-4">
                        <p class="lead">
                            <span class="mr-1">
                                <h2>Barrel Securing System</h2>
                            </span>
                        </p>

                        <p class="lead font-weight-bold" >Description</p>

                        <p>
                            The Secure Single and Double Barrel Pallet System is a specialized pallet carrier designed to more effectively transport one barrel or two barrels for double the power.
                        </p>


                    </div>
                    <!--Content-->

                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <hr class="between-sections" style="margin:20px">


            <h4><strong>Product Categories</strong></h4>

            <b-card no-body class="container1 shadow-none border-dark">
                <b-tabs pills card vertical >
                    <b-tab title="Barrel Cover" active>
                        <div class="row">
                            <div class="col-sm-2">
                                <img class="block" alt="" src="./images/barrelcover3sm.jpg" style="height: 112.346px;">
                            </div>
                            <div class="col row p-5">
                                <h4>
                                    Barrel Cover
                                </h4>
                                <p>
                                    These special developed Barrel Covers are the solution for all companies spending additional cost and valuable time on protection of barrels on pallets or trucks before transportation.
                                    We have designed the barrel covers to substitutes expensive wooden crates and wooden plates. Protecting and securing with stretch film or shrink foil hood is not necessary anymore.
                                </p>
                                <ul class="col--lg">
                                    <li>FH 1 for 1 barrel one way wire buckle</li>
                                    <li>FH 2 for 2 barrel one way wire buckle</li>
                                    <li>FH 3 for 3 barrel one way wire buckle</li>
                                    <li>FH 4 for 4 barrel one way wire buckle</li>
                                </ul>
                                <ul class="col-xl-5 ml-5">
                                    <li>FH 1R for 1 barrel re-usable ratchet</li>
                                    <li>FH 2R for 2 barrel re-usable ratchet</li>
                                    <li>FH 3R for 3 barrel re-usable ratchet</li>
                                    <li>FH 4R for 4 barrel re-usable ratchet</li>
                                </ul>
                            </div>
                        </div>
                        <a href="http://shop.oemserv.com/category/44/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none mb-4">Products Detail</button></a>

                    </b-tab>
                    <b-tab title="Drum Brackets">
                        <div class="row">
                            <div class="col-sm-2">
                                <img class="block" alt="" src="./images/bracketsgrp217x214.jpg" style="height: 130.346px;">
                            </div>

                            <div class="col p-5">
                                <h4>
                                    Drum Brackets
                                </h4>
                                <p>
                                    Suitable drum brackets to keep the strapping belts in place and avoid sideways slipping.
                                    Our strapping belts and lashes are suitable for all proposed drum brackets.
                                    To secure barrels on pallets, we highly recommend our drum brackets.
                                </p>
                                <ul>
                                    <li>FS 50PK 65x55x38x28mm <mark class="red">Red</mark></li>
                                    <li>FS 50PR 65x55x30x30mm <mark class="yellow">Yellow</mark></li>
                                    <li>FS 50PK 65x55x38x28mm <mark class="black"><span class="text-white-50">Black</span></mark></li>
                                    <li>FS 50PK 65x55x38x28mm <mark class="black"><span class="text-white-50">Black</span><</mark></li>
                                </ul>
                                <a href="http://shop.oemserv.com/category/81/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>

                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>




            <h4 style="margin-top:70px"><strong>Product Detail</strong></h4>

            <b-container class="border border-dark rounded container2 shadow-none" style="line-height: 200%">
                <b-row class="text">
                    <b-col>
                        <h5 class="pb-2"><i class="fas fa-check mr-2"></i>Advantages</h5>
                        <h6><strong>Barrel Cover</strong></h6>
                        <ul>
                            <li>The alternative to complex timber constructions</li>
                            <li>Ready-made belt system = time/cost reduction</li>
                            <li>The fast and inexpensive solution for barrel securing on pallets</li>
                            <li>Reusable system. No waste of material</li>
                            <li>Available with ratchet tension system</li>
                        </ul>
                        <h6><strong>Drum Brackets</strong></h6>
                        <ul>
                            <li>Quick and easy to handle</li>
                            <li>Re-tensionable system</li>
                            <li>Weatherproof (UV radiation)</li>
                            <li>Permanently resilient</li>
                            <li>Available in different sizes</li>
                        </ul>
                        <!--<a href="http://shop.oemserv.com/category/39/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>-->
                    </b-col>
                </b-row>
            </b-container>

        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Barrelseuring",
        data (){
            return {

                counter: 0
            }
        },
        metaInfo: {
            title: 'Barrel Securing System',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'Prevent Barrel Movement'}
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
    li{
        margin: 0.5rem 0;
    }
</style>