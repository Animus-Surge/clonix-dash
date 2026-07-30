<template>
  <div class="notification-panel">
    <Notification 
      v-for="notification in notifStore.notifs"
      :key="notification.id"
      :id="notification.id"
      :title="notification.title" 
      :message="notification.message"
      :dismiss-action="notifStore.dismiss"
      :type="notification.type"
      />
  </div>
</template>

<script setup lang="ts">
import Notification from './Notification.vue';
import { useNotificationsStore } from '@/stores/notifications';

const notifStore = useNotificationsStore()
</script>

<style scoped lang="scss">
.notification-panel {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  padding: 8px;
}
</style>