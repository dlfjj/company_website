<template>

    <main class="mt-6 pt-4" style="padding-bottom: 50px">

        <a href="#/Product"><b-button class="btn-white shadow-none border border-dark" style="margin-left: 1.7%"><i class="far fa-arrow-alt-circle-left fa-2x"></i></b-button></a>

        <div class="container dark-grey-text mt-5">

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-6 mb-4">

                    <div class="image-container border border-light rounded shadow">

                    <img src="./images/kraftdunnagebag.png" class="img-fluid paperbag-image" alt="kraft paper airbag">
                    </div>
                </div>
                <div class="col-md-6 mb-4">

                    <!--Content-->
                    <div class="p-4">

                        <div class="mb-3">
                            <a>
                                <span class="badge purple mr-1">Made in USA</span>
                            </a>
                            <a>
                                <span class="badge blue mr-1">New</span>
                            </a>
                            <a>
                                <span class="badge red mr-1">Bestseller</span>
                            </a>
                        </div>

                        <p class="lead">
                            <span class="mr-1">
                                <h2>Kraft Paper Dunnage Air Bags</h2>
                            </span>
                        </p>

                        <p class="lead font-weight-bold">Description</p>

                        <p>
                            Kraft paper air bags are rigid, solid and strong due to the multi-layer technique.
                            The dunnage air bags will be set into gaps or voids between the cargo and then carefully filled with compressed air.
                        </p>
                        <a href="#/Product/kraftbag/moredetail">
                            <b-button variant="primary">More Detail</b-button>
                        </a>
                    </div>
                </div>
            </div>

            <hr class="between-sections" style="margin:40px">


            <h4><strong>Product Categories and Specifications</strong></h4>

            <b-card no-body class="border border-light">
                <b-tabs
                        v-model="tabIndex" vertical card no-nav-style active-nav-item-class="font-weight-bold text-uppercase "
                        nav-wrapper-class="border border-bottom-2"
                        content-class="mt-3"
                >
                    <b-tab title="1ply - Extra Light" active :title-link-class="linkClass(0)" v-on:click="stop()">

                        <div class="row">
                            <div class="col-sm-9">
                                <h4>1-ply &middot; Kraft Paper Extra Light Dunnage Air Bag</h4>
                                <p>
                                    Our new installed, semi-automatic manufacturing lines allow us to manufacture this kraft paper bags in the most efficient way.
                                </p>
                                <p>
                                    The performance of our dunnage bags strictly comply with
                                    all current safety standards for air bags. 1-ply Extra Light Dunnage Airbag is a great and inexpensive alternative to our 2 ply paper dunnage air bag.
                                </p>
                                <p>
                                    We deliver all air bags with our own developed MegaFlow&reg; fast filling valve.
                                </p>
                                <b-container class="pt-3">
                                    <b-row>
                                        <b-table hover small :items="specificationsExtraLight" :fields="tableTitle"></b-table>
                                        <b-container>
                                            <div class="small float-right">&#42; {{ remark }} </div>
                                            <br>
                                            <div class="small float-right mb-3">&#42; {{ remark1 }} </div>
                                        </b-container>
                                        <b-table hover small :items="packingExtraLight" :fields="tableTitle2"></b-table>
                                    </b-row>
                                </b-container>
                            </div>
                            <div class="col-sm-3">
                                <div class="row text-center text-lg-left">
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/kraft_airbag5.png" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet5.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/pallet_box.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet6.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet7.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-12">
                                        <a class="d-block h-100">
                                            <img class="img-fluid" src="./images/made_in_usa_logo.png" alt="">
                                        </a>
                                    </div>
                                </div>
                                <b-row>
                                    <ul style="list-style-type:circle;">
                                        <li>ISO 9001:2008 certified</li>
                                        <li>SGS and ROHS test report</li>
                                        <li>TÜV certificate</li>
                                        <li>100% recyclable</li>
                                        <li>Very user friendly</li>
                                        <li>MegaFlow&reg; fast filling valve</li>
                                        <li>Many times re-usable</li>
                                        <li>For dry climatic conditions</li>
                                    </ul>
                                </b-row>
                                <b-row>
                                    <a href="https://shop.oemserv.com/category/163/8" target="_blank">
                                        <button type="button" class="btn btn-danger shadow-none mt-2 ml-4">Products Detail</button>
                                    </a>
                                </b-row>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="1ply - Light"  :title-link-class="linkClass(0)" v-on:click="stop()">
                        <div class="row">
                            <div class="col-sm-9">
                                <h4>1-ply &middot; Kraft Paper Light Dunnage Air Bag</h4>
                                <p>
                                    Our new installed, semi-automatic manufacturing lines allow us to manufacture this kraft paper bags in the most efficient way
                                </p>
                                <p>
                                    The performance of our dunnage bags strictly comply with
                                    all current safety standards for air bags. 1 ply kraft dunnage airbags is
                                    good and inexpensive alternative to our Level-1 certified paper dunnage air bags.
                                </p>
                                <p>
                                    We deliver all air bags with our own developed MegaFlow&reg; fast filling valve.
                                </p>
                                <b-container class="pt-3">
                                    <b-row>
                                        <b-table hover small :items="specificationsLight" :fields="tableTitle"></b-table>
                                        <b-container>
                                            <div class="small float-right">&#42; {{ remark }} </div>
                                            <br>
                                            <div class="small float-right mb-3">&#42; {{ remark1 }} </div>
                                        </b-container>
                                        <b-table hover small :items="packingLight" :fields="tableTitle2"></b-table>
                                    </b-row>
                                </b-container>
                            </div>
                            <div class="col-sm-3">
                                <div class="row text-center text-lg-left">
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/kraft_airbag5.png" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet5.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/pallet_box.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet6.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet7.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-12">
                                        <a class="d-block h-100">
                                            <img class="img-fluid" src="./images/made_in_usa_logo.png" alt="">
                                        </a>
                                    </div>
                                </div>
                                <b-row>
                                    <ul style="list-style-type:circle;">
                                        <li>ISO 9001:2008 certified</li>
                                        <li>SGS and ROHS test report</li>
                                        <li>TÜV certificate</li>
                                        <li>100% recyclable</li>
                                        <li>Very user friendly</li>
                                        <li>MegaFlow&reg; fast filling valve</li>
                                        <li>Many times re-usable</li>
                                        <li>For dry climatic conditions</li>
                                    </ul>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <a href="https://shop.oemserv.com/category/163/8" target="_blank">
                                            <button type="button" class="btn btn-danger float-lg-right shadow-none mt-4">Products Detail</button>
                                        </a>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-tab >
                    <b-tab title="2ply - Medium" :title-link-class="linkClass(0)" v-on:click="stop()">
                        <div class="row">
                            <div class="col-sm-9">
                                <h4>2-ply &middot; Kraft Paper Medium Dunnage Air Bag</h4>
                                <!--<p><strong>Max. filling press = 13 kPa / 0,13 bar / 1,9 P.S.I.</strong></p>-->
                                <!--<p>-->
                                <!--The light duty kraft paper bag is our most economic paper dunnage air bag.-->
                                <!--Customers that have tried and tested this bag have never been disappointed and are happy with the bang for their buck.-->
                                <!--Light duty air bag types bags can be used for light and medium weights, and they can absorb most of the forces encountered during transportation.-->
                                <!--</p>-->
                                <p>
                                    Our new installed, semi-automatic manufacturing lines allow us to manufacture this kraft paper bags in the most efficient way.
                                </p>
                                <p>
                                    The performance of our dunnage bags well comply with
                                    all current safety standards for air bags. 2 ply kraft paper medium dunnage air bag is
                                    good and inexpensive alternative to our Level-1 certified paper dunnage air bags.
                                </p>
                                <p>
                                    We deliver all air bags with our own developed MegaFlow&reg; fast filling valve.
                                </p>
                                <b-container class="pt-3">
                                    <b-row>
                                        <b-table hover small :items="specificationsMedium" :fields="tableTitle"></b-table>
                                        <b-container>
                                            <div class="small float-right">&#42; {{ remark }} </div>
                                            <br>
                                            <div class="small float-right mb-3">&#42; {{ remark1 }} </div>
                                        </b-container>
                                        <b-table hover small :items="packingMedium" :fields="tableTitle2"></b-table>
                                    </b-row>
                                </b-container>
                            </div>
                            <div class="col-sm-3">
                                <div class="row text-center text-lg-left">
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/kraft_airbag5.png" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet5.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/pallet_box.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet6.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet7.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-12">
                                        <a class="d-block h-100">
                                            <img class="img-fluid" src="./images/made_in_usa_logo.png" alt="">
                                        </a>
                                    </div>
                                </div>
                                <b-row>
                                    <ul style="list-style-type:circle;">
                                        <li>ISO 9001:2008 certified</li>
                                        <li>SGS and ROHS test report</li>
                                        <li>TÜV certificate</li>
                                        <li>100% recyclable</li>
                                        <li>Very user friendly</li>
                                        <li>MegaFlow&reg; fast filling valve</li>
                                        <li>Many times re-usable</li>
                                        <li>For dry climatic conditions</li>
                                    </ul>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <a href="https://shop.oemserv.com/category/163/8" target="_blank">
                                            <button type="button" class="btn btn-danger float-lg-right shadow-none mt-4">Products Detail</button>
                                        </a>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="2ply - Level 1" :title-link-class="linkClass(0)" v-on:click="stop()">
                        <div class="row">
                            <div class="col-sm-9">
                                <h4>2-ply &middot; Kraft Paper Level 1 Dunnage Air Bags</h4>
                                <p>
                                    Our new installed, semi-automatic manufacturing lines allow us to manufacture this kraft paper bags in the most efficient way.
                                </p>
                                <p>
                                    The performance of our dunnage bags strictly comply with
                                    all current safety standards for air bags. Kraft Paper Level 1 dunnage air bag, which is
                                    reliable and safe, offers a good value to to its cost. Try our AAR Level-1 certified paper dunnage air bags.
                                </p>
                                <p>
                                    We deliver all air bags with our own developed MegaFlow&reg; fast filling valve.
                                </p>
                                <b-container class="pt-3">
                                    <b-row>
                                        <b-table hover small :items="specifications2PlyLevel1" :fields="tableTitle"></b-table>
                                        <b-container>
                                            <div class="small float-right">&#42; {{ remark }} </div>
                                            <br>
                                            <div class="small float-right mb-3">&#42; {{ remark1 }} </div>
                                        </b-container>
                                        <b-table hover small :items="packing2PlyLevel1" :fields="tableTitle2"></b-table>
                                    </b-row>
                                </b-container>
                            </div>

                            <div class="col-sm-3">
                                <div class="row text-center text-lg-left">
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/kraft_airbag5.png" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet5.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/pallet_box.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet6.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-6">
                                        <a class="d-block mb-4 h-100 zoom">
                                            <img class="img-fluid img-thumbnail" src="./images/airbag_between_pallet7.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="col-12">
                                        <a class="d-block h-100">
                                            <img class="img-fluid" src="./images/made_in_usa_logo.png" alt="">
                                        </a>
                                    </div>
                                </div>
                                <b-row>
                                    <ul style="list-style-type:circle;">
                                        <li>ISO 9001:2008 certified</li>
                                        <li>SGS and ROHS test report</li>
                                        <li>TÜV certificate</li>
                                        <li>100% recyclable</li>
                                        <li>Very user friendly</li>
                                        <li>MegaFlow&reg; fast filling valve</li>
                                        <li>Many times re-usable</li>
                                        <li>For dry climatic conditions</li>
                                    </ul>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <a href="https://shop.oemserv.com/category/164/8" target="_blank">
                                            <button type="button" class="btn btn-danger float-lg-right shadow-none mt-4">Products Detail</button>
                                        </a>
                                    </b-col>
                                </b-row>
                            </div>

                        </div>
                    </b-tab>
                    <b-tab title="4ply - Heavy" :title-link-class="linkClass(0)" v-on:click="stop()">
                        <div class="row">
                            <div class="col-sm-3" style="margin-left:10px">
                                <img class="block" alt="" src="./images/4ply_round.png" style="height: 130.346px;">
                            </div>
                            <div class="col">
                                <h4>
                                    4 ply Heavy Duty Air Bag Type
                                </h4>
                                <p><strong>Max. filling press : 40 kPa / 0,4 bar / 5,8 P.S.I.</strong></p>
                                <p>
                                    For heavy loads and strong forces during transportation we suggest the heavy-duty PP bags.
                                    The 4 layers of kraft paper material are very resistant against outside forces.
                                    The features match with international safety standards for sea, road, and railway transportation.
                                </p>
                                <a  href="http://shop.oemserv.com/category/19/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="6ply - Super heavy" :title-link-class="linkClass(0)" v-on:click="stop()">
                        <div class="row">
                            <div class="col-sm-3">
                                <img class="block" alt="" src="./images/6ply_round.png" style="height: 130.346px;">
                            </div>

                            <div class="col">
                                <h4>Super Heavy Duty Kraft Paper Air Bags</h4>
                                <p><strong>Max. filling press : 60 kPa / 0,6 bar / 8,7 P.S.I.</strong></p>
                                <p>
                                    This is your cargos ´bodyguard´ when it comes to extremely heavy loads and forces.
                                    These bags are made for special applications and they absorb almost all forces encountered during transportation.
                                </p>
                                <a href="http://shop.oemserv.com/category/21/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>


            <!--<h4><strong>Product Categories</strong></h4>-->

            <!--<b-card no-body class="container1 shadow-none border-dark">-->
                <!--<b-tabs pills card vertical >-->
                    <!--<b-tab title="1ply - Non AAR" active>-->
                        <!--<div class="row">-->
                            <!--<div class="col-sm-2">-->
                                <!--<img class="block" alt="" src="./images/kraft_airbag5.png" style="height: 112.346px;">-->
                            <!--</div>-->
                            <!--<div class="col">-->
                                <!--<h4>Light duty Kraft paper Dunnage Air Bag</h4>-->
                                <!--<p><strong>Max. filling press = 13 kPa / 0,13 bar / 1,9 P.S.I.</strong></p>-->
                                <!--<p>-->
                                    <!--The light duty kraft paper bag is our most economic paper dunnage air bag.-->
                                    <!--Customers that have tried and tested this bag have never been disappointed and are happy with the bang for their buck.-->
                                    <!--Light duty air bag types bags can be used for light and medium weights, and they can absorb most of the forces encountered during transportation.-->
                                <!--</p>-->
                                <!--<a href="http://shop.oemserv.com/category/110/8" target="_blank">-->
                                    <!--<button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button>-->
                                <!--</a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</b-tab>-->
                    <!--<b-tab title="2ply - AAR level 1">-->
                        <!--<div class="row">-->
                            <!--<div class="col-sm-2">-->
                                <!--<img class="block" alt="" src="./images/kraftdunnagebag.png" style="height: 130.346px;">-->
                            <!--</div>-->

                            <!--<div class="col">-->
                                <!--<h4>Level 1 medium standard kraft paper air bags</h4>-->
                                <!--<p><strong>Max. filling press = 20 kPa / 0,20 bar / 2,9 P.S.I.</strong></p>-->
                                <!--<p>-->
                                    <!--The medium standard kraft paper bag is our best bang for your buck dunnage air bag.-->
                                    <!--Customers that have tried and tested this bag have never been disappointed.-->
                                    <!--Medium standard bags can be used for light and medium heavy weights and they can absorb most of the forces encountered during transportation.-->
                                <!--</p>-->
                                <!--<a href="http://shop.oemserv.com/category/110/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>-->

                            <!--</div>-->
                        <!--</div>-->
                    <!--</b-tab>-->
                    <!--<b-tab title="4ply - Heavy">-->
                        <!--<div class="row">-->
                            <!--<div class="col-sm-3" style="margin-left:10px">-->
                                <!--<img class="block" alt="" src="./images/4ply_round.png" style="height: 130.346px;">-->
                            <!--</div>-->
                            <!--<div class="col">-->
                                <!--<h4>-->
                                    <!--4 ply Heavy Duty Air Bag Type-->
                                <!--</h4>-->
                                <!--<p><strong>Max. filling press = 40 kPa / 0,4 bar / 5,8 P.S.I.</strong></p>-->
                                <!--<p>-->
                                    <!--For heavy loads and strong forces during transportation we suggest the heavy-duty PP bags.-->
                                    <!--The 4 layers of kraft paper material are very resistant against outside forces.-->
                                    <!--The features match with international safety standards for sea, road, and railway transportation.-->
                                <!--</p>-->
                                <!--<a  href="http://shop.oemserv.com/category/19/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>-->

                            <!--</div>-->
                        <!--</div>-->
                    <!--</b-tab>-->
                    <!--<b-tab title="6ply - Super heavy">-->
                        <!--<div class="row">-->
                            <!--<div class="col-sm-3">-->
                                <!--<img class="block" alt="" src="./images/6ply_round.png" style="height: 130.346px;">-->
                            <!--</div>-->

                            <!--<div class="col">-->
                                <!--<h4>Super Heavy Duty Kraft paper Air Bags</h4>-->
                                <!--<p><strong>Max. filling press = 60 kPa / 0,6 bar / 8,7 P.S.I.</strong></p>-->
                                <!--<p>-->
                                    <!--This is your cargos ´bodyguard´ when it comes to extremely heavy loads and forces.-->
                                    <!--These bags are made for special applications and they absorb almost all forces encountered during transportation.-->
                                <!--</p>-->
                                    <!--<a href="http://shop.oemserv.com/category/21/8" target="_blank"><button type="button" class="btn btn-danger float-lg-right shadow-none">Products Detail</button></a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</b-tab>-->
                <!--</b-tabs>-->
            <!--</b-card>-->


            <!--Grid row-->
            <h4 style="margin-top:70px"><strong>Product Detail</strong></h4>


            <b-container class="border border-dark rounded container2 shadow-none">
                <b-row class="text">
                    <b-col>
                        <h5><i class="fab fa-product-hunt" style="margin-right: 2%"></i>Dunnage Bag Basics</h5>
                        <p>The basic construction of any dunnage air bag is the combination of two major parts.
                            The <strong>IN-LINER</strong> ( also called bladder or balloon ) with actually hold the compressed air tight at high pressure levels,
                            The <strong>OUT-LINER</strong> ( the cover ) which gives the shape, the stability and the enormous strength to the dunnage air bag.
                            The strength of an kraft paper air bag depend on the <strong>OUT-LINER's</strong> material thickness and number of layers.
                        </p>
                    </b-col>
                    <b-col>
                        <h5><i class="fab fa-elementor" style="margin-right: 2%"></i>Material</h5>
                        <p>All our dunnage air bags <strong>IN-LINER</strong> are made of a special extruded poly-ethylene (PE-mixture) with the guarantee of a  perfect tightness even under high pressure.
                            For the OUT-LINER we use layers of special extensible kraft paper with a very high TEA to match with all applications.
                            Only kraft paper from best quality and tear force will be used for the air bag production process and that guarantee the best possible air bag performance.
                        </p>
                    </b-col>
                    <b-col col="3">
                        <h5><img src="./images/airflow2.png" width="18%" style="margin-right: 2%; margin-bottom:8px;">Valve Systems</h5>
                        <p>We developed and produce our own valve system, the <strong>MEGAFLOW</strong> fast filling valve system.
                            The <strong>MEGAFLOW</strong> valve allows you to fill up air bags much faster with our special designed air filling devices.
                            The special designed inflation tool is using the so called 'Venturi' effect and saves up to 50 % of  inflation time depending on the type of air compressor used.
                            Almost any 1 inch inflation tool can be used with our <strong>MEGAFLOW</strong> valves.
                        </p>
                    </b-col>
                    <b-col col="4">
                        <h5><i class="fas fa-screwdriver" style="margin-right: 2%"></i>Usage</h5>
                        <p>
                            To use place the bag in the gaps between your cargo and start inflating using compressed air.
                            You can easily recognise when the bag is filled enough. Then it sits tight and unmovable in the vault.
                            Do not over fill the bags to avoid damage to your cargo. Now your cargo is effectively secured during the transportation.
                            When unloading, just open the valve to deflate.
                            You can use American dunnage air bags several times.</p>
                    </b-col>
                    <b-col col="3">
                        <h5><i class="fas fa-pencil-ruler" style="margin-right: 2%"></i>Air bag size</h5>
                        <span class="font-weight-bold">Size of gap  v/s  air bag</span>
                        <p class="bag-size">
                            > 12 inch gap = 24 inch bag
                            > 16 inch gap = 36 inch bag
                            > 20 inch gap = 48 inch bag
                            > 24 inch gap = 60 inch bag
                        </p>

                        <p>
                            Using the right size is a key point to a good secured transportation.
                            The width of the bag is most important and depend on the size on the gap to fill. The length of an air bag can freely be adjusted to the size of the cargo.</p>
                        <p></p>
                    </b-col>
                </b-row>
            </b-container>


        </div>
    </main>
    
</template>

<script>
    export default {
        name: "Kraft_Bag",
        metaInfo: {
            title: 'Kraft Paper Dunnage Airbag',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'The Best Kraft Paper Airbag to Secure your cargo container'}
            ]
        },
        data(){
            return {
                food: { fish: 'It is great!', carrot: 'It is healthy!' },
                tabIndex: 0,
                interval: null,
                widthAdditonalInfo: 'production of 48 inch start 2nd half of 2019',
                lengthAdditionalInfo: '123',
                tableTitle:{
                    name:{
                        label: 'SPECIFICATION',
                        sortable: false
                    },
                    detail:{
                        label: 'DETAIL',
                        sortable: false
                    }
                },
                remark:'production of 48 inch start 2nd half of 2019',
                remark1:'length can be customize between 36 and 88',
                tableTitle2:{
                    name:{
                        label: 'PACKING',
                        sortable: false
                    },
                    detail:{
                        label: 'DETAIL',
                        sortable: false
                    }
                },
                specificationsExtraLight:[
                    {name:"Inliner material ( bladder )", detail:"new technology extruded 80μ ( 3.15 mil ) Polyethylene ( PE )"},
                    {name:"Outliner material ( cover )", detail:"1 layer of extensionable long fibre kraft paper"},
                    {name:"Max. filling pressure", detail:"13 kPa / 0.13 bar / 1.9 P.S.I"},
                    {name:"Burst pressure", detail:"26 kPa / 0.326 bar / 3.8 P.S.I"},
                    {name:"Safety factor", detail:"2 ( European standard )"},
                    {name:"Available width", detail:"36 inch - 48 inch"},
                    {name:"Available length", detail:"36 · 48 · 60 · 71 · 83 · 88 inch"},
                ],
                packingExtraLight:[
                    {name:"Pallet box size standard Stack in container", detail:"40 x 48 x 38 inch (42 cubic ft)"},
                    {name:"Bags per carton, net and gross weight", detail:"depend on actual size"}
                ],
                specificationsLight: [
                    {name:"Inliner material ( bladder )", detail:"new technology extruded 105μ ( 4.15 mil ) Polyethylene ( PE )"},
                    {name:"Outliner material ( cover )", detail:"1 layer of extensionable long fibre kraft paper"},
                    {name:"Max. filling pressure", detail:"15 kPa / 0.15 bar / 2.2 P.S.I"},
                    {name:"Burst pressure", detail:"38 kPa / 0.38 bar / 5.5 P.S.I"},
                    {name:"Safety factor", detail:"2.5 ( European standard )"},
                    {name:"Available width", detail:"36 inch - 48 inch"},
                    {name:"Available length", detail:"36 · 48 · 60 · 71 · 83 · 88 inch"},
                ],
                packingLight:[
                    {name:"Pallet box size standard Stack in container", detail:"40 x 48 x 38 inch (42 cubic ft)"},
                    {name:"Bags per carton, net and gross weight", detail:"depend on actual size"}
                ],
                specificationsMedium:[
                    {name:"Inliner material ( bladder )", detail:"new technology extruded 80μ ( 3.15 mil ) Polyethylene"},
                    {name:"Outliner material ( cover )", detail:"2 layers of extensionable long fibre kraft paper"},
                    {name:"Max. filling pressure", detail:"18 kPa / 0.18 bar / 2.6 P.S.I"},
                    {name:"Burst pressure", detail:"45 kPa / 0.45 bar / 6.5 P.S.I"},
                    {name:"Safety factor", detail:"2.5 ( European standard )"},
                    {name:"Available width", detail:"36 inch - 48 inch"},
                    {name:"Available length", detail:"36 · 48 · 60 · 71 · 83 · 88 inch"},
                ],
                packingMedium:[
                    {name:"Pallet box size standard Stack in container", detail:"40 x 48 x 38 inch (42 cubic ft)"},
                    {name:"Bags per carton, net and gross weight", detail:"depend on actual size"}
                ],
                specifications2PlyLevel1:[
                    {name:"Inliner material ( bladder )", detail:"new technology extruded 105μ Polyethylene ( PE )"},
                    {name:"Outliner material ( cover )", detail:"2 layers of extensionable long fibre kraft paper"},
                    {name:"Max. filling pressure", detail:"20 kPa / 0.20 bar / 2.9 P.S.I"},
                    {name:"Burst pressure", detail:"60 kPa / 0.60 bar / 8.7 P.S.I."},
                    {name:"Safety factor", detail:"3 ( US / European standard )"},
                    {name:"Available width", detail:"36 inch - 48 inch"},
                    {name:"Available length", detail:"36 · 48 · 60 · 71 · 83 · 88 inch"},
                ],
                packing2PlyLevel1:[
                    {name:"Pallet box size standard Stack in container", detail:"40 x 48 x 38 inch (42 cubic ft)"},
                    {name:"Bags per carton, net and gross weight", detail:"depend on actual size"}
                ],
            }
        },
        methods:{
            stop:function(){
                clearInterval(this.interval);
            },
            linkClass(idx) {

            },
            tabAutoChange: function () {
                // tab auto changing
                let t = this;

                this.interval = setInterval(function(){
                    if (t.tabIndex < 6) {
                        t.tabIndex = t.tabIndex + 1;
                    }
                    if(t.tabIndex === 6){
                        t.tabIndex = 0;
                    }
                }, 5000);
            },
            isHealthy(string) {
                return /healthy/i.test(string);
            },
            words(string) {
                return string.split(/\s+/);
            },
        },
        computed:{
            //change part of the string in object
            changeTableInfo: function(){
                this.specificationsExtraLight.forEach((e, i) => {
                    if (e.name === 'Available width') {
                        this.specificationsExtraLight[i].detail = "36 inch - 48 inch this is awesome";
                    }
                });
            }
        },
        watch:{
            changeStyle:function(){

            }
        },
        mounted(){
            this.tabAutoChange();
        }
    }
</script>

<style scoped>
    .container2{
        padding: 20px 20px;
    }
    .text{
        padding: 10px 10px 30px 30px;
    }
    h5{
        font-weight: bolder;
    }
    .bag-size{
        font-size:13px;
        font-weight: bold;
    }
    p{
        font-weight: 300;
    }
    ul{
        font-size:13px;
    }
    .paperbag-image{
        padding:30px;
        width: 60%;
        margin-left: 20%;
    }
    @media screen and (min-width: 800px){
        .zoom{
            transition: transform .2s;
        }
        .zoom:hover{
            position: relative;
            z-index: 100;
            transform: scale(4);
        }
    }
    @media(max-width: 1080px){
        .text{
            padding: 10px;
        }
    }
</style>