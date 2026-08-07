<template>
  <Section>
    <Grid :num-cols="3">
      <Column>
        <Card title="Recent Messages" icon="chat-right-text">
        </Card>
        <Card title="Action History">

        </Card>
      </Column>
      <Column>
        <Card title="New Systems" icon="pc-display">

        </Card>
      </Column>
      <Column>
        <Card title="Quick Actions" icon="lightning-fill">
          <Grid :num-cols="2">
            <Button disabled>Action 1</Button>
          </Grid>
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


</script>

<style scoped lang="scss">
</style>
