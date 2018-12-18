<template>
    <footer class="site-footer">
        <div class="d-flex justify-content-center pl-sm-4">
            <div class="row" id="footer-container">
                <div class="col-md-auto col-sm-6 col-xs-12 fbox">
                    <h6>Paper Dunnage Air Bags</h6>
                    <ul class="footer-nav">
                        <li v-for="link in paperdunnagelinks" v-html="link.level"></li>
                    </ul>
                </div>
                <div class="col-md-auto col-sm-6 col-xs-12 fbox">
                    <h6>Polywoven Dunnage Air Bags</h6>
                    <ul class="footer-nav">
                        <li v-for="link in polywovenlinks" v-html="link.level"></li>
                    </ul>
                </div>
                <div class="col-md-auto col-sm-6 col-xs-12 fbox">
                    <h6>Cargo Securing Products</h6>
                    <ul class="footer-nav">
                        <li v-for="link in cargoproducts" v-html="link.product"></li>
                    </ul>
                </div>
                <div class="col-md-auto col-sm-6 col-xs-12 fbox">
                    <h6>More Information</h6>
                    <ul class="footer-nav">
                        <li v-for="link in moreinfopages" v-html="link.page"></li>
                    </ul>
                </div>
                <div class="col-md-auto col-sm-6 col-xs-12 fbox">
                    <h6>Contact Info</h6>
                    <p v-html="contactemail"></p>
                    <p v-html="contactphone"></p>
                    <ul class="list-inline">
                        <li v-for="link in socialchannels" v-html="link.socialmedia"></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="view pt-2">
            <div class="mask flex-center black shadow"></div>
            <section class="border border-light shadow-sm" style="background-color: #ffffff">
                <div class="clearfix d-flex container">
                    <div class="row align-items-center">
                        <div class="col-sm-4">
                            <img src="./images/American_dunnage_logo.png" alt="american dunnage logo" class="img-fluid reference ad-logo-adjustment ">
                        </div>
                        <div class="col-sm-3 ">
                            <a v-bind:href="oemservlink" target="_blank">
                                <img src="./images/oemservlogo.png"  class="img-fluid reference oemser_logo  " alt="oemserv logo">
                            </a>
                        </div>
                        <div class="col-sm-3 ">
                            <img src="./images/cargosecuringexperts.png" class="img-fluid reference securing_logo " alt="cargo securing experts logo">
                        </div>
                        <div class="col-sm-2">
                            <a v-bind:href="redbacklinke" target="_blank">
                                <img src="./images/redback_logo.jpg" class="img-fluid reference redback_logo " alt="redback logo">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="copyright">
            <div class="container">
                <div class="row ">
                    <div class="mx-auto">
                        <p class="pull-center">&copy; {{new Date().getFullYear()}} Copyright: American Dunnage Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "bottom",
        data(){
            return{
                paperdunnagelinks:[
                    {level:'<a href="#/Product/kraftbag" title="kraftbag level 0">Kraft Paper Air Bags - Level 0</a>'},
                    {level:'<a href="#/Product/kraftbag" title="kraftbag level 1">Kraft Paper Air Bags - Level 1</a>'},
                    {level:'<a href="#/Product/kraftbag" title="kraftbag level 3/4" class="disabled text-black-50">Kraft Paper Air Bags - Level 3/4</a>'},
                    {level:'<a href="#/Product/kraftbag" title="kraftbag level 5" class="disabled text-black-50">Kraft Paper Air Bags - Level 5</a>'},
                    {level:'<a href="#/Product/inflater" title="inflater">Inflation Tools</a>'},
                ],
                polywovenlinks:[
                    {level:'<a href="#/Product/ppairbag" title="pparibag level 0">Woven PP Air Bags - Level 0</a>'},
                    {level:'<a href="#/Product/ppairbag"  title="ppairbag level 1">Woven PP Air Bags - Level 1</a>'},
                    {level:'<a href="#/Product/ppairbag"  title="ppairbag level 3/4" class="disabled text-black-50">Woven PP Air Bags - Level 3/4</a>'},
                    {level:'<a href="#/Product/ppairbag"  title="ppairbag level 5" class="disabled text-black-50">Woven PP Air Bags - Level 5</a>'},
                    {level:'<a href="#/Product/inflater"  title="inflater">Inflation Tools</a>'}
                ],
                cargoproducts:[
                    {product: '<a href="#/Product/boltseal" title="container seal">Seals - indicative & security</a>'},
                    {product: '<a href="#/Product/containerlashing" title="container lashing page">Container Lashing</a>'},
                    {product: '<a href="#/Product/barrelsecuring" title="barrel securing system">Barrel Secure</a>'},
                    {product: '<a href="#/Product/desiccants" title="container desiccants">Desiccants</a>'}
                ],
                moreinfopages:[
                    {page: '<a href="#/Contact" title="Electronic Catalogue" class="disabled text-black-50">Electronic Catalogue</a>'},
                    {page: '<a href="http://shop.oemserv.com/category/160/8" target="_blank" title="Web shop page link">Web Shop</a>'},
                    {page: '<a href="#/Contact" title="Location link">Location</a>'},
                    {page: '<a href="#/Event" title="Event Page Link">Events</a>'},
                    {page: '<a href="#/Career" title="Career Page link">Career</a>'},
                ],
                contactemail:'<a href="mailto:sales@americandunnage.com"><i class="far fa-envelope mr-2 pt-2"></i><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>sales@americandunnage.com</a>',
                contactphone:'<a href="tel:+17753996770<"><i class="fas fa-phone mr-2"></i>+1 (775)-399-6770</a>',
                socialchannels:[
                    {socialmedia:'<a href="https://www.facebook.com/AmericanDunnageBagManufacturer/" target="_blank" alt="american dunnage facebook page"><span><i class="fab fa-facebook"></i></span></a>'},
                    {socialmedia:'<a href="https://www.youtube.com/channel/UCJwfPgzpPWE3OtJ6xbCQVyg" target="_blank" alt="OEMSERV youtube channel"><span><i class="fab fa-youtube"></i></span></a>'},
                    {socialmedia:'<a href="https://www.linkedin.com/company/american-dunnage-inc/" target="_blank" alt="Company Linkedin Page"><span><i class="fab fa-linkedin"></i></span></a>'},
                ],
                oemservlink:'http://www.oemserv.com/',
                redbacklinke: 'https://www.redback.com/'
            }
        }
    }
</script>

<style scoped>
    @import './css/style.css';
    @import './css/mdb.css';

    /*#footer-container{*/
        /*margin-left: 10%;*/
    /*}*/

    .logo-background-color{
        background: #0d0d0d;
    }

    .logo_title{
        color:white;
        padding-right: 10px;
    }
    .logo img{
        height: 40px;
        width: 80px;
        /*background-color: powderblue;*/
    }
    .americand_dunnage_alignment{
        float:left;
        clear: none;
    }

    @media(max-width: 830px){
        #footer-container{
            margin-left: 14%;
        }
    }


    .ad-logo-adjustment{
        height:auto;
    }
    .redback_logo{
        /*margin-left:10px;*/
        height: auto;
        padding:0px;
        background-color: black;


    }
    .oemser_logo{
        /*margin-left:20px;*/
        /*padding-left:6px;*/
        height: auto;
        padding-top:5px;
        margin-left:30px;
        background-color: black;

    }
    .securing_logo{
        /*margin-left:20px;*/
        /*padding-left:0px;*/
        height: auto;
        padding-top:5px;
        padding-bottom:4px;
        padding-right:12px;
        margin-left:25px;
        background-color: black;

    }

    @media(max-width:680px){
        .reference{
            /*padding-top: 0.5rem;*/
            /*padding-bottom:0.2rem;*/

        }

        .ad-logo-adjustment{
            padding:0px;
            margin-bottom: 0px;

        }
        .redback_logo{
            margin-left:85px;
            padding-left:10px;
            margin-bottom: 8px;
            padding-top:5px;
        }
        .oemser_logo{
            margin-left:60px;
            padding-left:10px;
            margin-bottom: 4px;
        }
        .securing_logo{
            margin-left:85px;
            padding-left:10px;

        }

    }





</style>