<template>
    <body>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-auto p-lg-5 mx-auto" >
            <h1 class="display-5 font-weight-normal text-uppercase pl-2" id="prodcut_title">
                 <a class="paper-bag-text-color" v-bind:href="kraftpaperlink" id="kraft"> Kraft Paper</a> | <a class="paper-bag-text-color" v-bind:href="polywovenlink" id="polywoven">Polywoven</a>
            </h1>
            <ul class="lead font-weight-light list-unstyled">
                <li class="text-uppercase font-weight-bold mr-4">Dunnage Airbag</li>
                <li v-for="airbagattribute in airbagAttributes">{{ airbagattribute.attribute }}</li>
            </ul>
        </div>

        <a v-bind:href="polywovenlink">
            <div class="d-none d-md-block">
                <div class="product-device ">
                    <div class="view zoom pt-lg-3 pb-lg-3" data-aos="flip-up" data-aos-duration="5000">
                        <img class="polyweven-image img-fluid" alt="Polywoven dunnage airbag" src="./images/polywovenbag.png" data-holder-rendered="true">

                        <div class="mask flex-center"></div>
                    </div>
                </div>
            </div>
        </a>

        <a v-bind:href="kraftpaperlink">
            <div class="d-none d-md-block">
                <div class="product-device-2">
                    <div class="view zoom pt-lg-3 pb-lg-3" data-aos="flip-up" data-aos-duration="5000">
                        <img class="kraft-image img-fluid" alt="kraft dunnage airbag" src="./images/kraftdunnagebag.png" data-holder-rendered="true">

                        <div class="mask flex-center"></div>
                    </div>
                </div>
            </div>
        </a>

    </div>

    <hr class="between-sections" style="margin:30px">

    <section class="container-fluid shop"  data-aos="fade-up" data-aos-duration="2000">
        <div class="row">
            <div class="col-sm-12">
                <div class="title-box">
                    <p>Get more</p>
                    <h2 class="mt0">Products</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <!--<div class="boxed">-->
            <div class="col-lg-3 col-sm-6" >
                <div class="view overlay zoom mb-4">
                    <a v-bind:href="lashinglink">
                        <img class="img-fluid" src="./images/containerlashing5.jpg" alt="containerlashing">
                        <div class="mask flex-center rgba-indigo-strong">
                            <p class="white-text product-title">Container Lashing</p>
                        </div>
                    </a>

                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4">
                <div class="view overlay zoom">
                    <a v-bind:href="seallink">
                        <img class="img-fluid" src="./images/SEALSWEB.jpg" alt="seal">
                        <div class="mask flex-center rgba-indigo-strong">
                            <p class="white-text product-title">Seals</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4">
                <div class="view overlay zoom">
                    <a v-bind:href="barrellink">
                        <img class="img-fluid" src="./images/Barrelcover3.jpg" alt="barrel cover">
                        <div class="mask flex-center rgba-indigo-strong">
                            <p class="white-text product-title">Barrel Securing</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4">
                <div class="view overlay zoom">
                    <a v-bind:href="desiccantslink">
                    <img class="img-fluid" src="./images/Desiccant.jpg" alt="desiccant">
                    <div class="mask flex-center rgba-indigo-strong">
                        <p class="white-text product-title">Desiccants</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <hr class="between-sections" style="margin:0 30px 30px 30px;">

    </body>
</template>

<script>
    export default {
        name: "Product",
        data(){
            return{
                airbagAttributes: [
                    { attribute:'light' },
                    { attribute:'Medium' },
                    { attribute:'Heavy' },
                    { attribute:'Super Heavy' },
                    { attribute:'Made in USA' },
                    { attribute:'Inflation tools' },
                    { attribute:'3D square' },
                    { attribute:'A.A.R.' }
                ],
                // kraftpaperlink: '/Product/kraftbag',
                // polywovenlink: 'ppairbag',
                // lashinglink: '/containerlashing',
                // seallink:'/boltseal',
                // barrellink: '/Product/barrelsecuring',
                // desiccantslink: '/Product/desiccants',
                kraftpaperlink: '#/Product/kraftbag',
                polywovenlink: '#/Product/ppairbag',
                lashinglink: '#/Product/containerlashing',
                seallink:'#/Product/boltseal',
                barrellink: '#/Product/barrelsecuring',
                desiccantslink: '#/Product/desiccants',
            }
        },
        metaInfo: {
            title: 'Product',
            titleTemplate: '%s | American Dunnage Inc',
            meta: [
                {name: 'description', content: 'Product List: Polywoven Dunnage Airbag, Kraft Paper Dunnage Airbag, Container Lashing, Seals, Barrel Securing, Desiccant'}
            ]
        },
    }
</script>

<style scoped>
    @import './css/main.css';
    @import './css/mdb.css';


    #prodcut_title > #polywoven:hover{
        color: lightgrey;
    }

    #prodcut_title > #kraft:hover{
        color: orange;
    }

    #container_lashing img, #boltseal_image img, #barrelcover_image img{
        display:block;
        margin:auto;
    }

    .container {
        max-width: 960px;
    }

    /*kraft paper bag property*/
    .product-device {
        position: absolute;
        right: 0%;
        bottom: 1%;
        width: 30rem;
        height: 500px;
        background-size: contain;
        /*background-image: url("./products_detail_pages/images/kraft_airbag7.png");*/
        background-repeat: no-repeat, repeat;
        /*background-color: yellow;*/
        /*border-radius: 21px;*/
        /*-webkit-transform: rotate(30deg);*/
        /*transform: rotate(0deg);*/
    }
    .polyweven-image{
        width: 68%;
        float:right;
        margin-right:30px;
    }

    /*ppwoven property*/
    .product-device-2 {
        position: absolute;
        bottom: 0%;
        right: auto;
        left: 0%;
        width: 30rem;
        height: 500px;
        background-size: contain;
        /*background-image: url("./images/ppwovenbag4.png");*/
        /*background-color: yellow;*/
        background-repeat: no-repeat, repeat;
    }
    .kraft-image{
        width:68%;
        float:left;
        margin-left: 70px;
    }
    span{
        font-weight: 300;
        font-size: x-large;
    }

    .card-body{
        background-color: #dedede;
    }

    .paper-bag-text-color{
        color: black;
    }

    .flex-equal > * {
        -ms-flex: 1;
        flex: 1;
    }


    @media(max-width:1080px){
        #lashing_section, #desiccant, #barrelcover, #boltseal{
            margin-bottom:10px;
            padding:40px;
        }
        .polyweven-image{
            margin-top:150px;
            width:47%;
        }
        .kraft-image{
            margin-top:140px;
            width:47%;
        }
    }

    @media (min-width: 768px) {
        .flex-md-equal > * {
            -ms-flex: 1;
            flex: 1;
        }
    }
    @media(max-width: 781px){
        .paper-bag-text-color{
            color: #1137b1;
        }

    }
    @media(max-width: 681px){
        #lashing_section, #desiccant, #barrelcover, #boltseal{
            padding-bottom: 0px;
            width:380px;
            margin: 0 auto;
        }

    }

    .overflow-hidden { overflow: hidden; }

</style>