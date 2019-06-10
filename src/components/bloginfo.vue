<template>
    <div class="container">
        <div class="row w_main_row">
            <div class="col-lg-9 col-md-9 w_main_left pt-20">
                <div class="panel panel-default  mb-20">
                    <div class="panel-body pt-10 pb-10">
                        <h2 class="c_titile">{{bloginfo.titletext}}</h2>
                        <p class="box_c"><span class="d_time">发布时间：{{bloginfo.createtime}}</span><span>编辑：小七</span><span>阅读（{{bloginfo.looknumnumber}}）</span></p>
                        <div v-html="bloginfo.bloginfocontent">
                            
                        </div>
                        <div class="nextinfo">
                            <p class="last">上一篇：<a href="#"></a></p>
                            <p class="next">下一篇：<a href="#"></a></p>
                        </div>
                    </div>
                </div>
                <!-- 评论区 -->
                <div class="panel panel-default  mb-20">
                    <div class="tab-category">
                        <a href=""><strong>评论区</strong></a>
                    </div>
                    <div class="panel-body">
                        <div class="panel-body" style="margin: 0 3%;">
                            <div class="mb-20">
                                <!-- <ul class="commentList">
                                    <li class="item cl"> <a href="#"><i class="avatar size-L radius"><img alt="" src="http://qzapp.qlogo.cn/qzapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100"></i></a>
                                        <div class="comment-main">
                                            <header class="comment-header">
                                                <div class="comment-meta"><a class="comment-author" href="#">老王</a>
                                                    <time title="2014年8月31日 下午3:20" datetime="2014-08-31T03:54:20" class="f-r">2014-8-31 15:20</time>
                                                </div>
                                            </header>
                                            <div class="comment-body">
                                                <p> 是的</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item cl"> <a href="#"><i class="avatar size-L radius"><img alt="" src="http://qzapp.qlogo.cn/qzapp/101388738/696C8A17B3383B88804BA92ECBAA5D81/100"></i></a>
                                        <div class="comment-main">
                                            <header class="comment-header">
                                                <div class="comment-meta"><a class="comment-author" href="#">老王</a>
                                                    <time title="2014年8月31日 下午3:20" datetime="2014-08-31T03:54:20" class="f-r">2014-8-31 15:20</time>
                                                </div>
                                            </header>
                                            <div class="comment-body">
                                                <p> +1</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul> -->
                            </div>
                            <div class="line"></div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3">
                <rightshow />
            </div>
        </div>
    </div>
</template>

<script>
import rightshow from './rightshow.vue'
export default {
    name:'bloginfo',
    data(){
        return{
            bloginfo:{
                titletext:'',
                createtime:'',
                looknumnumber:'',
                bloginfocontent:'',
            }
        }
    },
    components: {
        rightshow
    },
    mounted:function(){
        this.creatfun();
    },
    watch: {

        //监听相同路由下参数变化的时候，从而实现异步刷新
        '$route'() {
            this.creatfun();
        },
    },
    methods:{
        creatfun:function(){
            this.unit.ajax("/Getbloglist/getinfobyId?id="+this.$route.params.id,{page:1,limit:10}).then((data) => {
                window.console.log(data);
                this.bloginfo = data.data[0];
            })
        }
    },
   
}
</script>

<style>

</style>
