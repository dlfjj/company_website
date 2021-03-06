import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta'




import Homepage from '../components/components/Homepage';
import Contact from '../components/components/Contact';
import Product from '../components/components/Product';
import Login from '../components/components/Login';
import Career from '../components/components/Career';
import Event from '../components/components/Events';
import Kraftbag from '../components/components/Kraftairbag';
import BlogPage from '../components/components/BlogPage';

//
import PPairbag from '../components/components/Ppairbag';
import Inflater from '../components/components/Inflater';
import Containerlashing from '../components/components/Containerlashing';
import Desiccants from '../components/components/Desiccants';
import Barrelsecuring from '../components/components/Barrelsecuring';
import Boltseal from '../components/components/Boltseal';
import AirbagCalculator from '../components/components/AirbagCalculator2';

//
// import About_us from '../components/About_us'
import KraftMoreDetail from '../components/components/KraftMoreDetail';


Vue.use(Router);
Vue.use(Meta);


export default new Router({
    // mode: 'history',
    routes: [
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
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/Product',
            name: 'Product',
            component: Product,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Career',
            name: 'Career',
            component: Career
        },
        {
            path: '/Event',
            name: 'Event',
            component: Event
        },
        {
            path: '/airbagCalculator',
            name: 'airbagCalculator',
            component: AirbagCalculator
        },
        {
            path: '/Blog',
            name: 'Blog',
            component: BlogPage
        },


        //product page
        {
            path: '/Product/kraftbag',
            name: 'Kraftbag',
            component: Kraftbag
        },
        {
            path: '/Product/ppairbag',
            name: 'PPairbag',
            component: PPairbag
        },
        {
            path: '/Product/inflater',
            name: 'Inflater',
            component: Inflater
        },
        {
            path: '/Product/containerlashing',
            name: 'Containerlashing',
            component: Containerlashing
        },
        {
            path: '/Product/desiccants',
            name: 'Desiccants',
            component: Desiccants
        },
        {
            path: '/Product/boltseal',
            name: 'Boltseal',
            component: Boltseal
        },
        {
            path: '/Product/barrelsecuring',
            name: 'Barrelsecuring',
            component: Barrelsecuring
        },
        {
            path: '/Product/kraftbag/moredetail',
            name:'KraftMoreDetail',
            component: KraftMoreDetail
        }



    ]
});
