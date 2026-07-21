<template>
  <div class="frame">
    <div class="frame-header">
      <div class="header-left">
        
      </div>
    </div>
    <div class="frame-content">
      <SideNav />
      <div class="page">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SideNav from './components/SideNav.vue'
</script>

<style scoped lang='scss'>
.frame {
  display: flex;
  flex-direction:column;
  height: 100%;
}

.frame-header {
  display: flex;
  flex-direction: row;
  min-height: 60px;

  background-color: $color-dark-secon;

  border-bottom: 1px solid black;
}

.frame-content {
  display: flex;
  flex-direction: row;

  flex-grow: 100%;

  height: 100%;

  .page {
    background-color: $color-secon;

    overflow-y: scroll;

    width: 100%;
  }
}
</style>
