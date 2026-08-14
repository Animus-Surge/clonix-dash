<template>
  <Section>
    <Card title="Devices" icon="pc-display">
      <DataTable
        :items="users"
        :columns="columns"
        filterKey="role"
        filterLabel="Role"
        @row-click="handleRowClick">
        <!-- Custom status cell -->
        <template #cell(status)="{ value }">
          <span :class="['badge', String(value).toLowerCase()]">
            {{ value }}
          </span>
        </template>

        <!-- Custom action cell (using .stop modifier so row-click isn't triggered) -->
        <template #cell(actions)="{ item }">
          <button @click.stop="editUser(item as User)" class="btn-edit">
            Edit
          </button>
        </template>
      </DataTable>
    </Card>
  </Section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable, { type Column, type DataItem } from '@/components/ui/tables/DataTable.vue'
import Section from '../ui/sections/Section.vue'
import Card from '../ui/sections/Card.vue'

interface User {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive'
}

const columns: Column[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]

const users = ref<User[]>([
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Jones', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'Active' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Evan Wright', email: 'evan@example.com', role: 'User', status: 'Active' }
])

// Row click listener
const handleRowClick = (item: DataItem, index: number): void => {
  console.log('Row clicked:', item, 'at index:', index)
  alert(`Clicked row for ${item.name}`)
}

const editUser = (user: User): void => {
  alert(`Editing user explicitly: ${user.name}`)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;

  &.active {
    background-color: #d1fae5;
    color: #065f46;
  }

  &.inactive {
    background-color: #fee2e2;
    color: #991b1b;
  }
}
</style>