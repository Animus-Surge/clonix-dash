<template>
  <Section>
    <TabPanel :tab-titles="['Device Info', 'Metrics', 'Reports']" :num-tabs="3">
      <template v-slot:tab-0>
        <Grid :num-cols="3">
          <Card title="System Information" icon="pc-display">
            <table>
              <tr class="table-header">
                <td>
                  Key
                </td>
                <td>
                  Value
                </td>
              </tr>
              <tr>
                <td>
                  Device UUID
                </td>
                <td>
                  01234567-89ab-cdef-0123456789ab
                </td>
              </tr>
              <tr>
                <td>
                  Manufacturer
                </td>
                <td>
                  Dell, Inc.
                </td>
              </tr>
              <tr>
                <td>
                  Model
                </td>
                <td>
                  Precision 3650
                </td>
              </tr>
              <tr>
                <td>
                  Serial Number
                </td>
                <td>
                  123ABC4
                </td>
              </tr>
              <tr>
                <td>
                  Provision Date
                </td>
                <td>
                  11/01/2025
                </td>
              </tr>
            </table>
          </Card>
          <Card title="Hardware Information" icon="cpu">
            <table>
              <tr class="table-header">
                <td>
                  Key
                </td>
                <td>
                  Value
                </td>
              </tr>
              <tr>
                <td>
                  CPU
                </td>
                <td>
                  Intel i7-12700u @ 2.3GHz 12 Core
                </td>
              </tr>
              <tr>
                <td>
                  GPU
                </td>
                <td>
                  NVIDIA RTX 5000
                </td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>
                  64 GB
                </td>
              </tr>
            </table>
          </Card>
          <Card title="Network Information" icon="hdd-network">
            <table>
              <tr class="table-header">
                <td>
                  Key
                </td>
                <td>
                  Value
                </td>
              </tr>
              <tr>
                <td>
                  IP Address
                </td>
                <td>
                  10.0.0.1
                </td>
              </tr>
              <tr>
                <td>
                  nic1 MAC
                </td>
                <td>
                  01:23:45:67:89:ab
                </td>
              </tr>
              <tr>
                <td>
                  Hostname
                </td>
                <td>
                  egr-e-ab-cd-01.rams.adp.vcu.edu
                </td>
              </tr>
            </table>
          </Card>
        </Grid>
      </template>
      <template v-slot:tab-1>
        <Grid :num-cols="2">
          <Column>
            <Card title="CPU Usage" icon="cpu">

            </Card>
          </Column>
        </Grid>
      </template>
      <template v-slot:tab-2>

      </template>
    </TabPanel>
  </Section>
  <Section>
    <Grid :num-cols="2">
      <Card title="Encryption Keys" icon="key">
        <table>
          <tr class="table-header">
            <td>
              Key Name
            </td>
            <td>
              Value
            </td>
            <td>
              Actions
            </td>
          </tr>
          <tr>
            <td>
              Master LUKS key
            </td>
            <td>
              <HiddenValue value="thisisatestkey!0123" />
            </td>
            <td>
              <a class="actionbutton">
                <Icon icon="trash"></Icon>
              </a>
            </td>
          </tr>
        </table>
      </Card>
      <Card title="Actions" icon="lightning">
        <Grid :num-cols="2">
          <Button disabled>View Logs</Button>
          <Button disabled>View ENC</Button>
          <Button disabled>Transfer System</Button>
          <Button disabled>Remove Device</Button>
        </Grid>
      </Card>
    </Grid>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/sections/Section.vue';
import TabPanel from '@/components/ui/panels/TabPanel.vue';
import Card from '../ui/sections/Card.vue';

import { useDeviceViewStore } from '@/stores/devicesView';
import Grid from '../ui/sections/Grid.vue';
import Column from '../ui/sections/Column.vue';
import AdvancedTable from '../ui/tables/AdvancedTable.vue';
import Button from '../ui/Button.vue';
import HiddenValue from '../ui/HiddenValue.vue';

const devices = useDeviceViewStore()

</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
 
  td, th {
    text-align: left;
    padding: 2px;
  }

  tr {
    border-bottom: 1px solid black;

    transition: background 0.15s;

    &.table-header {
      cursor: initial;
      font-weight: bold;
    }

    &:nth-child(even) {
      background-color: $color-grayscale-8;
    }

    &:hover {
      background-color: $color-hover;
    }
  }
}
</style>
