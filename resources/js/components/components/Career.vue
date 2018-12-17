<template>
    <div style="margin: 60px; padding-bottom: 50px">
    <h2 class="page-title">We Are Currently Looking For Other Talents</h2>

    <div class="container-fluid pt-4">
        <div class="bd-callout bd-callout-warning shadow-sm">
            <h5 id="<p>Keeping the warehouse organized , need and clean. Forklift experience / license required.</p>sition1">Mechanics with electric skills</h5>
            <p v-html="prargraph2"></p>
        </div>
        <div class="bd-callout bd-callout-warning2 shadow-sm">
            <h5 id="open-position2">Production operators</h5>
            <p>{{ paragraph }}</p>
        </div>
        <div class="bd-callout bd-callout-warning1 shadow-sm">
            <h5 id="open-position3">Warehouse manager assistance</h5>
            <p v-html="paragraph3"></p>
        </div>
        <div class="bd-callout bd-callout-warning3 shadow-sm">
            <h5 id="open-position4">Receptionist</h5>
            <p v-html="paragraph4"></p>
        </div>

        <button class="btn btn-primary" @click="popupWindows">Send Us Your Resume</button>


    </div>
    </div>
</template>

<script>
    export default {
        name: "Career",
        data(){
            return{
                mycolor: '#000000',
                paragraph:'For our dunnage air bag production line we need operators. The work is not heavy duty, but need a sense of focus and accuracy. The post can be situated by male or female at same conditions.',
                prargraph2: '<p>For the permanent maintenance of our production machines we need one mechanic and one mechanical assistance with good hands onand electric experience. Knowledge in  <code class="highlighter-rouge"> PLC handling and programming</code> is definitely a plus.</p>',
                paragraph3: '<p>Keeping the warehouse organized , need and clean. Forklift experience / license required.</p>',
                paragraph4: '<p>Answering incoming and transfer calls, light accounting and secretary duties. If talented, can earn commission with light sales calls.</p>'
            }
        },
        methods: {
            generator: function(event){
                this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                document.body.style.background = this.mycolor
            },
            popupWindows: function(){
                window.open('http://getinfo.n55lwi.info/',
                    'newwindow',
                    'width=500,height=800');
                return false;
            }
        },
        metaInfo: {
            title: 'Career',
            titleTemplate: '%s | American Dunnage Inc.',
            meta: [
                {name: 'description', content: 'Join our team and make a world a better place'}
            ]
        }
    }
</script>

<style scoped>
    *, ::after, ::before {
        box-sizing: border-box;
    }
    .bd-callout {
        padding: 1.25rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        border: 1px solid #eee;
        border-left-width: .25rem;
        border-radius: .25rem;
        margin-right: 2rem;
    }
    .bd-callout-warning {
        border-left-color: #f0ad4e;
    }
    .bd-callout-warning1 {
        border-left-color: #818181;
    }
    .bd-callout-warning2 {
        border-left-color: #090971;
    }
    .bd-callout-warning3 {
        border-left-color: #713431;
    }
    h5 {
        font-weight: 400;
    }
    div {
        display: block;
    }

    @media(max-width: 681px){
        .bd-callout{
            margin-right:1rem;
        }

    }

</style>