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
                    <div  style="padding:0 10px;">
                        <div id="SOHUCS"></div>
                    </div>
                    
                    <div class="panel-body">
                        <div class="panel-body" style="margin: 0 3%;">
                            <div class="mb-20">
                            
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
        this.unit.creatcomment();
    },
    watch: {

        //监听相同路由下参数变化的时候，从而实现异步刷新
        '$route'() {
            this.creatfun();
            this.unit.creatcomment();
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
    img{
        max-width: 100%;
    }
</style>
