// Page definitions

import Device from '@/components/page/Device.vue'
import Devices from '@/components/page/Devices.vue'
import Main from '@/components/page/Main.vue'

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
  }
]