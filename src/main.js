// import 'babel-polyfill'
import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
// import { mockXHR } from './mock/index'
// if (process.env.NODE_ENV === 'development') {
//     mockXHR()
// }
import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Collapse,
    CollapseItem,
    ColorPicker,
    Container,
    Carousel,
    CarouselItem,
    Header,
    Aside,
    Main,
    Footer,
    Timeline,
    TimelineItem,
    Link,
    Divider,
    Image,
    Backtop,
    PageHeader,
    Scrollbar,
    Loading,
    MessageBox,
    Message,
    Notification,
} from 'element-ui';

Vue.prototype.$ELEMENT = {
    size: Cookies.get('size') || 'medium', // set element-ui default size
};

Vue.use(Scrollbar);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(ColorPicker);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Backtop);
Vue.use(PageHeader);

const { directive: loadingDirective, service: loadingService } = Loading
const msgbox                                                   = MessageBox
const { alert, confirm, prompt }                               = msgbox
Vue.use(loadingDirective)

Vue.prototype.$loading = loadingService
Vue.prototype.$msgbox  = msgbox
Vue.prototype.$alert   = alert
Vue.prototype.$confirm = confirm
Vue.prototype.$prompt  = prompt
Vue.prototype.$notify  = Notification
Vue.prototype.$message = Message

import 'element-ui/lib/theme-chalk/index.css'
// import 'core/assets/samples.css'
// import 'src/assets/iconfont/iconfont.css'
// //引入新增字体图标库
// import 'src/assets/font2/iconfont.css'

import App from './App'
import store from './store'
import router from './router'

// import './permission' // permission control
//import './utils/error-log' // error log


import isEqual from "lodash/isEqual"
import cloneDeep from "lodash/cloneDeep"
import lodashSet from "lodash/set"
import lodashGet from "lodash/get"
import lodashSortBy from "lodash/sortBy"

import { error, info } from "@/utils/util"
// import { parseTime } from "@/utils"



/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// register global utility filters
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

const whiteList = ['/login', '/404', '/401']

// tags
// 寻找子菜单的父类
function findMenuParent(tag) {
    const tagCurrent = []
    // const menu = store.getters.menu
    tagCurrent.push(tag)
    return tagCurrent
}

// router.afterEach(() => {
//     setTimeout(() => {
//         const tag    = store.getters.tag
//         // setTitle(tag.label)
//         const parent = findMenuParent(tag)
//         store.commit('tags/SET_TAG_CURRENT', parent)
//         store.commit("menu/SET_MENU_INDEX", parent[0].value)
//     }, 0)
// })

// router.beforeEach(async (to, from, next) => {
//
//     if (to.path === "/404") {
//         setTimeout(async () => {
//             await router.replace(from.path)
//         }, 0)
//     }
//     const value = to.query.src ? to.query.src : to.path
//     const label = to.query.name ? to.query.name : to.name
//     const name  = to.meta.title
//
//     to.meta.from = from
//
//     // 尝试获取到当前tag的name
//     const tagTitle = store.getters.currentRoutes[to.path]
//
//     if (name) {
//         document.title = `${tagTitle && tagTitle.name || name} - ${settings.title}`
//     }
//     if (whiteList.indexOf(value) === -1) {
//         let name = store.getters.currentRoutes[value] && store.getters.currentRoutes[value].name || name
//         name     = name || to.meta.title
//
//         if (label) store.commit('tags/ADD_TAG', {
//             label: label,
//             value: value,
//             query: to.query,
//             name: name,
//             noCache: to.meta.noCache, // 是否缓存
//             from: from.path,
//         })
//     }
//     next()
// })


Vue.prototype.oget = lodashGet;

Vue.prototype.dset       = function (object, key, value) {
    let keyPathArray = key.split(".");
    let t            = object;
    let i            = 1;
    for (let key of keyPathArray) {
        Vue.set(t, key, keyPathArray.length == i ? value : (t[key] ? t[key] : {}));
        t = t[key];
        i++;
    }
};
Vue.prototype.oset       = lodashSet;
Vue.prototype.info       = info
Vue.prototype.error      = error
Vue.prototype.$isEqual   = isEqual
Vue.prototype.$cloneDeep = cloneDeep
Vue.prototype.$sortBy    = lodashSortBy




function Uuid() {
    this.sequence = 1000
}

Uuid.prototype.s = function () {
    this.sequence++
    return this.sequence
}

let uuid = new Uuid()

Vue.prototype.$uniqueId = function () {
    return uuid.s()
}

Vue.prototype.debug = function (message) {
    if (!this.debugMode) return
    return this.$notify.error({
        title: '调试信息',
        message: message,
        position: 'bottom-right',
        duration: 0,
    });
}

Vue.prototype.$log = function (log) {
    if (typeof (log) === "string") {
        log = { message: log }
    }
    // this.$store.commit("errorLog/ADD_ERROR_LOG", {
    //     ...log,
    //     timestamp: parseTime(new Date(), null),
    //     type: log.type || "info",
    //     data: log.data || {},
    // })
}

Vue.prototype.debugMode = localStorage.getItem("developernotasgoodasadog") === "yes"

Vue.mixin({
    data() {
        return {
            __deactivated__: false,
        }
    },
    methods: {
        isCreated() {
            return this.__deactivated__
        },
    },
    deactivated() {
        this.__deactivated__ = true
    },
    created: function () {
        try {
            if (this.$vnode.tag.indexOf("keep-alive") > -1) {
                // console.log(this)
                this.$store.commit('tags/UpdateKeepAliveNodeRef', this)
            }
        } catch (e) {

        }
    },
})

Vue.prototype.$eventHub = new Vue()

const root = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    data() {
        return {
            titleInterval: null,
        }
    },
    mounted() {},
})

Vue.config.performance = true

if (navigator.userAgent.match(/Trident\//) || navigator.userAgent.match(/Edge\//)) {
    document.body.addEventListener("mousewheel", function (evt) {
        evt.preventDefault();
        var wd  = evt.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });

}

export { root as rootInstance }
