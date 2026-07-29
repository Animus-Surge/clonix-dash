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
            <Card icon="hdd-stack" title="Status">
              
            </Card>
          </Column>
        </Grid>
      </template>
      <template #tab-1>
        <Grid numCols="4">
          <Card icon="cpu" title="CPU Information">
            <Table :dataset="cpuInfo" />
            <hr> <!--FIXME-->
            <LinePlot title="CPU Usage" :xlabels="cpuUsage[0]" :data="cpuUsage[1]" />
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
        </Grid>
      </template>
      <template #tab-2>
        <Card icon="hdd-stack" title="System Logs">
          <Table :dataset="logs" />
        </Card>
      </template>
    </TabPanel>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/sections/Section.vue'
import Grid from '@/components/ui/sections/Grid.vue'
import Column from '@/components/ui/sections/Column.vue'
import Card from '@/components/ui/Card.vue'
import Table from '@/components/ui/DataTable.vue'
import TabPanel from '@/components/ui/panels/TabPanel.vue'

import { onMounted } from 'vue'
import LinePlot from '@/components/ui/charts/LinePlot.vue'

onMounted(() => {
  // TODO: load data
})

const logs = {
  headerLabels: ['Timestamp', 'Type', 'Severity', 'Message'],
  fontOverrides: ['monospace', 'monospace', 'monospace', 'none'],
  entries: [
    ['2026-07-28 15:32:22', 'SYSTEM', 'NOTICE', 'System has been offline for more than 5 minutes!'],
    ['2026-07-28 15:26:18', 'POWERCTL', 'INFO', 'System shutdown.']
  ]
}

const kv = (entries: [string, string][]) => ({
  headerLabels: ['Property', 'Value'],
  fontOverrides: ['none', 'monospace'],
  iconColumn: -1,
  entries
})

const cpuUsage = [
  Array.from({ length: 31 }, (_, i) => `${i - 30}`),
  [100, 100, 100, 70, 2, 3, 2, 17, 25, 30, 31, 31, 31, 28, 29, 14, 29, 33, 81, 82, 10, 10, 9, 10, 11, 11, 9, 11, 19, 1, 0]
]

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

</script>
