<template>
    <main class="mt-6 pt-4" style="padding-bottom: 50px">

        <a href="#/Product"><b-button class="btn-white shadow-none border border-dark" style="margin-left: 1.7%"><i class="far fa-arrow-alt-circle-left fa-2x"></i></b-button></a>

        <div class="container dark-grey-text mt-5">

            <!--Grid row-->
            <div class="row wow fadeIn" style="visibility: visible; animation-name: fadeIn;">

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <div class="image-container border border-light rounded shadow" style="margin-bottom: 5%">

                        <div v-if="counter == 1 || counter == 0">

                            <img src="./images/drystrip_b.png" class="img-fluid paperbag-image" alt="kraft paper Airbag">

                        </div>

                        <div v-else-if="counter == 2">
                            <iframe width="100%" height="400" class="embed-responsive-item" src="https://www.youtube.com/embed/Nu9m0FqmSsE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <!--<b-embed type="iframe"-->
                                     <!--aspect="16by9"-->
                                     <!--src="https://www.youtube.com/embed/Nu9m0FqmSsE"-->
                                     <!--allowfullscreen-->
                            <!--&gt;</b-embed>-->
                        </div>

                    </div>

                    <b-button-group size="lg">
                        <b-button class="btn-white" v-on:click="counter = 1"><img src="./images/drystrip_b.png"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 2"><i class="fas fa-play-circle fa-2x"></i></b-button>
                    </b-button-group>

                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <!--Content-->
                    <div class="p-4">

                        <div class="mb-3">
                            <!--<a>-->
                                <!--<span class="badge blue mr-1">Accessory</span>-->
                            <!--</a>-->
                            <!--<a>-->
                                <!--<span class="badge red mr-1">Required</span>-->
                            <!--</a>-->
                        </div>

                        <p class="lead">
                            <span class="mr-1">
                                <h2>Container Desiccants</h2>
                            </span>
                        </p>

                        <p class="lead font-weight-bold" >Description</p>

                        <p>
                            Prevents condensation damage in long distance railroad or oversea cargo shipments. It absorbs water, and is most commonly used to remove humidity that would normally degrade or even destroy products sensitive to moisture.
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
                    <b-tab title="DRY-STRIP 2000" active>
                        <div class="row">
                            <div class="col-sm-3">
                                <img class="img-responsive" alt="drystrip" src="./images/drystrip_black.png" height="250">
                            </div>
                            <div class="col-sm-1">
                                <img class="img-responsive" alt="absorb water" src="./images/absorb70.jpg" style="height: 50px;">
                                <img class="img-responsive" alt="absorb water" src="./images/adsorb14.jpg" style="height: 50px;">
                                <img class="img-responsive" alt="absorb water" src="./images/absorb10_20.jpg" style="height: 50px;">
                            </div>
                            <div class="col">
                                <h4>DRY-STRIP  2000
                                    Clay based container desiccant</h4>
                                <p><strong>2kg  ( 5x400gr ) formulated container desiccant of clay + calcium chloride </strong></p>
                                <ul>
                                    <li>Non-woven bag with 80-90% clay; 20-10% CaCl2 and a strong plastic hook to hang the Strip into the container eyes.</li>
                                    <li>The outer PE tube has big holes around to let the moisture in and a water tight reservoir to prevent dripping.</li>
                                    <li>The moisture adsorption capacity : >=70% at 30 °C and 90%RH</li>
                                </ul>
                                <a href="http://shop.oemserv.com/view/12730/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>

                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="DRY-STRIP  1000">
                        <div class="row">
                            <div class="col-sm-3">
                                <img class="block" alt="" src="./images/drystrip_green.png" height="250">
                            </div>
                            <div class="col-sm-1">
                                <img class="img-responsive" alt="absorb water" src="./images/absorb200.jpg" style="height: 50px;">
                                <img class="img-responsive" alt="absorb water" src="./images/adsorb20.jpg" style="height: 50px;">
                                <img class="img-responsive" alt="absorb water" src="./images/absorb8_16.jpg" style="height: 50px;">
                            </div>

                            <div class="col">
                                <h4>DRY-STRIP  1000
                                    Starch based container desiccant
                                </h4>
                                <p><strong>1KG ( 8x125gr. ) container CDX formulated desiccant (calcium chloride and modified starch)</strong></p>
                                <p>
                                    Non-woven bag with 30% modified starch +70% CaCl2 and a strong plastic hook to hang the Strip into the container eyes.
                                    The outer PE tube has big holes around to let the moisture in and a water tight reservoir to prevent dripping.
                                    Moisture adsorption capacity : >=200% at 30 °C and 90%RH </p>
                                <a href="http://shop.oemserv.com/view/12730/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>

                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>

            <h4 style="margin-top:70px"><strong>Product Detail</strong></h4>

            <b-container class="border border-dark rounded container2 shadow-none" style="line-height: 200%">
                <b-row class="text">
                    <b-col>
                        <h5><i class="fas fa-check" style="margin-right: 1%"></i>A desiccant</h5>
                        <ul>
                            <li>consist of clay or starch base mixture with modified <strong>CALCIUM CHLORIDE</strong></li>
                            <li>calcium chloride is an inorganic compound, a salt with the chemical formula CaCl2.  It is a colourless crystalline solid at room temperature, highly soluble in water.</li>
                            <li>In combination with clay or starch it increases its capability to store moisture even higher than its own weight.</li>
                        </ul>
                    </b-col>

                </b-row>
            </b-container>

        </div>
    </main>
</template>

<script>
    export default {
        name: "Desiccants",
        data(){
            return {
                counter: 0,
            }
        },
        metaInfo: {
            title: 'Desiccants',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'Prevent Cargo Moisture Damage'}
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
    .inflater_image1{
        padding:125px;
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
        margin: 7px 0;
    }

</style>