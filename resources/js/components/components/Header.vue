<template>
    <b-container style="background-color: #042337" fluid>
        <b-row class="row-eq-height">
            <b-col :sm="colSize1">
                <div class="logo overflow-hidden d-none d-sm-block">
                    <img src="./images/usa_flag_poster.png" alt="american dunnage logo" class="img-fluid float-right p-lg-3 p-md-4 pt-sm-3">
                </div>
            </b-col>
            <b-col :sm="colSize2">
                <b-row class="justify-content-center">
                    <b-col md="auto">
                        <b-row>
                            <a class="d-block d-sm-none col-3">
                                <img src="./images/usa_flag_poster.png" alt="american dunnage logo" class="img-fluid float-right pt-2 " style="width:65%">
                            </a>
                            <div class="logo_title" data-aos="fade-left">American Dunnage Inc.</div>
                            <div class="d-block d-sm-none col-3">
                                <img src="./images/5starlogo_origin2.png" alt="5 star logo" class="img-fluid float-left pt-2 pb-2" style="width:40%">
                            </div>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <nav class="nav mb-3 text-center">
                            <router-link to="/" tag="li" class="nav-item w-25" exact><a class="nav-link border-3 border-bottom border-top border-left py-1">Home</a></router-link>
                            <router-link to="/Product" tag="li" class="nav-item w-25"><a class="nav-link border-bottom border-top py-1">Product</a></router-link>
                            <router-link to="/Contact" tag="li" class="nav-item w-25"><a class="nav-link border-bottom border-top py-1">Contact</a></router-link>
                            <router-link to="/Login" tag="li" class="nav-item w-25"><a class="nav-link border-bottom border-top border-right py-1">Login</a></router-link>
                        </nav>
                    </b-col>
                </b-row>
            </b-col>
            <b-col :sm="colSize1">
                <div class="logo2 overflow-hidden d-none d-sm-block" >
                    <img src="./images/5starlogo_origin2.png" alt="5 star logo" class="img-fluid float-left five_star_lgo p-lg-2 p-md-3 mt-md-2 pt-sm-2 p-xl-0 mt-xl-3">
                </div>
            </b-col>
        </b-row>
    </b-container>


</template>

<script>
    export default {
        name: "Top",
        data(){
            return{
                navbarwidth: 650,
                logotitlewidth: 100,
                colSize1 :3,
                colSize2 : 6
            }
        },
        methods:{
            resizeGrid(event) {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth < 2097){
                    this.colSize1 = 3;
                    this.colSize2 = 6;
                }else if(this.windowWidth >=2097){
                    this.colSize1 = 4;
                    this.colSize2 = 4;
                }
            },
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('resize', this.resizeGrid);
                this.resizeGrid()
            })

        },
    }
</script>

<style scoped>
    li.router-link-active a {
        color: black;
        background-color: #ffffff;
    }

    nav li:hover{
        color: palevioletred;
        background-color: #192b71;
    }


    .logo_title{
        color:white;
        font-size: 4.3vw;
        font-weight: 600;
        font-family: Arial;
        text-align: center;
        /*padding-top: 2px;*/
    }

    .nav-link{
        color:white;
        font-size: larger;
    }
    .logo2 img{
        width: 35%;

    }


    @media only screen and (min-width: 1408px){
        nav {
            /*padding-left: 20%;*/
            /*padding-right: 5%;*/
            width: 42.5rem;
            margin: 0 auto;
        }
        .logo_title{
            font-size:3.87rem;
        }
        .logo2 img{
            width: 120px;

        }

    }

    @media only screen and (min-width: 1281px) and (max-width:1380px){
        nav {
            /*padding-left: 20%;*/
            /*padding-right: 5%;*/
            width: 35rem;
            margin: 0 auto;
        }

        .logo_title{
            font-size: 50px;
        }
        .nav-link{
            font-size:15px;
        }
        .logo img{
            width: 70%;
            padding-bottom: 10px;

        }
        .logo2 img{
            width: 35%;

        }

    }

    @media only screen and (min-width: 1153px) and (max-width:1280px){

        nav {
            /*padding-left: 20%;*/
            /*padding-right: 5%;*/
            /*width: 38rem;*/
            margin: 0 auto;
        }

        /*.logo_title{*/
            /*font-size: 28px;*/
        /*}*/
        .nav-link{
            font-size:20px;
        }
        .logo img{
            width: 80%;
            padding-bottom: 10px;

        }
        .logo2 img{
            width: 41%;
        }
    }

    @media only screen and (min-width: 881px) and (max-width:1152px){
        .logo2 img{
            width: 55%;
        }
    }


    @media(max-width:880px){
        .logo_title{
            /*font-size: 4vw;*/
        }
        .logo img{
            width: 70%;

        }
        .logo2 img{
            width: 35%;
        }

        .nav-link{
            font-size:13px;
        }

    }

    @media(max-width:780px){
        .logo_title{
            padding-left:30px;
            font-size: 4vw;
        }
        .logo img{
            width: 55%;

        }
        .logo2 img{
            width: 39%;

        }
        .nav-link{
            font-size:10px;
        }

    }

    @media(max-width:680px){
        .logo_title{
            padding-bottom: 10px;
            padding-top: 7px;
            padding-left:11px;
        }

    }


</style>