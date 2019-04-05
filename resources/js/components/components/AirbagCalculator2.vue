<template>
    <div class="mt-5 mb-5">
        <div class="container">
            <b-card bg-variant="Default" border-variant="dark">
                <select class="float-right border-secondary"  v-model="cmOrInch" style="display: inline-flex; width: 100px;">
                    <option v-for="option in metricOptions" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <h1 style="font-weight: 600; color: #112133">Airbag Calculator</h1>
                <p>We can help you to find the right dunnage airbag for your cargo security</p>
                <b-row>
                    <b-col>
                        <div inline class="mt-4">
                            <div>
                                <label for="inputGap" v-if="inputGap === null || inputGap === ''"><small class="text-danger">Please put in the gap width between your cargo</small></label>
                                <b-input  class="mb-2 mr-sm-2 mb-sm-0 form_input_width" type="number" v-model="inputGap"  :placeholder="gapInputPlaceholder" id="inputGap" min="0"></b-input>
                            </div>
                            <div class="mt-3">
                                <label for="inputGapHeight" v-if="inputGapHeight === null || inputGapHeight === ''" ><small class="text-danger">Please type in your gap height of your cargo</small></label>
                                <b-input class="mb-2 mr-sm-2 mb-sm-0 form_input_width" type="number" v-model="inputGapHeight" :placeholder="phInputPlaceholder" id="inputGapHeight" min="0"></b-input>
                            </div>
                        </div>
                        <transition name="fade" mode="out-in" duration="1000">
                            <b-form-group  :label="bagWidthSelectLabel"  v-if="showWidthOptions" class="mt-3">
                                <b-form-select class="mt-1 form_input_width"
                                               v-model="selectedBagWidth"
                                               :options="filterUserSelectOptions"
                                               :select-size="3"
                                >
                                </b-form-select>
                            </b-form-group>
                        </transition>
                        <transition name="fade" mode="out-in" duration="1000">
                            <b-form-group  :label="bagHeightSelectLabel"   v-if="showLengthOptions">
                                <b-form-select class="mt-1 form_input_width"
                                               v-model="selectedBagHeight"
                                               :options="filterUserBagLengthOptions"
                                               :select-size="6"
                                >
                                </b-form-select>
                            </b-form-group>
                        </transition>
                        <transition name="fade" mode="out-in" duration="1000">
                            <b-form-group  label="Select Dunnage Airbag Type"   v-if="showAirbagType">
                                <b-form-select class="mt-1 form_input_width"
                                               v-model="selectedBagType"
                                               :options="filterBagTypesOptions"
                                               :select-size="9"
                                >
                                </b-form-select>
                            </b-form-group>
                        </transition>
                    </b-col>
                    <b-col>
                        <div class="row" v-if="showAirbagType">
                            <!--<hr id="hr1">-->
                            <!--<hr id="hr2">-->
                            <!--<svg id="chart">-->
                            <!--<line x1="20" y1="20" x2="20" y2="330"></line>-->
                            <!--</svg>-->
                            <div class="col-sm-6">
                                <img src="./images/polywovenbag.png" class="w-75 ml-lg-5 ml-md-5">
                            </div>
                            <div class="col-sm-6">
                                <img src="./images/kraftdunnagebag.png" class="w-75">
                            </div>
                        </div>
                        <b-jumbotron class="text-center mt-4 mr-3">
                            <div v-bind:class="{ 'airtableResult': isActive === true, 'showValue': isActive === true, 'disabledValue':isActive === false }">{{ selectedBagType + " can withstand force up to" }}</div><br>
                            <div v-bind:class="{ 'airtableFont': isActive === true, 'showValue': isActive === true, 'disabledValue':isActive === false }">{{forceByFillingPressureAnimated + ' ' + kgOrPound }}</div>
                            <div v-bind:class="{ 'showValue': isActive === false, 'disabledValue':isActive === true }">{{ forceByFillingPressure() }}</div>
                        </b-jumbotron>
                    </b-col>
                </b-row>
            </b-card>

        </div>
    </div>
</template>
<script>
    import json from './csvFiles/airbag_size_table.json';
    import { TweenLite } from 'gsap';
    export default {
        name: "AirbagCalculator2",
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
                // placeholderForGapWidthInput: 'GW (inch)',

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

                //airbag table metric selection
                cmOrInch: 'inch',
                kgOrPound: 'lbs',
                metricOptions: [
                    { text: 'cm', value: 'cm' },
                    { text: 'inch', value: 'inch' },
                ],
                bagWidthSelectLabel: 'Select the bag width (inch)',
                bagHeightSelectLabel: 'Select the bag height (inch)',
                gapInputPlaceholder: '6 inch <= Gap Width <= 23 inch',
                phInputPlaceholder: '24 inch <= Gap Height <= 110 inch',
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
                bagWidth:{
                    bagWidthInch:[{text:'24',value:60, disabled: true},{text:'36',value: 90, disabled: true}, {text:'48', value:120, disabled: true},{text:'60',value:150, disabled: true}],
                    bagWidthCm:[{text:'60',value:60, disabled: true},{text:'90',value: 90, disabled: true}, {text:'120', value:120, disabled: true},{text:'150',value:150, disabled: true}],
                },
                bagHeight:{
                    bagHeightInch:[{value:60, text:'24',disabled: true},{value:90,text:'36',disabled: true},{value:120,text:'48',disabled: true},{value:150,text:'60',disabled: true},{value:180,text:'70',disabled: true},{value:210,text:'83',disabled: true},{value:225,text:'89',disabled: true},{value:240,text:'95',disabled: true},{value:260,text:'103',disabled: true},{value:270,text:'107',disabled: true}],
                    bagHeightCm:[{value:60, text:'60',disabled: true},{value:90,text:'90',disabled: true},{value:120,text:'120',disabled: true},{value:150,text:'150',disabled: true},{value:180,text:'180',disabled: true},{value:210,text:'210',disabled: true},{value:225,text:'225',disabled: true},{value:240,text:'240',disabled: true},{value:260,text:'260',disabled: true},{value:270,text:'270',disabled: true}],

                },
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
            //conversion between cm and inch
            'cmOrInch': function (){
                document.getElementById('inputGap').value = '';
                document.getElementById('inputGapHeight').value = '';
                if(this.cmOrInch === "cm"){
                    this.inchToCmFactor = 1;
                    this.kgToPoundFactor = 1;
                    this.kgOrPound = 'kg';
                    this.gapInputPlaceholder= '15 cm < Gap Width <= 60 cm';
                    this.phInputPlaceholder= '60 cm < Gap Height < 300 cm';
                    this.bagWidthSelectLabel = 'Select the bag width (cm)';
                    this.bagHeightSelectLabel = 'Select the bag height (cm)';
                }else if(this.cmOrInch === "inch"){
                    this.inchToCmFactor = 2.54;
                    this.kgToPoundFactor = 2.20462442018;
                    this.kgOrPound = 'lbs';
                    this.gapInputPlaceholder= '6 inch <= Gap Width <= 23 inch ';
                    this.phInputPlaceholder= '24 inch <= Gap Height <= 110 inch';
                    this.bagWidthSelectLabel = 'Select the bag width (inch)';
                    this.bagHeightSelectLabel = 'Select the bag height (inch)';
                }
            },
            'selectedBagWidth': function(){
                this.getSurfaceContactIndex;
                this.bagWidthSelectLabel = 'Select the bag width ' + this.selectedBagWidth + '&nbsp;'+ this.cmOrInch;

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
                this.bagHeightSelectLabel = 'Select the bag height ' +this.selectedBagHeight + '&nbsp;' + this.cmOrInch;
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

                //show the bag bag width conversion between cm an inch
                let bagWithMetric = this.bagWidth['bagWidthInch'];
                if(this.cmOrInch === 'cm'){
                    bagWithMetric = this.bagWidth['bagWidthCm'];
                }else{
                    bagWithMetric = this.bagWidth['bagWidthInch'];

                }
                let inputGapIndex = this.inputGap * this.inchToCmFactor;
                if (inputGapIndex){

                    //reset all data to default
                    let gapTohWidth = [];
                    for(let i=0; i<bagWithMetric.length; i++){
                        bagWithMetric[i].disabled = true;
                    }
                    if(0<=inputGapIndex && inputGapIndex<=15){
                        gapTohWidth.push(60);
                        gapTohWidth.push(90);
                        this.selectedGap = 150;
                    } else if(15<inputGapIndex && inputGapIndex<=20){
                        gapTohWidth.push(60);
                        gapTohWidth.push(90);
                        this.selectedGap = 200;
                    }else if(20<inputGapIndex && inputGapIndex<=30){
                        gapTohWidth.push(90);
                        gapTohWidth.push(120);
                        this.selectedGap = 300;
                    }else if(30<inputGapIndex && inputGapIndex<=40){
                        gapTohWidth.push(90);
                        gapTohWidth.push(120);
                        gapTohWidth.push(150);
                        this.selectedGap = 400;
                    }else if(40<inputGapIndex && inputGapIndex<=50){
                        gapTohWidth.push(120);
                        gapTohWidth.push(150);
                        this.selectedGap = 500;
                    }else if(50<inputGapIndex && inputGapIndex<=60){
                        gapTohWidth.push(150);
                        this.selectedGap = 600;
                    }else{
                        return [{value: '', text: 'Sorry, No Available Bag for Your Gap'}];
                    }

                    for(let a=0; a< gapTohWidth.length; a++){
                        for(let i=0; i<bagWithMetric.length; i++){
                            if(gapTohWidth[a] === bagWithMetric[i].value){
                                bagWithMetric[i].disabled = false;
                            }
                        }
                    }

                    //pre-select the one
                    if(gapTohWidth.length > 2){
                        this.selectedBagWidth = gapTohWidth[1];
                    }else{
                        this.selectedBagWidth = gapTohWidth[0];
                    }

                    return bagWithMetric;
                }else {
                    return bagWithMetric
                }
            },

            filterUserBagLengthOptions (){

                let bagHeightMetric = this.bagHeight['bagHeightInch'];
                let inputBagHeightIndex = this.inputGapHeight * this.inchToCmFactor;
                if(this.cmOrInch === 'cm'){
                    bagHeightMetric = this.bagHeight['bagHeightCm'];
                }else{
                    bagHeightMetric = this.bagHeight['bagHeightInch'];
                }


                if (inputBagHeightIndex){
                    let selectableBagHeight = 0;

                    if(0<=inputBagHeightIndex && inputBagHeightIndex<=90){
                        selectableBagHeight=60;
                    }else if(90<inputBagHeightIndex && inputBagHeightIndex<=120){
                        selectableBagHeight=90;
                    }else if(120<inputBagHeightIndex && inputBagHeightIndex<=150){
                        selectableBagHeight=120;
                    }else if(150<inputBagHeightIndex && inputBagHeightIndex<=180){
                        selectableBagHeight=150;
                    }else if(180<inputBagHeightIndex && inputBagHeightIndex<=210){
                        selectableBagHeight=180;
                    }else if(210<inputBagHeightIndex && inputBagHeightIndex<=225){
                        selectableBagHeight=210;
                    }else if(225<inputBagHeightIndex && inputBagHeightIndex<=240){
                        selectableBagHeight=225;
                    }else if(240<inputBagHeightIndex && inputBagHeightIndex<=260){
                        selectableBagHeight=240;
                    }else if(260<inputBagHeightIndex && inputBagHeightIndex<=270){
                        selectableBagHeight=260;
                    }else if(270< inputBagHeightIndex <= 300){
                        selectableBagHeight=270;
                    }else{
                        return [{value: '', text: 'I do not recommend any bag for that Height'}];
                    }
                    //reset options
                    for(let h=0; h<bagHeightMetric.length; h++){
                        bagHeightMetric[h].disabled = true;
                    }
                    for(let h=0; h<bagHeightMetric.length; h++){
                        if(bagHeightMetric[h].value <= selectableBagHeight){
                            bagHeightMetric[h].disabled = false;
                        }
                    }
                    for(let p=0; p<bagHeightMetric.length; p++){
                        if(bagHeightMetric[p].disabled === false){
                            this.selectedBagHeight = bagHeightMetric[p].value;
                            break;
                        }
                    }
                    // return bagHeightMetric.filter(t => t.value <= selectableBagHeight);
                    return bagHeightMetric;
                }else {
                    return bagHeightMetric
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
        font-size: 3vw;
    }
    .airtableResult{
        font-size: 1.3vw;
    }

    .showValue{
        display: inline;
        text-align: center;
    }
    .disabledValue{
        display: none;
    }
    .form_input_width{
        width: 70%;
    };
    /*vuejs animation for fade in and fade out*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    #hr1 {
        display: block;
        height: 0px;
        border: black;
        border-top: 1px solid #ccc;
        margin: 0.5em 0;
        padding: 0;
    }
    #hr2 {
        background-color: #112133;
        color:#C80000;
        -webkit-transform:rotate(90deg);
        position:absolute;
        width:300px;
        height:1px;
        left:-40px;
        top:180px;
        border:10px;

    }
    svg#chart {
        /*background: lightgray;*/
        position: absolute;
        height: 600px;
    }
    #chart line {stroke: #555555; stroke-width:2}

    .vertical-center {
        margin: 0;
        position: relative;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>