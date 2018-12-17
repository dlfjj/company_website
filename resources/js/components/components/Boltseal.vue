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
                            <img src="./images/boltseal_c.jpg" class="img-fluid product-image1" alt="container seal">
                            <img src="./images/boltseal2.jpg" class="img-fluid  product-image2" alt="container seal">

                        </div>

                        <div v-else-if="counter == 2">
                            <img src="./images/cableseal_b.jpg" class="img-fluid  product-image1" alt="cable seals">
                            <img src="./images/cableseal_c.jpg" class="img-fluid  product-image2" alt="cable seals">


                        </div>

                        <div v-else-if="counter == 3">
                            <img src="./images/SEALSWEB.jpg" class="img-fluid p-3" alt="indicative seals">
                        </div>

                    </div>

                    <b-button-group size="lg">
                        <b-button class="btn-white" v-on:click="counter = 1"><img src="./images/boltseal_c.jpg"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 2"><img src="./images/cableseal_c.jpg"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 3"><img src="./images/SEALSWEB.jpg"  class="button-image"></b-button>
                    </b-button-group>

                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <!--Content-->
                    <div class="p-4">

                        <p class="lead">
                            <span class="mr-1">
                                <h2> Seals - indicative & security</h2>
                            </span>
                        </p>

                        <p class="lead font-weight-bold" >Description</p>

                        <p>
                            Economic high security bolt seal helps protect cargo against tampering & theft. Multiple color options & personalization available.
                        </p>
                        <a href="http://shop.oemserv.com/category/59/8" target="_blank"><button type="button" class="btn btn-danger float-lg-left shadow-none">Products Detail</button></a>

                    </div>
                    <!--Content-->

                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <hr class="between-sections" style="margin:20px">

        </div>
    </main>
</template>

<script>
    export default {
        name: "Boltseal",
        data(){
            return {
                counter: 0,
            }
        },
        metaInfo: {
            title: 'Bolt Seal',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'Container and Cargo Seal'}
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
    .product-image1{
        padding: 3rem 0 1rem 10rem;

    }
    .product-image2{
        padding: 0 3rem 3rem 10rem;

    }
    /*.image-container{*/

        /*padding: 10px;*/
    /*}*/
    /*.inflater_image1{*/
        /*padding:125px;*/
    /*}*/

    /*.lashing_image1{*/
        /*padding:10%;*/
    /*}*/
    /*.lashing_image2{*/
        /*!*padding:1%;*!*/
        /*margin-top:19.5%;*/
        /*margin-bottom:19.5%;*/
    /*}*/
    li{
        margin: 7px 0;
    }
    @media(max-width:1100px){
        .product-image1{
            padding: 3rem 0 1rem 5rem;

        }
        .product-image2{
            padding: 0 3rem 3rem 5rem;

        }
    }

</style>