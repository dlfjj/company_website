<template>
    <div>
        <section>
            <div>
                <div class="view">
                    <b-carousel id="carousel1"
                                style="text-shadow: 1px 1px 2px #333;"
                                indicators
                                class="carousel-fade"
                                background="#ededed"
                                :interval="sliderPacechange"
                                img-width="1024"
                                img-height="300"
                                v-model="slide"
                    >
                        <b-carousel-slide>
                            <img slot="img" class="d-block img-fluid w-100" src="./images/banner1.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" class="d-block img-fluid w-100 pb-1"
                                 src="./images/Banner4.jpg" alt="Polywoven Bag">
                        </b-carousel-slide>
                        <b-carousel-slide >
                            <img slot="img" class="d-block img-fluid w-100 pb-1"
                                 src="./images/Banner2.jpg" alt="Paperbag dunnage bag ">
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img slot="img" class="d-block img-fluid w-100 pb-1"
                                 src="./images/Banner3.jpg" alt="airbag usage">
                        </b-carousel-slide>

                    </b-carousel>
                    <div class="mask" v-if="slide === 0">
                        <div class="carousel-caption">
                            <div  class="rgba-blue-grey-strong container"  data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
                                <p>You don’t like surprises opening <br>containers or truck doors ?</p>
                            </div>
                            <div class="container rgba-red-strong" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2000">
                                <p >We don’t like it at all !</p>
                            </div>
                            <div class="blue-grey container" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="3000">
                                <p>American Dunnage Air Bags will <br> keep your cargo safe and in place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">

            <div class="text-center">
                <h2 class="mb-4 pb-3 pl-3 title-box">About Us</h2>
            </div>
            <div class="home_content">
                <div class="container">
                    <div class="row">

                        <div class="home_list">
                            <ul>
                                <li class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="about-us">
                                        <div class="thumbnail">
                                            <img src="./images/manufacture_process.jpg" height="200" alt="factory inside overview" class="img-fluid ">
                                            <div class="caption">
                                                <h3>Who we are</h3>
                                                <p>{{ identity }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="about-us">
                                        <div class="thumbnail">
                                            <img src="./images/wovenmachine.jpg" class="img-fluid dongguan" alt="OEMSERV Chinese factory">
                                            <div class="caption">
                                                <!--<h3>Qualification</h3>-->
                                                <h3>Manufacturing</h3>
                                                <p>{{ qualification }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="about-us">
                                        <div class="thumbnail">
                                            <img src="./images/machinery.jpg" class="img-fluid" height="200" alt="manufacture process">
                                            <div class="caption">
                                                <h3>Professional</h3>
                                                <p>{{ professional }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="about-us">
                                        <div class="thumbnail">
                                            <img src="./images/factory_overview.jpg" class="img-fluid" height="200" alt="factory overlook">
                                            <div class="caption">
                                                <h3>Continuity</h3>
                                                <p>{{ continuity }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="pl-4 services">
            <div data-aos="fade" data-aos-delay="100" data-aos-duration="2000">
                <img src="./images/5_star_logo.jpg" class="img-thumbnail center shadow" alt="5 star logo" style="width: 14%">
            </div>
            <h2 class="pb-5 pt-4 text-center title-box" data-aos="flip-up" data-aos-delay="100">FIVE STAR SERVICE ADVANTAGES</h2>
            <div class="container p-2">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                                <span class="timeline-icon"></span>
                                <div class="timeline-content">
                                    <h3 class="title">Certified Quality</h3>
                                    <p class="description">
                                        All dunnage airbags have their required certifications
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="fab fa-font-awesome-flag"></i>
                                    <span class="year">2016</span>
                                </div>
                            </div>
                            <div class="timeline" data-aos="fade-left" data-aos-delay="80" data-aos-duration="1500">
                                <span class="timeline-icon"></span>
                                <div class="timeline-content">
                                    <h3 class="title">Short Lead Times</h3>
                                    <p class="description">
                                        We manufacture on demand with the shortest possible turnaround times
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-stopwatch"></i>
                                    <span class="year">2017</span>
                                </div>
                            </div>
                            <div class="timeline" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                                <span class="timeline-icon"></span>
                                <div class="timeline-content">
                                    <h3 class="title">Stock Availability</h3>
                                    <p class="description">
                                        We hold sufficient stock to deliver quickly
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-rocket"></i>
                                    <span class="year">2016</span>
                                </div>
                            </div>
                            <div class="timeline" data-aos="fade-left" data-aos-delay="110" data-aos-duration="2500">
                                <span class="timeline-icon"></span>
                                <div class="timeline-content">
                                    <h3 class="title">Small Quantities Available</h3>
                                    <p class="description">
                                        Customers don't need to order full container loads
                                    </p>
                                </div>
                                <div class="icon">
                                    <!--<i class="fa fa-briefcase"></i>-->
                                    <i class="material-icons">trending_down</i>
                                    <span class="year">2015</span>
                                </div>
                            </div>
                            <div class="timeline" data-aos="fade-left" data-aos-delay="120" data-aos-duration="3000">
                                <span class="timeline-icon"></span>
                                <div class="timeline-content">
                                    <h3 class="title">Local Support</h3>
                                    <p class="description p-2">
                                        Call us toll free at (877) 226 – 4112. We’ll be happy to help!
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span class="year">2014</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="dunnage-airbag">
            <div class="container text-lg-left">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-11">
                        <h2 class="title text-center text-lg-left text-uppercase" data-aos="flip-up" data-aos-delay="100">Our Dunnage Airbags</h2>
                        <div class="row">
                            <div class="col-lg-12" data-aos="zoom-in" datsa-aos-duration="1000" id="dunnage_description">
                                <ul class="mt-4 font-weight-normal">
                                    <li v-for="airbagHighlight in airbagHighlights">
                                        <span v-for="message in airbagHighlight"><i class="fas fa-check-square pr-3"></i>{{ message }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-lg-8 pt-lg-5 mt-sm-1 mr-lg-5">
                            <a v-bind:href="productLink"><button class="btn btn-primary btn-lg btn-block waves-effect" data-aos="fade-left"><span>More Product Information</span></button></a>
                        </div>

                        <div class="mt-lg-8 pt-lg-3 mt-sm-1 mr-lg-5">
                            <router-link :to="{ name: 'airbagCalculator'}" target="_blank">
                                <button class="btn btn-outline-danger btn-lg btn-block waves-effect" data-aos="fade-left"><span>Airbag Calculator</span></button>
                                <!--<i class="fas fa-calculator"></i>-->
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-lg-0">
                        <img src="./images/homepage_product.png" class="img-fluid" alt="standard dunnage airbag" data-aos="fade-in" data-aos-duration="1000">
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import json from './csvFiles/airbag_size_table.json'
    import { TweenLite } from 'gsap'

    export default {
        name: "Homepage",
        metaInfo: {
            title: 'Home',
            titleTemplate: '%s | American Dunnage Inc',
            meta: [
                {name: 'description', content: 'Manufacturing the Best Dunnage Airbags for Cargo Transportation Safety | American Dunnage Home'}
            ]
        },
        // props:{
        //     loaded:true
        // },
        // props:['loaded'],
        data(){
            return{
                // carousel section
                slide: 0,
                carouselTime: 0,
                attachFontSize: false,
                loaded: false,



                // about us section
                identity:'American Dunnage Inc. is the newest branch of OEMSERV, a world leading manufacturer of dunnage air bags and other transport safety equipment.',
                // qualification: 'OEMSERV has been developing products and solutions for transportation safety since 2003, and nobody else offers a wider range of cargo securing equipment produced in-house.',
                qualification: 'OEMSERV has been developing and manufacturing products and solutions for transportation safety since 2003, and nobody else offers a wider range of cargo securing equipment produced in-house.',
                professional: 'Our German engineering and management team always strive for the highest in quality standards to make our products to the most reliable and competitive available.',
                continuity: 'American Dunnage Inc. manufactures dunnage air bags, made in Reno, NV, with the same quality standard, reliability and competitive pricing.',

                // dunnage bag section
                productLink: '#/Product',
                airbagHighlights: [
                    { message: 'Kraft Paper Air Bags' },
                    { message: 'PP-Polywoven Air Bags' },
                    { message: 'Reusable & 100% recyclable ' },
                    { message: 'SGS, RoHS, REACH, TÜV and AAR available' },
                    { message: 'Burst pressure up to 3x higher than max. filling pressure' },
                    { message: 'Equipped with MEGAFLOW fast filling valve' },
                    { message: 'Vailable length: 36 inch up to 105 inch' },
                    { message: 'Standard width : 24, 36 and 48 inch' },
                    { message: 'Meet all common safety standards'},
                    { message: 'Very user friendly handling' },
                ],

                //airbag calculator table
                //user selected value
                // animal_name: '',
                // selectedAnimalType:0,
                // animalType:[{text:'Bass',value:60},{text:'Catfish',value: 90}, {text:'Jersey cattle', value:120, disabled: true},{text:'Guernsey cattle',value:150}],



            }
        },
        //watch vale change within the table


        methods:{


        },
        computed:{
            sliderPacechange: function(){
                // change the carousel pace for each picture
                if (this.slide < 3){
                    this.carouselTime = 6000;
                }else{
                    this.carouselTime = 3000;
                }
                return this.carouselTime;
            },
            //gap is for conditional select
            getSurfaceContactIndex: function(){
                let t = 0;
                for (let i = 0; i < this.airbagTable.length; i++) {
                    if(this.airbagTable[i]['Bags Width'] === this.selectedBagWidth && this.airbagTable[i]['Gap height (mm)'] === this.selectedGap){
                        t = this.airbagTable[i]['Contact surface area'];
                    }
                    // console.log(this.airbagTable[i]['Bags Width']);
                }
                return this.surface_contact = t;

                // console.log(this.selectedBagWidth * this.selectedBagHeight * this.selectedGap );
            },
            getMaxFillingPressure: function(){
                let MFP = '';
                for (let i = 0; i < this.airbagTable.length; i++) {
                    let n = this.selectedBagType.localeCompare(this.airbagTable[i]['Bag type'].trimRight());
                    if (n === 0 && this.airbagTable[i]['Bags Width'] === this.selectedBagWidth && this.surface_contact === this.airbagTable[i]['Contact surface area']){
                       return MFP = this.airbagTable[i]['Max fill. pressure'] * 10;
                    }
                }
            },

            //change bag width options based on gap width
        },
    }
</script>


<style scoped>
    @import './css/timeline.css';
    @import './css/main.css';

    #dunnage_description ul { list-style:none; }
    #dunnage_description li { margin-bottom:10px; }
    #dunnage_description li span { position: relative; left: 12px; }
    #dunnage_description li:before {
        /*font-family: 'FontAwesome';*/
        /*content: '\f006';*/
        /*color: red;*/
        margin:0px 5px 2px -20px;
    }
    #dunnage_description{
        color: #0f2452;
        font-weight: 400;
    }

    .dunnage-airbag{
        text-align: left;
        padding: 8.5rem;
        background-color: #fdffff;
    }

    .logo img{
        height: 40px;
        width: 80px;
        /*background-color: powderblue;*/
    }
    tbody{
        width:200%;
    }


    @media(max-width:680px){
        #dunnage_description{
            margin-right: 30px;
        }
        .dunnage-airbag{
            margin-top:4rem;
            margin-bottom:4rem;
            padding: 0.6rem;
        }

        .home-area{
            text-align: center;
        }
        .dongguan{
            width:100%;
        }
    }


    .btn {
        border: none;
        color: #FFFFFF;
        transition: all 0.5s;
    }

    .airtableFont{
        font-size: 1.9vw;
    }

    /*select > option {*/
        /*background-color: #cc0000;*/
        /*font-weight: bold;*/
        /*font-size: 12px;*/
        /*color: white;*/

    /*}*/


    .carousel-caption{
        position: relative;
        /*background-color: black;*/
        text-align: left;
        font-weight: 500;
        font-size: 1.6vw;
        color: #fbfffd;
        margin-left:50%;
        margin-top:6%;
    }

    /*vuejs animation for fade in and fade out*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>