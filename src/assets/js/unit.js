import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var pathip = 'https://www.hyunl.cn';
var userInfo = "";
export default {
    // 解决跨域的 vue 请求
    ajax(url, data) {
        return Vue.http.jsonp("https://www.hyunl.cn/api" + url, { params: data }).then(function (result) {
            return result.body;
        });
    },

    // 引入畅言
    creatcomment() {
        // var appid = 'cyuhpe2Cx';
        // var conf = 'prod_3fd6f1c0d8e70eed59391c85e0f4780a';
        // var width = window.innerWidth || document.documentElement.clientWidth;
        // if (width < 960) {
        //     window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"></script>');
        // } else { var loadJs = function (d, a) { var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement; var b = document.createElement("script"); b.setAttribute("type", "text/javascript"); b.setAttribute("charset", "UTF-8"); b.setAttribute("src", d); if (typeof a === "function") { if (window.attachEvent) { b.onreadystatechange = function () { var e = b.readyState; if (e === "loaded" || e === "complete") { b.onreadystatechange = null; a() } } } else { b.onload = a } } c.appendChild(b) }; loadJs("https://changyan.sohu.com/upload/changyan.js", function () { window.changyan.api.config({ appid: appid, conf: conf }) }); }
    },
    pathip, userInfo
}

