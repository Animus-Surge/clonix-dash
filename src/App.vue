<template>
  <div class="frame">
    <div class="frame-header">
      <div class="header-left">
        <StatusMessage class="block-warning" icon="exclamation-triangle-fill" message="Development build" />
      </div>
      <div class="header-right">
        <Icon icon=""></Icon>
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
import SideNav from '@/components/SideNav.vue'
import StatusMessage from '@/components/ui/StatusMessage.vue';
import Icon from '@/components/ui/Icon.vue';
</script>

<style scoped lang='scss'>
.frame {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.frame-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 50px;

  background-color: $color-dark-secon;

  border-bottom: 1px solid black;

  padding: 10px;

  overflow-y: hidden;
}

.frame-content {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 0;

  .page {
    background-color: $color-secon;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    width: 100%;
  }
}

.status-message {
  align-self: center;
  text-align: center;
  border-radius: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  gap: 3px;

  .status-icon {
    font-size: 20pt;
    width: fit-content;
  }
}
</style>
