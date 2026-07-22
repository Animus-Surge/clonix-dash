<template>
  <Section>
    <TabPanel :num-tabs="3" :tab-titles="['Overview', 'Metrics', 'Logs']">
      <template #tab-0>
        <Grid numCols="2">
          <Column>
            <Card icon="pc-display" title="Device Information">
              <Table :dataset="deviceInfo" />
            </Card>
          </Column>
          <Column>
            <Card icon="hdd-stack" title="OS Information">
              <Table :dataset="osInfo" />
            </Card>
          </Column>
        </Grid>
      </template>
      <template #tab-1>
        <Grid numCols="4">
          <!--Info cards-->
          <Card icon="cpu" title="CPU Information">
            <Table :dataset="cpuInfo" />
          </Card>
          <Card icon="gpu-card" title="GPU Information">
            <Table :dataset="gpuInfo" />
          </Card>
          <Card icon="memory" title="Memory Information">
            <Table :dataset="memoryInfo" />
          </Card>
          <Card icon="hdd-stack" title="Disk Information">
            <Table :dataset="disksInfo" />
          </Card>

          <!--Usage charts-->
          <Card icon="gauge" title="CPU Usage">
            
          </Card>
        </Grid>
      </template>
      <template #tab-2>Tab 3</template>
    </TabPanel>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/sections/Section.vue'
import Grid from '@/components/ui/sections/Grid.vue'
import Column from '@/components/ui/sections/Column.vue'
import Card from '@/components/ui/Card.vue'
import Table from '@/components/ui/Table.vue'
import TabPanel from '@/components/ui/panels/TabPanel.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // TODO: load data
})

const kv = (entries: [string, string][]) => ({
  headerLabels: ['Property', 'Value'],
  fontOverrides: ['none', 'monospace'],
  iconColumn: -1,
  entries
})

const deviceInfo = kv([
  ['Serial Number', 'JK7F9R3'],
  ['Certname', 'zeus.example.adp.net'],
  ['Unit', 'Unit 1'],
  ['Provision Date', '2026-07-15'],
  ['Last Check In', '2026-07-20 14:32:05 UTC'],
  ['Puppet Version', '8.10.1'],
  ['AIO Agent Version', '8.10.1'],
  ['Catalog Environment', 'production'],
  ['Uptime', '23 Days, 03:17:22']
])

const diskUsage = kv([
  ['/', '42% (168 / 400 GB)'],
  ['/var', '73% (146 / 200 GB)'],
  ['/home', '18% (36 / 200 GB)'],
  ['/tmp', '5% (5 / 100 GB)'],
])

const osInfo = kv([
  ['Operating System', 'Ubuntu'],
  ['OS Family', 'Debian'],
  ['Release', '24.04.2 LTS (Noble Numbat)'],
  ['Kernel Release', '6.8.0-58-generic'],
  ['Kernel Version', '6.8.0'],
  ['Architecture', 'x86_64'],
])

const cpuInfo = kv([
  ['Processor 0', 'AMD EPYC 7763 64-Core Processor'],
  ['Processor Count', '2'],
  ['Core Count', '128'],
  ['Thread Count', '256'],
])

const gpuInfo = kv([
  ['GPU 0', 'NVIDIA A100 80GB PCIe'],
  ['Driver', '535.183.01'],
  ['CUDA Version', '12.2'],
  ['GPU Memory', '80 GB HBM2e'],
])

const memoryInfo = kv([
  ['Memory Size', '512 GB'],
  ['Memory Free', '325 GB'],
  ['Swap Total', '32 GB'],
  ['Swap Free', '24 GB'],
])

const disksInfo = kv([
  ['sda', '400 GB NVMe SSD (Samsung MZQL24T0HCLS)'],
  ['sdb', '200 GB NVMe SSD (Samsung MZQL21T0HCLS)'],
  ['sdc', '200 GB NVMe SSD (Samsung MZQL21T0HCLS)'],
  ['sdd', '100 GB SATA SSD (Intel SSDSC2KB010T7)'],
])

const cpuUsage = 12
const cpuGaugeSections = [
  { value: 70, color: '#198754' },
  { value: 15, color: '#ffc107' },
  { value: 15, color: '#dc3545' },
]
</script>
