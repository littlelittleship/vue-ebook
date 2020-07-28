<template>
    <div>
        <span class="iconfont">&#xe689;</span>
        <span class="iconfont">&#xe60b;</span>
        <div style="fontSize:1rem">使用了fontfamily</div>
        <div class="font">使用了fontfamily</div>
        <div class="font1">使用了fontfamily</div>
        <div class="font2">使用了fontfamily</div>
        <!-- <button @click="handleClick">点击</button>
        <button @click="handleClick1">点击2</button>
        <transition name="slide-down">
            <div class="active" v-if="show">
                
            </div>
        </transition> -->
        <!-- <div class="fa">
            <div class="son1">1</div>
            <div class="son2">2</div>
        </div> -->
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            show1: true,
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleClick() {
            this.show = !this.show
        },
        handleClick1() {
            this.show1 = !this.show1
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/global.scss';
.font{
    font-size: px2rem(75);
    font-family: LiuJianMaoCao-Regular;
}
.font1{
    font-size: px2rem(75);
    font-family: LongCang-Regular;
}
.font2{
    font-size: px2rem(75);
    font-family: MaShanZheng-Regular;
}
.active{
    background-color: aqua;
    width: 300px;
    height: 300px;
}
.active1{
    background-color: red;
    width: 300px;
    height: 300px;
}
.fa {
    background-color: #fff;
    @include center;
}
.son1 {
    width: 200px;
    height: 200px;
    background-color: orange;
}
.son2 {
    width: 300px;
    height: 300px;
    background-color: blue;
}
</style>
