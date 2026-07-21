<template>
  
</template>

<script setup lang="ts">
const testData = {
  headerLabels: ['Serial Number', 'Hostname', 'Unit', 'Provision Date', 'Last Check In'],
  fontOverrides: ['monospace', 'monospace', 'none', 'none', 'none', 'none'],
  iconColumn: 5,
  entries: [
    ['JK7F9R3', 'zeus.example.adp.net', 'Unit 1', '2026-07-15', '2026-07-20 14:32:05 UTC', false],
    ['PF-3K4M2X', 'poseidon.example.adp.net', 'Unit 2', '2026-07-10', '2026-07-18 09:15:42 UTC', 'High memory usage'],
    ['H7G2K4T', 'athena.example.adp.net', 'Unit 3', '2026-06-28', '2026-07-19 22:08:17 UTC', false],
    ['PF-AB12CD', 'apollo.example.adp.net', 'Unit 4', '2026-06-15', '2026-07-17 16:44:33 UTC', 'CPU throttling detected'],
    ['M3N5P7Q', 'hermes.example.adp.net', 'Unit 1', '2026-05-30', '2026-07-14 11:20:58 UTC', false],
    ['PF-EF34GH', 'ares.example.adp.net', 'Unit 2', '2026-05-12', '2026-05-01 03:12:41 UTC', 'Possibly Offline'],
    ['R8T2V6W', 'artemis.example.adp.net', 'Unit 3', '2026-04-22', '2026-07-01 18:55:09 UTC', 'Disk almost full'],
    ['PF-IJ56KL', 'hades.example.adp.net', 'Unit 4', '2026-04-01', '2026-04-15 07:33:26 UTC', 'Possibly Offline'],
    ['B4C8D2E', 'hera.example.adp.net', 'Unit 1', '2026-03-18', '2026-07-10 13:47:54 UTC', false],
    ['PF-MN78OP', 'thor.example.adp.net', 'Unit 2', '2026-03-05', '2026-06-30 21:04:12 UTC', 'Puppet run failed'],
    ['F6G1H3J', 'odin.example.adp.net', 'Unit 3', '2026-02-20', '2026-07-12 08:29:37 UTC', false],
    ['PF-QR90ST', 'loki.example.adp.net', 'Unit 4', '2026-02-08', '2026-07-15 15:58:03 UTC', false],
    ['K5L9M7N', 'freya.example.adp.net', 'Unit 1', '2026-01-25', '2026-07-08 10:11:45 UTC', 'Reboot required'],
    ['PF-UV12WX', 'tyr.example.adp.net', 'Unit 2', '2026-01-10', '2026-05-20 04:26:18 UTC', 'Possibly Offline'],
    ['P3Q8R5S', 'baldur.example.adp.net', 'Unit 3', '2025-12-18', '2026-07-11 19:42:51 UTC', false],
    ['PF-YZ34AB', 'heimdall.example.adp.net', 'Unit 4', '2025-12-02', '2026-07-13 12:35:07 UTC', 'Network intermittent'],
    ['T6U2V8W', 'ra.example.adp.net', 'Unit 1', '2025-11-20', '2026-07-05 06:18:22 UTC', false],
    ['PF-CD56EF', 'anubis.example.adp.net', 'Unit 2', '2025-11-05', '2026-04-28 02:49:36 UTC', 'Possibly Offline'],
    ['X4Y7Z1A', 'osiris.example.adp.net', 'Unit 3', '2025-10-22', '2026-07-14 17:03:14 UTC', 'Scheduled maintenance'],
    ['PF-GH78IJ', 'isis.example.adp.net', 'Unit 4', '2025-10-08', '2026-07-09 20:56:48 UTC', false],
    ['B2C5D8E', 'thoth.example.adp.net', 'Unit 1', '2025-09-15', '2026-07-17 14:22:31 UTC', false],
    ['PF-KL90MN', 'vishnu.example.adp.net', 'Unit 2', '2025-09-01', '2026-06-22 09:37:55 UTC', 'Firmware update pending'],
    ['F1G4H7J', 'shiva.example.adp.net', 'Unit 3', '2025-08-20', '2026-07-06 23:14:09 UTC', false],
    ['PF-OP12QR', 'indra.example.adp.net', 'Unit 4', '2025-08-05', '2026-05-10 05:41:27 UTC', 'Possibly Offline'],
    ['K8L3M6N', 'hephaestus.example.adp.net', 'Unit 1', '2025-07-22', '2026-07-10 11:08:43 UTC', 'Decommission pending'],
  ]
}
</script>
