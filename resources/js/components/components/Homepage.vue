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
                                <p>You don’t like surpises opening <br>containers or truck doors ?</p>
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
                    </div>
                    <div class="col-lg-6 mt-lg-0">
                        <img src="./images/homepage_product.png" class="img-fluid" alt="standard dunnage airbag" data-aos="fade-in" data-aos-duration="1000">
                    </div>
                </div>
            </div>
        </section>

        <section class="airbag-calculator">
            <div class="container">
                <table class="table table-bordered text-center shadow-sm">
                    <thead class="thead-light text-uppercase" >
                    <tr>
                        <th colspan="7" style="font-size: larger; font-weight: 600; color: #112133">Airbag Calculator</th>
                    </tr>
                    <tr>
                        <th rowspan="2" style="width: 17%;">Gap between pallets</th>
                        <th rowspan="2" style="width: 14%;">Pallet Height</th>
                        <th colspan="2" style="width: 20%">Bag size</th>
                        <th scope="col" rowspan="2" style="width: 17%;">Airbag Types</th>
                        <th scope="col" rowspan="2" style="width: 10%;">Surface contact</th>
                        <th scope="col" rowspan="2" style="width: 17%;">Force by Max filling pressure </th>
                    </tr>
                    <tr>
                        <th>Width (cm)</th>
                        <th>Length (cm)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <b-form-input type="number" v-model="inputGap" placeholder="Enter Gap Width"></b-form-input>
                            <!--<b-form-input type="text" v-model="animal_name"></b-form-input>-->


                            <!--<p>Value: {{ selectedGap }}</p>-->

                            <!--<b-form-select class="mb-2 mr-sm-2 mb-sm-0"-->
                                           <!--v-model="selectedGap"-->
                                           <!--:options="gap"-->
                                           <!--id="bagWidthSelect"-->
                            <!--&gt;-->
                            <!--</b-form-select>-->
                        </td>
                        <td>
                            <!--<b-form-select class="mb-2 mr-sm-2 mb-sm-0"-->
                                           <!--v-model="selectedPalletHeight"-->
                                           <!--:options="filterUserSelectOptions"-->
                                           <!--id="bagWidthSelect"-->
                             <!--&gt;-->
                            <!--</b-form-select>-->
                            <!--<b-form-select class="mb-2 mr-sm-2 mb-sm-0"-->
                                           <!--v-model="selectedAnimalType"-->
                                           <!--:options="animalType"-->
                            <!--&gt;-->
                            <!--</b-form-select>-->
                            <b-form-input type="number" v-model="inputGapHeight" placeholder="Enter Your Pallet Height"></b-form-input>

                        </td>
                        <td>
                            <transition name="fade" mode="out-in" duration="1000">
                                <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                                               v-model="selectedBagWidth"
                                               :options="filterUserSelectOptions"
                                               id="bagWidthSelect"
                                               v-if="showWidthOptions"
                                >
                                </b-form-select>
                            </transition>
                            <!--<div>Selected: <strong>{{ selectedBagWidth }}</strong></div>-->
                        </td>
                        <td>
                            <transition name="fade" mode="out-in" duration="1000">
                            <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                                           v-model="selectedBagHeight"
                                           :options="filterUserBagLengthOptions"
                                           id="bagWidthSelect"
                                           v-if="showLengthOptions"
                            >
                            </b-form-select>
                            </transition>
                            <!--<div>Selected: <strong>{{ selectedBagHeight }}</strong></div>-->

                        </td>
                        <td>
                            <transition name="fade" mode="out-in" duration="1000">
                            <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                                           v-model="selectedBagType"
                                           :options="bagType"
                                           id="bagWidthSelect"
                                           v-if="showAirbagType"
                            >
                            </b-form-select>
                            </transition>
                        </td>
                        <!--<td><span class="airtableFont">{{ surface_contact }} </span></td>-->
                        <td><span class="airtableFont">{{ surfaceContactAnimated }}</span></td>
                        <!--binding style with condition-->
                        <td><span v-bind:class="{ 'airtableFont': isActive == true }">{{ forceByFillingPressure() }}</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <!--testing for the table to load -->
            <div>
                <!--<div v-for="data in airbagTable">{{ data }}</div>-->
                <!--<div v-for="(data,index) in airbagTable" v-if="index <=1">{{data['Bag type']}}</div>-->
                <!--<div v-for="data in bagWidth">{{ data }}</div>-->
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

                //transition for airtable
                showWidthOptions:false,
                showLengthOptions:false,
                showAirbagType:false,
                animateSurfaceContact:0,
                animateForceNumber: 0,

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


                surface_contact: 0,
                forceByMaxFillingPressure: '',
                selectedBagWidth: 0,
                selectedBagHeight: 0,
                inputGap: 0,
                selectedGap:0,
                inputGapHeight: 0,
                givenGap:0,
                selectedBagType: '',
                selectedPalletHeight: 150,
                // palletHeight:[{text:'PH > 60',value:60},{text:'PH > 90',value: 90}, {text:'PH > 120', value:120},{text:'PH > 150',value:150}],
                bagWidth:[{text:'60',value:60},{text:'90',value: 90}, {text:'120', value:120},{text:'150',value:150}],
                bagHeight:[{value:60, text:'60'},{value:90,text:'90'},{value:120,text:'120'},{value:150,text:'150'},{value:180,text:'180'},{value:210,text:'210'},{value:225,text:'225'},{value:240,text:'240'},{value:260,text:'260'},{value:270,text:'270'}],
                gap: [{value:150, text:'150'},{value:200, text:'200'},{value:300,text:'300'},{value:400, text:'400'},{value:500, text:'500'},{value:600, text:'600'}],
                bagType:[{ value: '', text: 'Select Bag Type'},{value:'PAPER 1 Ply SAVFER',text:'PAPER 1 Ply SAVFER'},{value:'Paper 2 Ply SAVFER',text:'Paper 2 Ply SAVFER'},
                    {value:'Paper 1 Ply Standard',text:'Paper 1 Ply Standard'},{value:'Paper 2 Ply Standard', text:'Paper 2 Ply Standard'},
                    {value:'Paper 4 Ply Heavy Duty',text:'Paper 4 Ply Heavy Duty'},{value:'Paper 6 Ply Super Heavy',text:'Paper 6 Ply Super Heavy'},
                    {value:'Paper 8 Ply',text:'Paper 8 Ply'},{value:'PP SAVFER medium',text:'PP SAVFER medium'},{value:'PP90 Standard',text:'PP90 Standard'},
                    {value:'PP150 Heavy Duty',text:'PP150 Heavy Duty'},{value:'PP200 Super Heavy',text:'PP200 Super Heavy'},{value:'PP 250 GSM',text:'PP 250 GSM'}],
                airbagTable : json,
                isActive: false
                //airbag calculator table
            }
        },
        //watch vale change within the table
        watch:{
            'selectedBagWidth': function(){
                this.getSurfaceContactIndex;
            },
            'selectedGap': function(){
                this.getSurfaceContactIndex;
            },
            'selectedBagType': function(newValue){
                // this.getSurfaceContactIndex;
            },
            'inputGap':function(){
                if(this.inputGap>30){
                    this.showWidthOptions=true;
                }else{
                    this.showWidthOptions=false;
                }
            },
            'inputGapHeight':function(){
                if(this.inputGapHeight>20){
                    this.showLengthOptions = true;
                }else{
                    this.showLengthOptions = false;
                }
            },
            // 'selectedBagHeight': function(){
            //     this.getSurfaceContactIndex;
            // },
            'selectedBagHeight':function(){
                this.getSurfaceContactIndex;
                if(this.selectedBagHeight){
                    this.showAirbagType = true;
                }else{
                    this.showAirbagType = false;
                }
            },
            'surface_contact':function(newValue){

                //animated number presentation when it change value
                TweenLite.to(this.$data, 0.5, { animateSurfaceContact: newValue });
            }
        },
        methods:{
            forceByFillingPressure(){
                let f = 0;
                f = this.selectedBagWidth * this.selectedBagHeight * this.surface_contact * this.getMaxFillingPressure * 2 / 10;
                if (isNaN(f)){
                    this.isActive = false;
                    return "Please Choose Another Value";
                }else {
                    this.isActive = true;
                    //animated number presentation when it change value
                    // return TweenLite.to(this.$data, 0.5, { animateForceNumber: newValue });
                    return (this.forceByMaxFillingPressure = Math.round(f * 10) / 10).toString() + " kg" ;
                }
            },
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
            filterUserSelectOptions (){
                if (this.inputGap){
                    let gapTohWidth = 0;
                    if(0<=this.inputGap && this.inputGap<=300){
                        gapTohWidth=60;
                        this.selectedGap = 300;
                    }else if(301<=this.inputGap && this.inputGap<=400){
                        gapTohWidth=90;
                        this.selectedGap = 400;
                    }else if(401<=this.inputGap && this.inputGap<=500){
                        gapTohWidth=120;
                        this.selectedGap = 500;
                    }else if(501<=this.inputGap && this.inputGap<=600){
                        gapTohWidth=150;
                        this.selectedGap = 600;
                    }

                    return this.bagWidth.filter(t => t.value >= gapTohWidth);
                }else {
                    return this.bagWidth
                }
            },
            filterUserBagLengthOptions (){
                if (this.inputGapHeight){
                    let selectableBagHeight = 0;
                    if(0<=this.inputGapHeight && this.inputGapHeight<=89){
                        selectableBagHeight=60;
                    }else if(90<=this.inputGapHeight && this.inputGapHeight<=119){
                        selectableBagHeight=90;
                    }else if(120<=this.inputGapHeight && this.inputGapHeight<=149){
                        selectableBagHeight=120;
                    }else if(150<=this.inputGapHeight && this.inputGapHeight<=179){
                        selectableBagHeight=150;
                    }else if(180<=this.inputGapHeight && this.inputGapHeight<=219){
                        selectableBagHeight=180;
                    }else if(210<=this.inputGapHeight && this.inputGapHeight<=224){
                        selectableBagHeight=210;
                    }else if(225<=this.inputGapHeight && this.inputGapHeight<=239){
                        selectableBagHeight=225;
                    }else if(240<=this.inputGapHeight && this.inputGapHeight<=259){
                        selectableBagHeight=240;
                    }else if(260<=this.inputGapHeight && this.inputGapHeight<=269){
                        selectableBagHeight=260;
                    }else if(this.inputGapHeight>=270){
                        selectableBagHeight=270;
                    }

                    return this.bagHeight.filter(t => t.value <= selectableBagHeight);
                }else {
                    return this.bagHeight
                }
            },
            surfaceContactAnimated: function() {
                return this.animateSurfaceContact.toFixed(1);
            }
        }
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