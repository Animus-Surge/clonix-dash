<template>
  <aside class="nav-pane">
    <div class='header'>
      <div class='logo'>
        <span class='logo-text'>Dashboard</span>
      </div>
    </div>

    <div class='nav'>
      <ul>
        <SidenavButton v-for="link in links" :href="link.link" :label="link.label" :icon="link.icon" />
      </ul>
    </div>
  </aside>
</template>

<script setup lang='ts'>
  // TODO: add a thing to allow this menu to be populated by an object.
  import SidenavButton from '@/components/ui/sidenav/SidenavButton.vue'

  interface Navlink {
    link: string
    label: string
    icon: string
  }

  import {ref} from 'vue'

  const sidebarCollapsed = ref(false)

  const props = defineProps({
    links: {type: Array<Navlink>, required: true}
  })
</script>

<style scoped lang='scss'>

.nav-pane {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background-color: $color-dark-section;
  color: $color-text-light;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-x: hidden;
  border-right: 1px solid black;

  &.collapsed {
    width: 72px;

    .header {
      justify-content: center;
    }

    .nav-item {
      padding: 12px 16px;
    }
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 20px;
  border-bottom: 1px solid black;

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: bold;
    font-size: 1.2rem;
    white-space: nowrap;

    .logo-icon {
      color: $color-tert;
      font-size: 1.3rem;
    }
  }

  .toggle {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 6px;
    font-size: 1.2rem;

    transition: background 0.15s;

    &:hover {
      background-color: $color-hover;
    }
  }
}

.nav {
  flex: 1;
  overflow-y: auto;
  padding: 12px 8px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 4px;
  }
}
</style>
