<template>
  <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="item-icon" src="~assets/img/home/home.svg" alt="" srcset="">
        <img slot="item-icon-active" src="~assets/img/home/home.active.svg" alt="" srcset="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="item-icon" src="~assets/img/category/category.svg" alt="" srcset="">
        <img slot="item-icon-active" src="~assets/img/category/category.active.svg" alt="" srcset="">
        <div slot="item-text">标签</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img slot="item-icon" src="~assets/img/cart/cart.svg" alt="" srcset="">
        <img slot="item-icon-active" src="~assets/img/cart/cart.active.svg" alt="" srcset="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="item-icon" src="~assets/img/profile/profile.svg" alt="" srcset="">
        <img slot="item-icon-active" src="~assets/img/profile/profile.active.svg" alt="" srcset="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>