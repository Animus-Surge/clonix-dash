<template>
  <div class="frame">
    <div class="frame-header">
      <div class="header-left">
        <!-- <Image src="/ignore/VCU_H_Gold lettering - 4C.png" alt="VCU logo"></Image> -->
        <StatusMessage class="block-warning" icon="exclamation-triangle-fill" message="Development build" />
      </div>
      <div class="header-middle">

      </div>
      <div class="header-right">
        <span class="header-label">Hello, name!<br>Unit Name - Subunit</span>
        <Button href="/" class="logout-button">
          <Icon icon="box-arrow-in-right"></Icon>
          <span>Logout</span>
        </Button>
      </div>
    </div>
    <div class="frame-content">
      <SideNav :links="navLinks" />
      <div class="page">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SideNav from '@/components/ui/sidenav/SideNav.vue'
import StatusMessage from '@/components/ui/StatusMessage.vue';
import Icon from '@/components/ui/Icon.vue';
import Button from '@/components/ui/Button.vue';
import Image from '@/components/ui/Image.vue';

import { Pages } from '@/composables/pages.js';

const navLinks=Array.from(Pages, (page, _) => {
  return {
    link: page.path,
    label: page.name,
    icon: page.icon,
    display: page.condition && page.displayOnNav
  }
})

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
  justify-content: space-between;
  min-height: 50px;
  max-height: 50px;

  background-color: $color-dark-section;

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
    background-color: $color-grayscale-8;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    width: 100%;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100%;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-label {
  font-size: 14pt;
  text-align: end;
  color: $color-text-light;
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

.logout-button {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  gap: 5px;
  width: fit-content;

  font-size: 20pt;

  span {
    font-size: 14pt;
  }
}
</style>
