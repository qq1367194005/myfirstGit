<template>
    <div style="height:45px">
        <div class="navbar navbar-fixed-top">
            <div class="container cl">
                <router-link to="/" class="navbar-logo hidden-xs">
                    <img class="logo" src="img/logo.png" alt="小七博客" />
                </router-link>
                <router-link to="/" class="logo navbar-logo-m visible-xs">小七博客</router-link>
                <a aria-hidden="false" class="nav-toggle Hui-iconfont visible-xs" @click="showother" href="javascript:void(0);" >&#xe667;</a>
                <nav :class="[{'show':ismobel },'navbar-nav nav nav-collapse w_menu']" role="navigation">
                    <ul class="cl">
                        <li> <router-link to="/">主页</router-link> </li>
                        <li> <router-link to="/aboutme">关于我</router-link> </li>
                        <li> <router-link to="/gossip">闲言碎语</router-link> </li>
                    </ul>
                </nav>
                <nav class="navbar-nav navbar-userbar hidden-xs hidden-sm " style="top: 0;">
                    <ul class="cl">
                        <li class="userInfo dropDown dropDown_hover">
                                <!--<a href="javascript:;" ><img class="avatar radius" src="img/40.jpg" alt="丶似浅 "></a>
                                <ul class="dropDown-menu menu radius box-shadow">
                                    <li><a href="/app/loginOut">退出</a></li>
                                </ul>-->
                                <router-link to="/login" v-if="nickname == null">
                                    <img class="avatar size-S" src="img/qq.jpg" title="登入">登入
                                </router-link>
                                <router-link to="/" v-else>
                                    {{nickname}}
                                </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ismobel:false,
            nickname:sessionStorage.getItem("username")
        }
    },
    mounted:function(){
        
    },
    methods: {
        showother:function(){
            this.ismobel = !this.ismobel;
        },
    },
}
</script>

<style Lang="css">
@import "/plugin/h-ui/css/H-ui.min.css";
@import "/plugin/Hui-iconfont/1.0.8/iconfont.min.css";
@import "/plugin/pifu/pifu.css";
@import "/css/common.css";

.router-link-exact-active{
    color: #000!important;
}
.nav-collapse ul li:hover{
    -webkit-animation: rightThenLeft 0.5s linear;
}
@-webkit-keyframes rightThenLeft { 
   0% {margin-left: 0;}
   50%{margin-left:5px;}
   100%{margin-left:0;}
}
.show{
    display:inline-block!important;
}
</style>
