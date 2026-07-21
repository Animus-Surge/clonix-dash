<template>
  <div class="tab-panel">
    <div class="tab-bar">
      <span
        v-for="i in numTabs"
        :key="i"
        @click="switchTab(i - 1)"
        :class="['tab-button', currentTab === i - 1 ? 'active' : null]"
      >{{ tabTitles[i - 1] }}</span>
    </div>
    <div class="tab-content">
      <div
        v-for="(_, i) in numTabs"
        :key="i"
        v-show="currentTab === i"
        class="tab"
      >
        <slot :name="`tab-${i}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  numTabs: number
  tabOverride?: number
  tabTitles: string[]
}>(), {
  tabTitles: () => [],
})

const currentTab = ref(props.tabOverride ?? 0)

const switchTab = (tab: number) => {
  currentTab.value = tab
}
</script>

<style scoped lang="scss">
.tab-panel {
  width: 100%;

  display: flex;
  flex-direction: column;

  .tab-bar {
    display: flex;
    margin-right: 20px;
    margin-left: 20px;

    gap: 3px;
  }
}
.tab-button {
  display: block;
  padding: 3px 10px;
  border-start-start-radius: 5px;
  border-start-end-radius: 5px;

  cursor: pointer;
  background-color: $color-dark-secon;
  color: $color-text-light;

  transition: background 0.15s, color 0.15s;

  &.active {
    background-color: $color-darkish-secon;
    color: $color-text-regular;
  }

  &:hover {
    background-color: $color-tert-dark;
    color: $color-text-regular;
  }
}

.tab {
  background-color: $color-darkish-secon;

  padding: 15px;

  border-radius: 5px;
}
</style>
