// Page definitions

import Device from '@/components/page/Device.vue'
import Devices from '@/components/page/Devices.vue'
import Login from '@/components/page/Login.vue'
import Main from '@/components/page/Main.vue'
import Messages from '@/components/page/Messages.vue'
import Unit from '@/components/page/Unit.vue'
import Units from '@/components/page/Units.vue'

import { useCurrentUserStore } from '@/stores/currentUser'

// This array gets passed directly to the router and the SideNav component
export const Pages = [
  {
    path: "/",
    name: "Overview",
    component: Main,
    icon: "house-door",
    condition: true, // Controls if the page can be gone to
    displayOnNav: true // Controls if the page should be shown on the nav bar
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
    icon: "chat-right-text",
    condition: true,
    displayOnNav: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    icon: '',
    condition: true, // Always available
    displayOnNav: false
  },
  // Scope locked: requires minimum `unit:devices:readonly`
  {
    path: "/devices",
    name: "Devices",
    component: Devices,
    icon: "pc-display",
    condition: true,
    displayOnNav: true
  },
  {
    path: "/devices/:device",
    name: "Device Info",
    component: Device,
    icon: "",
    condition: true,
    displayOnNav: false
  },
  // Scope locked: requires minimum `admin:units:readonly`
  {
    path: '/units',
    name: 'Units',
    component: Units,
    icon: '',
    condition: true,
    displayOnNav: true
  },
  // Scope locked: requires minimum `unit:readonly`
  {
    path: '/units/:unit',
    name: 'Unit Info',
    component: Unit,
    icon: '',
    condition: true,
    displayOnNav: true
  }
]