<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item"
    :goods-item="item"/>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  compoments: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>