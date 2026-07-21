<template>
  <aside :class="['nav-pane', { 'collapsed': sidebarCollapsed } ]">
    <div class='header'>
      <div v-if='!sidebarCollapsed' class='logo'>
        <span class='logo-text'>Dashboard</span>
      </div>
      <!-- <button class='toggle' @click="toggle" aria-label="Toggle Sidebar">
        <i :class="['bi', sidebarCollapsed? 'bi-chevron-right' : 'bi-chevron-left' ]"></i>
      </button> -->
    </div>

    <div class='nav'>
      <ul>
        <li><RouterLink to='/' class='nav-item'>
          <Icon icon="house-door-fill" class="nav-item-icon" />
          <span v-if='!sidebarCollapsed' class='nav-item-label'>Home</span>
        </RouterLink></li>
        <li><RouterLink to='/devices' class='nav-item'>
          <Icon icon="pc-display" class="nav-item-icon" />
          <span v-if='!sidebarCollapsed' class='nav-item-label'>Devices</span>
        </RouterLink></li>
        <li><RouterLink to='/manifests' class='nav-item'>
          <Icon icon="database-fill" class="nav-item-icon"></Icon>
          <span v-if='!sidebarCollapsed' class='nav-item-label'>Manifests</span>
        </RouterLink></li>
        <li><RouterLink to='/settings' class='nav-item'>
          <Icon icon="gear-fill" class="nav-item-icon"></Icon>
          <span v-if='!sidebarCollapsed' class='nav-item-label'>Settings</span>
        </RouterLink></li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang='ts'>
  // TODO: add a thing to allow this menu to be populated by an object.

  import Icon from './ui/Icon.vue'
  import {ref, reactive, watch} from 'vue'

  const sidebarCollapsed = ref(false)

  //submenus
  const submenu = reactive({
    testmenu: false
  })

  const toggle = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  const toggleSubmenu = (section: keyof typeof submenu) => {
    submenu[section] = !submenu[section]
  }

  watch(sidebarCollapsed, (value) => {
  })
</script>

<style scoped lang='scss'>

.nav-pane {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background-color: $color-dark-secon;
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
      color: $color-tert-dark;
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
      background-color: $color-tert-dark;
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

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: $color-text-light;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background-color: $color-tert-dark !important;
    color: $color-text-regular !important;
  }

  .nav-item-icon {
    font-size: 1.25rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
  }

  .nav-item-label {
    flex: 1;
    white-space: nowrap;
  }
}

.router-link-active {
  background-color: $color-tert-light !important;
  color: $color-text-regular !important;
}

</style>
