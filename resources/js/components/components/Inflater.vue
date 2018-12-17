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
                            <img src="./images/inflater2.png" class="img-fluid inflater_image1" alt="inflater image">
                        </div>
                        <div v-else-if="counter == 2">
                            <img src="./images/inflater5.jpg" class="img-fluid" alt="inflater image">
                        </div>
                        <div v-else-if="counter == 3">
                            <img src="./images/inflater1.jpg" class="img-fluid infater-image" alt="inflater image">
                        </div>

                    </div>

                    <b-button-group size="lg">
                        <!--<b-button class="btn-white" v-on:click="counter = 1"><img src="./images/inflater1.jpg"  class="button-image"></b-button>-->
                        <b-button class="btn-white" v-on:click="counter = 1"><img src="./images/inflater2.png"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 2"><img src="./images/inflater5.jpg"  class="button-image"></b-button>
                        <b-button class="btn-white" v-on:click="counter = 3"><img src="./images/inflater1.jpg" class="button-image"></b-button>
                    </b-button-group>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <!--Content-->
                    <div class="p-4">

                        <div class="mb-3">
                            <a>
                                <span class="badge purple mr-1">Made in USA</span>
                            </a>
                            <a>
                                <span class="badge blue mr-1">Accessory</span>
                            </a>
                            <a>
                                <span class="badge red mr-1">Required</span>
                            </a>
                        </div>

                        <p class="lead">
                            <span class="mr-1">
                                <h2>Mega Flow Standard Inflater</h2>
                            </span>
                        </p>

                        <p class="lead font-weight-bold" >Description</p>

                        <p>This special tool is designed for the MEGA FLOW valve which is available for all OEMSERV and American Dunnage air bags.
                            This fully proved system, which eliminates all operator errors, can fill your dunnage air bag 30 to 40% faster than any other compressed air filling system!
                            The special designed venturi MEGA FLOW inflater leads the air stream in a special chamber and create a vacuum to suck additional outside air into the bag.
                            Inflating of dunnage air bags has never been easier and faster than with our new fast filling MEGA FLOW inflation tools.
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
                                <li>Easy & safe handling</li>
                                <li>Sits tight and secure on the valve</li>
                                <li>Opens valve when attached</li>
                                <li>Air flow slider for one hand operation</li>
                                <li>No trigger need to be hold all time</li>
                                <li>Closes valve when detached</li>
                            </ul>
                    </b-col>
                </b-row>
            </b-container>

            <h4 style="margin-top:70px"><strong>Product Instruction</strong></h4>

            <b-container class="border border-dark rounded container2 shadow-none" style="margin-bottom:30px; line-height:200%">
                <b-row class="text">
                    <b-col>

                        <h5><i class="fas fa-tasks" style="margin-right: 1%"></i>How to use</h5>
                        <ol>
                            <li>Press the handle to open the fork and apply it to the valve.</li>
                            <li>Release the handle when the inflater is on the valve.</li>
                            <li>You can hold the air bag high up with this handy inflater.</li>
                            <li>Start inflating.</li>
                            <li>The air bag will inflate very fast.</li>
                            <li>When the bag start build up pressure and have reached the desired filling pressure, remove the inflater from the valve before you stop the air flow.</li>
                        </ol>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Inflater",
        data(){
            return{
                counter: 0,
                inflaterimage1: "/static/img/inflater2.c86ea94.png",
                inflaterimage2: "/static/img/inflater5.8b0c416.jpg",
                inflaterimage3: "/static/img/inflater1.93e6d9f.jpg"
            }
        },
        metaInfo: {
            title: 'Inflator',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'Our own design inflators can allow you to easily fill your bag'}
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
    li{
        margin: 7px 0;
    }
</style>