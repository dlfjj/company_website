import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta'




import Homepage from '../components/components/Homepage';
// import Contact from '../components/Contact';
// import Product from '../components/Product';
// import Login from '../components/Login';
// import Career from '../components/Career';
// import Event from '../components/Events';
// import Kraftbag from '../components/products_detail_pages/Kraftairbag';
//
// import PPairbag from '../components/products_detail_pages/Ppairbag';
// import Inflater from '../components/products_detail_pages/Inflater';
// import Containerlashing from '../components/products_detail_pages/Containerlashing';
// import Desiccants from '../components/products_detail_pages/Desiccants';
// import Barrelsecuring from '../components/products_detail_pages/Barrelsecuring';
// import Boltseal from '../components/products_detail_pages/Boltseal';
//
// import About_us from '../components/About_us'

Vue.use(Router);
Vue.use(Meta);


export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: HomePage
        // },
        {
            path: '/',
            name: 'Home',
            component: Homepage,
            props: { loaded: true }
        },
        // {
        //     path: '/About_us',
        //     name: 'About_us',
        //     component: About_us
        // },
        // {
        //     path: '/Contact',
        //     name: 'Contact',
        //     component: Contact
        // },
        // {
        //     path: '/Product',
        //     name: 'Product',
        //     component: Product,
        // },
        // {
        //     path: '/Login',
        //     name: 'Login',
        //     component: Login
        // },
        // {
        //     path: '/Career',
        //     name: 'Career',
        //     component: Career
        // },
        // {
        //     path: '/Event',
        //     name: 'Event',
        //     component: Event
        // },


        //product page
        // {
        //     path: '/Product/kraftbag',
        //     name: 'Kraftbag',
        //     component: Kraftbag
        // },
        // {
        //     path: '/Product/ppairbag',
        //     name: 'PPairbag',
        //     component: PPairbag
        // },
        // {
        //     path: '/Product/inflater',
        //     name: 'Inflater',
        //     component: Inflater
        // },
        // {
        //     path: '/Product/containerlashing',
        //     name: 'Containerlashing',
        //     component: Containerlashing
        // },
        // {
        //     path: '/Product/desiccants',
        //     name: 'Desiccants',
        //     component: Desiccants
        // },
        // {
        //     path: '/Product/boltseal',
        //     name: 'Boltseal',
        //     component: Boltseal
        // },
        // {
        //     path: '/Product/barrelsecuring',
        //     name: 'Barrelsecuring',
        //     component: Barrelsecuring
        // },




    ]
});
