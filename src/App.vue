<template>
  <div class="frame">
    <div v-if="!hideUIPaths.includes(route.fullPath)" class="frame-header">
      <div class="header-left">
        <Image src="/ignore/VCU_H_Gold lettering - 4C.png" alt="VCU logo"></Image>
        <StatusMessage class="block-warning" icon="exclamation-triangle-fill" message="Development build" />
      </div>
      <div class="header-middle">

      </div>
      <div class="header-right">
        <span class="header-label">Hello, name!<br>Unit Name - Subunit</span>
        <Button class="logout-button">
          <Icon icon="box-arrow-in-right"></Icon>
          <span>Logout</span>
        </Button>
      </div>
    </div>
    <div class="frame-content">
      <SideNav v-if="!hideUIPaths.includes(route.fullPath)" :links="navLinks" />
      <div class="page">
        <RouterView />
      </div>
    </div>
  </div>
  <NotificationPanel />
  <!-- <div class="modal-wrapper">
    <PopupBase id="create-device" title="Create Device">
      <Form>
        <Textbox name="hostname" title="Hostname" placeholder="Hostname" />
      </Form>
    </PopupBase>
  </div> -->
</template>

<script setup lang='ts'>
import SideNav from '@/components/ui/sidenav/SideNav.vue'
import StatusMessage from '@/components/ui/StatusMessage.vue'
import Icon from '@/components/ui/Icon.vue'
import Button from '@/components/ui/Button.vue'
import Image from '@/components/ui/Image.vue'
import NotificationPanel from '@/components/ui/notifications/NotificationPanel.vue'
import PopupBase from '@/components/ui/popups/PopupBase.vue'

import { Pages } from '@/composables/pages.js'

import { useNotificationsStore } from '@/stores/notifications'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useModalStore } from '@/stores/modal'

import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue';
import Form from './components/ui/forms/Form.vue'
import Textbox from './components/ui/forms/Textbox.vue'

const userStore = useCurrentUserStore()
const notifStore = useNotificationsStore()
const modalStore = useModalStore()

const router = useRouter()
const route = useRoute()

const hideUIPaths = ['/login']

const navLinks=Array.from(Pages, (page, _) => {
  return {
    link: page.path,
    label: page.name,
    icon: page.icon,
    display: page.condition && page.displayOnNav
  }
})

onMounted(() => {
  if (!userStore.user_loggedIn) {
    //router.push('/login')
  }
})

const deviceCreateQuickAction = () => {

}

</script>

<style scoped lang='scss'>
.status-popup-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  padding: 8px;
}

.status-popup {
  padding: 5px;
  border-radius: 5px;

  max-width: 350px;

  .status-popup-header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
}

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

.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
