import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import './iview/dist/styles/iview.css'
import "./deps/jquery.min.js"
import "underscore"
import "jsonform"
import './deps/jquery.json-editor.min.js'
import "./deps/opt/bootstrap.css"
import "./deps/opt/bootstrap-wysihtml5.css"
import "./deps/opt/spectrum.css"
import lib from "./js/loadpage"


Vue.config.productionTip = false;
Vue.use(iView);
Vue.mixin(lib);


new Vue({
  render: h => h(App),
}).$mount('#app')
