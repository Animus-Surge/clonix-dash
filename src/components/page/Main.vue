<template>
  <Section>
    <Grid :num-cols="3">
      <Column>
        <Card title="Recent Messages" icon="chat-right-text">
          <Table tableId="dash-messages" :header="['Message', 'From', 'Urgency']" :entries="dataMessages" />
          <Button button-type="link" href="/messages">See All</Button>
        </Card>
      </Column>
      <Column>
        <Card title="New Systems" icon="pc-display">
          <Table tableId="dash-newDevs" :header="['Hostname', 'Serial Number', 'Provision Date']" :entries="dataNewDevices" />
          <Button button-type="link" href="/devices">See All</Button>
        </Card>
      </Column>
    </Grid>
  </Section>
</template>

<script setup lang='ts'>
import Section from '@/components/ui/sections/Section.vue';
import Grid from '@/components/ui/sections/Grid.vue';
import Column from '@/components/ui/sections/Column.vue';
import Card from '@/components/ui/sections/Card.vue';
import Button from '@/components/ui/Button.vue';
import Table from '@/components/ui/tables/Table.vue';

const dataMessages = [
  ['System updates complete for egr-u-it-esf-03.', 'Puppet', 'Info'],
  ['Hello World!', 'System', 'Info']
]

const dataNewDevices = [
  ['egr-u-mn-pl-06', '4126RP2', '2026-07-23'],
  ['egr-u-it-esf-03', '7T39VD3', '2026-06-02']
]

</script>

<style scoped lang="scss">
</style>
