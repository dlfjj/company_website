<template>

    <div style="margin: 40px; padding-bottom: 50px">
        <div class="title-box">
            <h2 class="mt0">{{ title }}</h2>
            <p>{{ paragraph }}</p>
        </div>

        <hr class="between-sections" style="margin:30px">

        <div class="pt-5 pb-5 text-center">

                <b-button-group size="sm" >
                    <a v-bind:href="oemservLoginlink" target="_blank">
                        <b-button variant="primary" class="rounded-0">Login Here</b-button>
                    </a>
                    <a  @click="popupWindow">
                        <b-button v-b-popover.hover.top="'If you are a new customer please contact us for the webshop'" variant="primary" class="rounded-0">Register</b-button>
                    </a>
                </b-button-group>
        </div>
        <div>
            <img class="border border-light shadow-sm" src="./images/screen_shot_webshop.jpg" alt="oemserv webshop screenshot">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        metaInfo: {
            title: 'Login',
            titleTemplate: '%s | American Dunnage Inc',
            meta: [
                {name: 'description', content: 'Become our customer and check out our latest product price'}
            ]
        },
        data() {
            return{
                title: 'Webshop Entry',
                paragraph: 'Welcome to our online information system. For our old customer, you can check our latest price and special offer.',
                oemservLoginlink: 'http://shop.oemserv.com/auth/login/8',
            }
        },
        methods:{
            popupWindow: function(){
                window.open('http://getinfo.n55lwi.info/',
                    'newwindow',
                    'width=500,height=800');
                return false;
            }
        }
    }
</script>

<style scoped>


    img{
        display:block;
        margin:auto;
    }


@media(max-width: 1080px){
    .containe2{
        padding-left:0px;
        background-color: black;
    }
    img{
        width:100%;
        height: 100%;
    }

}

</style>