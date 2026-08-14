<template>
  <Section>
    <TabPanel :tab-titles="['Device Info', 'Metrics', 'Hardware Info']" :num-tabs="3">
      <template v-slot:tab-0>
        <Grid :num-cols="2">
          <Card title="System Information" icon="pc-display">
            <table>
              <tbody>
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
                  Hostname
                </td>
                <td>
                  egr-e-ab-cd-01.rams.adp.vcu.edu
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
              </tbody>
            </table>
          </Card>
          <Card title="Basic Network Information" icon="hdd-network">
            <table>
              <tbody>
                
              </tbody>
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
        <Grid>
          <Card title="CPU Information" icon="cpu">

          </Card>
        </Grid>
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
            <td class="key-actions">
              <a class="actionbutton">
                <Icon icon="trash"></Icon>
              </a>
              <a class="actionbutton">
                <Icon icon="copy"></Icon>
              </a>
            </td>
          </tr>
        </table>
      </Card>
      <Card title="Actions" icon="lightning">
        <Grid :num-cols="2" gap-override="5px">
          <Button disabled>View Logs</Button>
          <Button disabled>Run Report</Button>
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
import Icon from '../ui/Icon.vue';
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

    &.key-actions {
      display: flex;
      gap: 5px;

      font-size: 16pt;
    }
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

.actionbutton {
  cursor: pointer;

  transition: color $transition-color;

  &:hover {
    color: blue;
  }
}
</style>
