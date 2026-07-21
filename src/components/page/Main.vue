<template>
  <Section>
    <Grid>
      <Column>
        <NewDevices />
      </Column>
      <Column>
        <Card icon="database" title="title">
          <span>This is the card body!</span>
        </Card>
      </Column>
      <Column>
        <Card icon="database" title="title">
          <span>This is the card body!</span>
        </Card>
      </Column>
    </Grid>
  </Section>
</template>

<script setup lang='ts'>
import Section from '@/components/ui/sections/Section.vue';
import Grid from '@/components/ui/sections/Grid.vue';
import Column from '@/components/ui/sections/Column.vue';
import Card from '@/components/ui/Card.vue';
import NewDevices from '@/components/dashboardElements/cards/NewDevices.vue';

const testTableData = {
  headerLabels: ["Hostname", "Unit", "Provision Date"],
  fontOverrides: ["monospace", "none", "none", "none"],
  iconColumn: 3,
  entries: [
    ["egr-csc-btm-s04", "College of Engineering", "2026-05-12", false],
    ["egr-mne-lca-w04", "College of Engineering", "2026-04-30", "Failed last puppet run. Click for details."],
    ["med-lab-jld-d01", "School of Medicine", "2026-01-21", "Last check in: 2026-04-01"]
  ]
}

</script>

<style scoped lang="scss">
</style>
