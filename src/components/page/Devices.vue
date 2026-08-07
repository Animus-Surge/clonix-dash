<template>
  <Section>
    <Card title="Devices" icon="pc-display">
      <ButtonGroup>
        <Button><Icon icon="plus-lg"/> Create Device</Button>
        <Button><Icon icon="filter"/> Filter</Button>
        <DropdownButton>Actions</DropdownButton>
        <Textbox placeholder="Search here..." />
      </ButtonGroup>
      <Table v-model="selectedRows"
        style="font-family: 'Adwaita Mono', monospace;"
        selectable linked
        tableId="devs-list" 
        :header="['UUID', 'Hostname', 'Serial Number', 'Provision Date', 'Last Check In', 'Uptime', 'Unit', 'Status']" 
        :entries="devicesList"
        @entry:click="tableEntryClick">
      </Table>
      <div class="paginator">
        <Button disabled><Icon icon="chevron-double-left"></Icon></Button>
        <Button disabled><Icon icon="chevron-left"></Icon></Button>
        <Button disabled>1</Button>
        <Button disabled><Icon icon="chevron-right"></Icon></Button>
        <Button disabled><Icon icon="chevron-double-right"></Icon></Button>
      </div>
    </Card>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/sections/Section.vue';
import Card from '@/components/ui/sections/Card.vue';
import Table from '@/components/ui/tables/Table.vue';
import ButtonGroup from '@/components/ui/ButtonGroup.vue';
import Button from '@/components/ui/Button.vue';
import Icon from '@/components/ui/Icon.vue';

import { ref } from 'vue'
import DropdownButton from '../ui/DropdownButton.vue';
import Textbox from '../ui/forms/Textbox.vue';
import { useNotificationsStore } from '@/stores/notifications.js';

import { useRouter } from 'vue-router';

const selectedRows = ref([])
const currentPage = ref(1)

const router = useRouter()

const notifStore = useNotificationsStore()

const devicesList = [
  ['01234567-89ab-cdef-0123456789ab', 'egr-w-it-esf-10', 'N/A', '2026-07-31', '2026-08-04 11:20:00', '4 Days', 'College of Engineering', 'Healthy'],
  ['12345678-9abc-def0-123456789abc', 'egr-w-it-esf-03', 'ABC123D', '2026-06-20', '2026-08-04 11:20:00', '20 Days', 'College of Engineering', 'Healthy'],
  ['23456789-abcd-ef01-23456789abcd', 'egr-l-4221-99', 'BCD234E', '2026-07-01', '2026-07-03 13:25:00', '0 Days', 'College of Engineering', 'Offline']
]

const actionButtons = [
  ['refresh', "Refresh"],
  ['create', "Create"],
  ['delete', "Delete"],
  ['view', "View"],
  ['report', "Run Report"]
]
const buttonClick = (action: string) => {
  switch (action) {
    case 'refresh':
      break

    default:
      break
  }
}

const tableEntryClick = (entry: string) => {
  router.push(`/devices/${entry}`)
}

const paginate = (page: number) => {
  if (page === -1) {
    // First page
  } else if (page === -2) {
    // Last page
  } else if (page === -3) {
    // Next page
  } else if (page === -4) {
    // Previous page
  } else {
    // Numbered pages
  }
}
</script>

<style scoped lang="scss">
.paginator {
  gap: 5px;
  display: flex;
  justify-content: center;
}
</style>