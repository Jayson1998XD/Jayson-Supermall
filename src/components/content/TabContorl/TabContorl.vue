<template>
  <div class="tab-contorl">
    <div class="tab-contorl-item" 
    :class="{active: index === currentIndex}" 
    v-for="(item, index) in titles"  :key="index"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>  
</template>

<script>
export default {
  name:'TabContorl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    },
  },
   data() {
      return{
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
      }
    }
}
</script>

<style scoped>
.tab-contorl {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;

}

.tab-contorl-item {
  flex: 1;
}

.tab-contorl-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>