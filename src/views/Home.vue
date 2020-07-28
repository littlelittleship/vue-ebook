<template>
    <div class="home">
        <div class="home_content">
            <router-view></router-view>
        </div>

        <div class="home_page">
            <div class="home_page_item" :class="selectItem === 1 ? 'home_page_item_selected' : ''" @click="handleclick(1)">
                <span class="icon iconfont">&#xe624;</span>
                <div class="name">首页</div>
            </div>
            <div class="home_page_item" :class="selectItem === 2 ? 'home_page_item_selected' : ''" @click="handleclick(2)">
                <span class="icon iconfont">&#xe608;</span>
                <div class="name">分类</div>
            </div>
            <div class="home_page_item" :class="selectItem === 3 ? 'home_page_item_selected' : ''" @click="handleclick(3)">
                <span class="icon iconfont">&#xe65d;</span>
                <div class="name">书架</div>
            </div>
            <div class="home_page_item" :class="selectItem === 4 ? 'home_page_item_selected' : ''" @click="handleclick(4)">
                <span class="icon iconfont">&#xe601;</span>
                <div class="name">我的</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectItem: 1,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleclick(val) {
            var path = ''
            if (val === 1) { 
                path = '/homePage'
                this.selectItem = 1 
            }
            if (val === 2) { 
                path = '/bookCate'
                this.selectItem = 2 
            }
            if (val === 3) { 
                path = '/category'
                this.selectItem = 3 
            }
            if (val === 4) { 
                path = '/mine'
                this.selectItem = 4 
            }
            this.$router.push({ path })
        },
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/global.scss';
.home {
    position: relative;
    .home_page {
        position: fixed;
        bottom: 0px;
        left: 0px;
        border-top: 1px solid aqua;
        box-shadow: 0 5px 5px 5px aqua;
        border-radius: 20px 20px 0 0;
        font-size: px2rem(37.5*3);
        width: 100%;
        height: 60px;
        @include spaceBetween;
        .home_page_item {
            padding: 10px 0;
            flex-direction: column;
            @include center;
            justify-content: space-around;
        }
        .home_page_item_selected{
            font-size: px2rem(37.5*4);
            color: aqua;
        }
    }
}
</style>
