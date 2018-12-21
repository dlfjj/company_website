<template>

    <div style="margin: 40px; padding-bottom: 40px">
        <div class="title-box">
            <h2 class="mt0">Contact Us</h2>
        </div>

            <section class="text-center overflow-hidden">
                <b-button-group>
                    <a v-bind:href="linkedinlink" target="_blank">
                        <b-button  title="Career" type="button" :size="buttonSize" class="rounded-0" variant="info"><i class="fab fa-linkedin left"></i>&nbspLinkedin</b-button>
                    </a>
                    <a v-bind:href="facebooklink" target="_blank">
                        <b-button title="Check out" type="button" :size="buttonSize" variant="primary" class="rounded-0"><i class="fab fa-facebook left"></i>&nbspFacebook</b-button>
                    </a>
                    <a v-bind:href="youtubelink" target="_blank">
                        <b-button v-b-popover.hover.top="'Website About Our Parent Company'" :size="buttonSize" class="rounded-0" type="button" variant="danger"><i class="fab fa-youtube left"></i> Youtube</b-button>
                    </a>
                </b-button-group>
            </section>


            <div class="d-flex justify-content-center mt-5 ml-lg-3">
                <div class="card">
                    <b-embed type="iframe"
                             aspect="4by3"
                             class="border-bottom border-light"
                             :src="google_url"
                             allowfullscreen
                    ></b-embed>

                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col-md-4">
                                <div class="icon">
                                    <!--<i class="fas fa-map-marked-alt fa-2x border border-light shadow-sm"></i>-->
                                    <i class="material-icons">
                                        location_on
                                    </i>
                                </div>
                                <p class="pt-4">{{message}}</p>
                                <p>{{message2}}</p>
                            </div>
                            <div class="col-md-4">
                                <a class="icon">
                                    <!--<i class="fas fa-phone fa-2x border border-light"></i>-->
                                    <i class="material-icons">
                                        phone
                                    </i>
                                    <!--<i class="fas fa-phone fa-2x border border-light shadow-sm"></i>-->
                                </a>
                                <div class="pt-4">
                                    <p v-for="item in items">{{ item.message2 }}</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <a class="icon">
                                    <!--<i class="fas fa-door-open fa-sm border border-light shadow-sm"></i>-->
                                    <i class="material-icons">
                                        access_time
                                    </i>
                                </a>
                                <div class="pt-4">
                                    <p v-for="text in hours">{{ text.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div itemscope="" itemtype="http://schema.org/PostalAddress">
                        <meta itemprop="name" content="Sparks">

                        <div itemscope="" itemtype="http://schema.org/PostalAddress">
                            <div itemprop="address" class="address-container">
                                <a hidden class="address-detail" itemprop="streetAddress">445 Coney Island Drive, Suite A</a>
                                <a hidden class="address-detail" itemprop="addressRegion">Sparks</a>
                                <a  hidden class="address-detail" itemprop="postalCode">89431</a>
                            </div>
                            <meta itemprop="addressCountry" content="United State">
                        </div>
                    </div>

                </div>

            </div>
        <hr>

        <section class="mr-lg-4">
            <div class="title-box">
                <h4 class="mt-0">{{ popupboxMessage }}</h4>
            </div>
            <div class="container shadow-sm border p-4">
                <!--<a  @click="popupWindows">-->
                    <!--<button type="button" class="btn btn-primary btn-lg btn-block"><span>Send Your Info</span></button>-->
                <!--</a>-->
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" id="name" v-model="fields.name" />
                        <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                    </div>

                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" name="email" id="email" v-model="fields.email" />
                        <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" class="form-control" id="company"  name="company" v-model="fields.company">
                        <div v-if="errors && errors.company" class="text-danger">{{ errors.company[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="state" class="control-label">State</label>
                        <v-select v-model="fields.state" :options="state" id="state" name="state">
                        </v-select>
                    </div>
                    <div class="form-group">
                        <label for="zipCode" class="col-form-label">Zip Code</label>
                        <input type="text" class="form-control" id="zipCode" name="zipCode" v-model="fields.zipCode">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" name="message" rows="5" v-model="fields.message"></textarea>
                        <div v-if="errors && errors.message" class="text-danger">{{ errors.message[0] }}</div>
                    </div>

                    <div class="row">
                        <div class="col-lg-2">
                            <button type="submit" class="btn btn-primary" id="start-progress-bar"><i class="material-icons">send</i></button>
                        </div>
                        <div class="col-lg-10 mt-4">
                            <b-progress :value="progressBarValue" class="w-100" variant="warning"></b-progress>
                        </div>
                    </div>
                    <div v-if="progressBarValue === 100" class="alert alert-success mt-3">
                        Message sent!
                    </div>
                </form>

            </div>
        </section>


    </div>

</template>

<script>
    import FormMixin from './js/FormMixin';
    import { HalfCircleSpinner } from 'epic-spinners';

    export default {
        name: 'Contact',
        mixins: [ FormMixin ],
        components: {
            HalfCircleSpinner
        },
        data(){
            return{
                linkedinlink: 'https://www.linkedin.com/company/american-dunnage-inc/',
                facebooklink: 'https://www.facebook.com/AmericanDunnageBagManufacturer/',
                youtubelink: 'https://www.youtube.com/channel/UCJwfPgzpPWE3OtJ6xbCQVyg',
                google_url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.9053927130576!2d-119.74957148293575!3d39.51876001784578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80993faa0a73c2e7%3A0xaf72b63ceeb8dff0!2sAmerican+Dunnage+Inc.!5e0!3m2!1sen!2sus!4v1532632032274',
                title: "  Our Address",
                message: "445 Coney Island Drive",
                message2: "Sparks, 89431, USA",
                title2: "  Call Us",
                items:[{message2:"Call (775)-399-6770"}, {message2:"Main (775)-399-6770"},
                    {message2:"Accounting (775)-399-6773"}, {message2:"Fax (775)-399-6776"}],
                title3: "Business Hours",
                hours:[{text:"Monday to Saturday"},{text:" 8:30 am - 6:00 pm PST"}],
                popupboxMessage: 'Please send us your message here and we promise you fastest response',
                buttonSize: '',
                msg: 'Hello World! This is a Event listener test.',
                windowWidth: 0,
                windowHeight: 0,

                'action': '/submit',
                progressBarValue:0,
                state:['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
            }
        },
        metaInfo: {
            title: 'Contact',
            titleTemplate: '%s | American Dunnage Inc',
            meta: [
                {name: 'description', content: 'Feel Free to Call Us if You Have Any Questions'}
            ]
        },
        methods: {
            popupWindows: function(){
                window.open('http://getinfo.n55lwi.info/',
                    'newwindow',
                    'width=500,height=800');
                return false;
            },
            // according to screen width to resize button
            resizeButton(event) {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 720){
                    this.buttonSize = 'sm';
                }else if(this.windowWidth >1000){
                    this.buttonSize = 'lg';
                }
            },
        },
        // according to screen width to resize button
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.resizeButton);
                this.resizeButton()
            });
        },

    };



</script>

<style scoped>
    @import './css/main.css';
    @import './css/timeline.css';


    .container{
        width:68%;
        margin-left: 17.5%;
    }
    li{
        list-style-type: none;
        list-style: none;
    }
    .title{
        font-weight: normal;
        font-size:20px;
    }
    .card{
        margin-bottom:50px;
        width: calc(60% + 50px);

    }
    .address-detail{
        /*float: left;*/
        width: auto;
        /*text-align: center;*/
        color: black;
        font-size: 14px;
    }

    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        background: linear-gradient(90deg, rgba(9, 13, 132, 0.72) 50%, rgb(124, 126, 124) 100%);
        /*background-color: DodgerBlue;*/
        height: 404px;
        width: 980px
    }
    h5{
        font-family: "Times New Roman";
        font-weight: 600;
        color: #0f0b71;
    }

    @media(max-width:1080px){
        .card{
            margin-bottom:50px;
            width: calc(100% - 200px);
        }
        .container{
            width:80%;
            margin-left: 10%;
        }
    }
    @media(max-width:720px){
        .card{
            margin-bottom:50px;
            width: calc(100% - 30px);
        }
        .container{
            width:100%;
            margin-left: 0%;
        }

    }

</style>