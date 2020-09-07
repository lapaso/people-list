import Vue from "vue";
import Router from "vue-router";
import Details from "./views/Details"
import CreateEmail from "./views/CreateEmail"
import Home from "./views/Home"
import EnterMessage from "./views/EnterMessage"
import ConfirmEmail from "./views/ConfirmEmail"
Vue.use(Router);

export default new Router({
    routes: [

        { path: '/details/:peopleId', name: 'details', component: Details },
        { path: "/createEmail", component: CreateEmail },
        { path: "/enterMessage", component: EnterMessage },
        { path: "/confirmEmail", component: ConfirmEmail },
        { path: "*", component: Home }
    ]
});