
import Router from 'vue-router'

import ViewHome from './page/home/home.vue'
import usercenter from './page/user/UserView.vue'
import login from './page/login/login.vue'
import register from './page/login/register.vue'
import pcenter from './page/pcenter/personal.vue'
import personalInfo from './page/pcenter/personalInfo.vue'
import modifySendCode from './page/login/modifySendCode.vue'
import modifyPwd from './page/login/modifyPwd.vue'
import aboutUs from './page/pcenter/aboutUs.vue'
import contactUs from './page/pcenter/contactUs.vue'
import disclaimer from './page/pcenter/disclaimer.vue'
import loginDisclaimer from './page/pcenter/loginDisclaimer.vue'
import modifyInfo from './page/login/modifyInfo.vue'
import fastLogin from './page/login/fastLogin.vue'
import webview from './page/webview.vue'
import main from './page/home/main.vue'
import inspection from './page/merchant/inspection.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', name: "main", component: main },
        {
            path: '/home',
            component: ViewHome,
            children: [
            ]
        },
        { path: '/my', component: usercenter },
        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/pcenter', component: pcenter },
        { path: '/modifySendCode', component: modifySendCode },
        { path: '/modifyPwd', component: modifyPwd },
        { path: '/aboutUs', component: aboutUs },
        { path: '/contactUs', component: contactUs },
        { path: '/disclaimer', component: disclaimer },
        { path: '/loginDisclaimer', component: loginDisclaimer },
        { path: '/modifyInfo', component: modifyInfo },
        { path: '/personalInfo', component: personalInfo },
        { path: '/fastLogin', component: fastLogin },
        { path: '/webview', component: webview },
        { path: '/inspection', component: inspection },
    ]
})