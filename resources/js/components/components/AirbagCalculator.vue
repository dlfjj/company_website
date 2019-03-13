<template>
    <div style="margin: 100px">
            <div class="container">
                <table class="table table-bordered text-center shadow">
                    <thead class="thead-light bg-danger text-uppercase">
                    <tr>
                        <th colspan="7" style="font-size: larger; font-weight: 600; color: #112133">Airbag Calculator</th>
                    </tr>
                    <tr>
                        <th rowspan="2" style="width: 15%; align:center;"><span style="vertical-align: center;margin-bottom: 20px;">Gap between pallets</span></th>
                        <th rowspan="2" style="width: 16%;">Pallet Height</th>
                        <!--<th colspan="2" style="width: 20%">Bag size</th>-->
                        <th>Width</th>
                        <th>Length</th>
                        <th scope="col" rowspan="2" style="width: 22%;">Airbag Types</th>
                        <!--<th scope="col" rowspan="2" style="width: 11%;">Surface contact</th>-->
                        <th scope="col" rowspan="2" style="width: 17%;">Force by Max filling pressure</th>
                    </tr>
                    <!--<tr>-->
                    <!--<th>Width (cm)</th>-->
                    <!--<th>Length (cm)</th>-->
                    <!--</tr>-->
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <!-- gap width determine the bag width, this formula is marked at oemserv catalgue 2017 page 5-->
                            <b-form-input type="number" v-model="inputGap" :placeholder="placeholderForGapWidthInput"></b-form-input>

                        </td>
                        <td>
                            <b-form-input type="number" v-model="inputGapHeight" placeholder="PH (inch)"></b-form-input>
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
                                <!--<v-select :options="filterUserSelectOptions" v-model="selectedBagWidth" label="text" v-if="showWidthOptions"></v-select>-->
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
                                               :options="filterBagTypesOptions"
                                               id="bagWidthSelect"
                                               v-if="showAirbagType"
                                >
                                </b-form-select>
                            </transition>
                        </td>
                        <!--<td><span class="airtableFont">{{ surface_contact }} </span></td>-->
                        <!--<td><span class="airtableFont">{{ surfaceContactAnimated }}</span></td>-->
                        <!--binding style with condition-->
                        <td>
                            <span v-bind:class="{ 'airtableFont': isActive === true, 'showValue': isActive === true, 'disabledValue':isActive === false }">{{ forceByFillingPressureAnimated + ' lbs' }}</span>
                            <span v-bind:class="{ 'showValue': isActive === false, 'disabledValue':isActive === true }">{{ forceByFillingPressure() }}</span>
                        </td>
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
        </div>
</template>

<script>
    import json from './csvFiles/airbag_size_table.json';
    import { TweenLite } from 'gsap';
    export default {
        name: "AirbagCalculator",
        data(){
            return{

                //transition for airtable
                showWidthOptions:false,
                showLengthOptions:false,
                showAirbagType:false,
                animateForceByFillingPressure:0,
                animateForceNumber: 0,
                kgToPoundFactor: 2.20462442018,
                inchToCmFactor: 2.54,
                placeholderForGapWidthInput: 'GW (inch)',

                // carousel section
                slide: 0,
                carouselTime: 0,
                attachFontSize: false,
                loaded: false,

                //airbag calculator table
                //user selected value
                // animal_name: '',
                // selectedAnimalType:0,
                // animalType:[{text:'Bass',value:60},{text:'Catfish',value: 90}, {text:'Jersey cattle', value:120, disabled: true},{text:'Guernsey cattle',value:150}],

                surface_contact: 0,
                forceByMaxFillingPressure: 0,
                test:0,
                selectedBagWidth: 0,
                selectedBagHeight: 0,
                inputGap: null,
                selectedGap:0,
                inputGapHeight: null,
                givenGap:0,
                selectedBagType: '',
                selectedPalletHeight: 0,
                // palletHeight:[{text:'PH > 60',value:60},{text:'PH > 90',value: 90}, {text:'PH > 120', value:120},{text:'PH > 150',value:150}],
                bagWidth:[{text:'24',value:60},{text:'36',value: 90}, {text:'48', value:120},{text:'60',value:150}],
                bagHeight:[{value:60, text:'24'},{value:90,text:'36'},{value:120,text:'48'},{value:150,text:'60'},{value:180,text:'70'},{value:210,text:'83'},{value:225,text:'89'},{value:240,text:'95'},{value:260,text:'103'},{value:270,text:'107'}],
                formulaGap: [{value:150, text:'150'},{value:200, text:'200'},{value:300,text:'300'},{value:400, text:'400'},{value:500, text:'500'},{value:600, text:'600'}],
                bagType:[{ value: '', text: 'Select Bag Type'},{value:'PAPER 1 Ply SAVFER',text:'PAPER 1 Ply SAVFER'},{value:'Paper 2 Ply SAVFER',text:'Paper 2 Ply SAVFER'},
                    {value:'Paper 1 Ply Standard',text:'Paper 1 Ply Standard'},{value:'Paper 2 Ply Standard', text:'Paper 2 Ply Standard'},
                    {value:'Paper 4 Ply Heavy Duty',text:'Paper 4 Ply Heavy Duty'},{value:'Paper 6 Ply Super Heavy',text:'Paper 6 Ply Super Heavy'},
                    {value:'Paper 8 Ply',text:'Paper 8 Ply'},{value:'PP SAVFER medium',text:'PP SAVFER medium'},{value:'PP90 Standard',text:'PP90 Standard'},
                    {value:'PP150 Heavy Duty',text:'PP150 Heavy Duty'},{value:'PP200 Super Heavy',text:'PP200 Super Heavy'},{value:'PP 250 GSM',text:'PP 250 GSM'}],
                airbagTable : json,
                isActive: false,
                //airbag calculator table
            }
        },
        created: function(){
            // document.getElementsByTagName("OPTION").style.color = "blue";
            // console.log(list);
        },
        watch:{
            'selectedBagWidth': function(){
                this.getSurfaceContactIndex;
            },
            'selectedGap': function(){
                this.getSurfaceContactIndex;
            },
            'selectedBagType': function(){
                // this.getSurfaceContactIndex;
                this.filterBagTypesOptions;
            },
            'inputGap':function(){
                if(this.inputGap * this.inchToCmFactor>14){
                    this.showWidthOptions=true;
                }else{
                    this.showWidthOptions=false;
                    // this.showAirbagType = false;
                }
                // this.alterOptionColor();
                //change option color
                // console.log(optionElements);
            },
            'inputGapHeight':function(){
                if(this.inputGapHeight * this.inchToCmFactor>20){
                    this.showLengthOptions = true;
                }else{
                    this.showLengthOptions = false;
                    // this.showAirbagType = false;
                }
            },
            // 'selectedBagHeight': function(){
            //  this.getSurfaceContactIndex;
            // },
            'surface_contact':function(){
                this.forceByFillingPressure();
            },
            'selectedBagHeight':function(){
                this.getSurfaceContactIndex;
                if(this.selectedBagHeight){
                    this.showAirbagType = true;
                }else{
                    this.showAirbagType = false;
                }
            },
            'forceByMaxFillingPressure':function(newValue){
                // animated number presentation when it change value
                TweenLite.to(this.$data, 0.5, { animateForceByFillingPressure: newValue });
            }

        },
        methods:{
            // alterOptionColor(){
            //     let optionElements =document.getElementsByTagName('li');
            //     console.log(optionElements.length);
            //     for (let i = 0; i< optionElements.length; i++) {
            //         optionElements[i].style.color= "black";
            //     }
            // },
            forceByFillingPressure(){
                let f = 0;
                f = this.selectedBagWidth * this.selectedBagHeight * this.surface_contact * this.getMaxFillingPressure * 2 / 10 * this.kgToPoundFactor;
                if (isNaN(f)){
                    this.isActive = false;
                    return "Please Choose Another Value";
                }else {
                    this.isActive = true;
                    //animated number presentation when it change value
                    // let n = (Math.round(f * 10) / 10);
                    // return this.test = TweenLite.to(this.$data, 0.5, { animateSurfaceContact: n });
                    // return TweenLite.to(this.$data, 0.5, { animateForceNumber: (Math.round(f * 10) / 10).toString() });
                    this.forceByMaxFillingPressure = Math.round(f * 10) / 10;
                    return Math.round(f * 10) / 10 + " lbs" ;
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
                if (this.inputGap * this.inchToCmFactor){
                    let gapTohWidth = 0;
                    if(35.56<=this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=150){
                        gapTohWidth=60;
                        this.selectedGap = 150;
                    } else if(151<=this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=300){
                        gapTohWidth=60;
                        this.selectedGap = 300;
                    }else if(301<=this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=400){
                        gapTohWidth=90;
                        this.selectedGap = 400;
                    }else if(401<=this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=500){
                        gapTohWidth=120;
                        this.selectedGap = 500;
                    }else if(501<=this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=600){
                        gapTohWidth=150;
                        this.selectedGap = 600;
                    }
                    return this.bagWidth.filter(t => t.value >= gapTohWidth);
                }else {
                    return this.bagWidth
                }
            },
            // filterUserSelectOptions (){
            //     if (this.inputGap * this.inchToCmFactor){
            //         let gapToWidth = 0;
            //         // console.log( Math.round((this.inputGap * this.inchToCmFactor)/10)*10*10 );
            //         if(30<this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=40){
            //             gapToWidth=60;
            //             this.selectedGap = 300;
            //         }else if(14<=this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=30){
            //             gapToWidth=60;
            //             this.selectedGap = 150;
            //         }else if(40<this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=50){
            //             gapToWidth=90;
            //             this.selectedGap = 400;
            //         }else if(50<this.inputGap * this.inchToCmFactor && this.inputGap * this.inchToCmFactor<=60){
            //             gapToWidth=120;
            //             this.selectedGap = 500;
            //         }else if(60<this.inputGap * this.inchToCmFactor){
            //             gapToWidth=150;
            //             this.selectedGap = 600;
            //         }
            //         console.log(this.selectedGap);
            //         return this.bagWidth.filter(t => t.value <= gapToWidth);
            //     }else {
            //         return this.bagWidth
            //     }
            // },
            filterUserBagLengthOptions (){
                if (this.inputGapHeight * this.inchToCmFactor){
                    let selectableBagHeight = 0;
                    if(0<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=89){
                        selectableBagHeight=60;
                    }else if(90<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=119){
                        selectableBagHeight=90;
                    }else if(120<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=149){
                        selectableBagHeight=120;
                    }else if(150<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=179){
                        selectableBagHeight=150;
                    }else if(180<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=219){
                        selectableBagHeight=180;
                    }else if(210<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=224){
                        selectableBagHeight=210;
                    }else if(225<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=239){
                        selectableBagHeight=225;
                    }else if(240<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=259){
                        selectableBagHeight=240;
                    }else if(260<=this.inputGapHeight * this.inchToCmFactor && this.inputGapHeight * this.inchToCmFactor<=269){
                        selectableBagHeight=260;
                    }else if(this.inputGapHeight * this.inchToCmFactor>=270){
                        selectableBagHeight=270;
                    }
                    return this.bagHeight.filter(t => t.value <= selectableBagHeight);
                }else {
                    return this.bagHeight
                }
            },
            filterBagTypesOptions (){
                let bagTypeHaveValue = [];
                for(let j =0; j< this.bagType.length; j++) {
                    for (let i = 0; i < this.airbagTable.length; i++) {
                        let n = this.bagType[j].value.localeCompare(this.airbagTable[i]['Bag type'].trimRight());
                        if (n === 0 && this.airbagTable[i]['Bags Width'] === this.selectedBagWidth && this.surface_contact === this.airbagTable[i]['Contact surface area']) {
                            bagTypeHaveValue.push(this.bagType[j].value);
                            // this.bagType.filter(t => t.value !== this.airbagTable[i]['Bag type'].trimRight());
                        }
                    }
                }
                // console.log(bagTypeHaveValue.length);
                // return this.bagType.filter(function(e){return this.indexOf(e) < 0;},bagTypeHaveValue);
                if(bagTypeHaveValue.length !== 0){
                    //exclude the unavailable value on the chart
                    return this.bagType.filter(t => bagTypeHaveValue.includes(t.value));
                }else{
                    return [{value: '', text: 'No Dunnage Airbag Available'}];
                }
            },
            forceByFillingPressureAnimated: function() {
                return this.animateForceByFillingPressure.toFixed(1);
            },
        },
    }
</script>

<style scoped>

    .dunnage-airbag{
        text-align: left;
        padding: 8.5rem;
        background-color: #fdffff;
    }

    .airtableFont{
        font-size: 1.6vw;
    }

    .showValue{
        display: inline;
    }
    .disabledValue{
        display: none;
    }

    /*vuejs animation for fade in and fade out*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>