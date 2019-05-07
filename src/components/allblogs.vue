<template>
    <div class="container">
        <div class="col-sm-9 col-md-9">
            <div class="swiperbanner">
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <!-- <swiper-slide><img src="/img/temp/banner1.jpg" alt=""></swiper-slide> -->
                    <swiper-slide><img src="img/temp/banner8.png" alt=""></swiper-slide>
                    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                </swiper>
            </div>
            <bloglist />
        </div>
        <div class="col-sm-3 col-md-3">
            <rightshow />
        </div>
        
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import bloglist from './bloglist.vue'
import rightshow from './rightshow.vue'
require('swiper/dist/css/swiper.css');
export default {
    name: 'allblogs',
    components: {
        swiper,
        swiperSlide,    
        bloglist,
        rightshow
    },

    data() {
        return {
            swiperOption: {
                notNextTick: true,
                //循环
                loop:true,
                //设定初始化时slide的索引
                initialSlide:0,
                //自动播放
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                //滑动速度
                speed:800,
                //滑动方向
                direction : 'horizontal',
                //小手掌抓取滑动
                grabCursor : true,
                //滑动之后回调函数
                on: {
                    slideChangeTransitionEnd: function(){
                    },
                },
                //左右点击
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //分页器设置         
                // pagination: {
                //    el: '.swiper-pagination',
                //    clickable :true,
                //    type: 'custom',
                //    //自定义分页器样式
                //    renderCustom: function (swiper, current, total) {
                //         const activeColor = '#168fed'
                //         const normalColor = '#aeaeae'
                //         let color = ''
                //         let paginationStyle = ''
                //         let html = ''
                //         for (let i = 1; i <= total; i++) {
                //             if (i === current) {
                //                 color = activeColor
                //             } else {
                //                 color = normalColor
                //             }
                //             paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:20px;transform:skew(15deg);border-radius:0;`
                //             html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
                //         }
                //         return html
                //     }
                // }
            }
        }
    }
}
</script>

<style>
    .auto{
        margin: 0 auto;
        width: 1300px;
    }
    .swiperbanner{
        width: 100%;
        height: 200px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .swiperbanner img{
        width: 100%;
        height: 200px;;
    }
</style>
