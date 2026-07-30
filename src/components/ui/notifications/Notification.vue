<template>
  <div class="notification" :class="'notif-' + type" @click="dismissAction(id)">
    <div class="notification-header">
      <span class="notification-title">{{ title }}</span>
      <span style="font-weight: 100; color: #8889;">Click to dismiss</span>
      <Icon :icon="icon"></Icon>
    </div>
    <div class="notification-body">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue';

const props = withDefaults(defineProps<{
    id: number
    title: string
    message: string
    icon?: string
    type?: string
    dismissAction: Function
  }>(), {
    type: 'normal',
    icon: 'exclamation-triangle'
  })

</script>

<style scoped lang="scss">

.notif-normal {
  border: 1px solid $color-grayscale-f;
  background-color: $color-grayscale-4;
  color: $color-grayscale-f;
}
.notif-critical {
  border: 1px solid $color-grayscale-f;
  background-color: $color-status-error;
  color: $color-grayscale-f;
}
.notif-error {
  border: 1px solid $color-status-error;
  background-color: $color-status-error-dark;
  color: $color-status-error;
}
.notif-warning {
  border: 1px solid $color-status-warning;
  background-color: $color-status-warning-dark;
  color: $color-status-warning;
}
.notif-info {
  border: 1px solid $color-status-info;
  background-color: $color-status-info-dark;
  color: $color-status-info;
}
.notif-success {
  border: 1px solid $color-status-success;
  background-color: $color-status-success-dark;
  color: $color-status-success;
}

.notification {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  width: 350px;

  .notification-header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
}

</style>