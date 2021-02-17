<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image"  />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    },
  },
};
</script>

<style  scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 15px;
  padding: 15px 0 30px;
  border-bottom: 12px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 65px;
  margin-bottom:2px ;
}
</style>