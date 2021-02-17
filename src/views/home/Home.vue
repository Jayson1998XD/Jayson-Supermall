<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
    <tab-contorl class="tab-contorl" :titles="['推荐','流行','新款']"></tab-contorl>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>
    <h2>内容</h2>


  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView'

import NavBar from "components/common/navbar/NavBar";
import TabContorl from "components/content/TabContorl/TabContorl"

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContorl,
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style>
#home{
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-contorl {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>